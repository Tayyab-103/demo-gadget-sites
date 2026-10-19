import { NextRequest, NextResponse } from "next/server";
import { CartItem } from "@/types";

interface CheckoutPayload {
  firstName: string;
  lastName: string;
  shippingAddress1: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  shippingCountry?: string;
  phone: string;
  email: string;
  cc_no: string;
  cc_month: string;
  cc_year: string;
  CVV: string;
  notes?: string;
  products: string; // JSON-serialized CartItem[]
  "shipping-insurance"?: string;
}

interface CrmOffer {
  offer_id: number;
  product_id: number;
  billing_model_id: number;
  quantity: number;
  price: number;
}

interface CrmPayload {
  firstName: string;
  lastName: string;
  billingFirstName: string;
  billingLastName: string;
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  billingCountry: string;
  phone: string;
  email: string;
  creditCardType: string;
  creditCardNumber: string;
  expirationDate: string;
  CVV: string;
  shippingId: number;
  tranType: string;
  ipAddress: string;
  campaignId: number;
  offers: CrmOffer[];
  shippingAddress1: string;
  shippingAddress2: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  shippingCountry: string;
  notes: string;
  forceGatewayId: number;
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutPayload = await req.json();

    // CC type detection
    let creditCardType = "visa";
    const rawCcNo = body.cc_no ? body.cc_no.replace(/\s/g, "") : "";
    if (rawCcNo.startsWith("5")) creditCardType = "master";
    if (rawCcNo.startsWith("6")) creditCardType = "discover";

    // Expiration date formatting (MMYY)
    const expiryMonth = parseInt(body.cc_month, 10) < 10 ? `0${parseInt(body.cc_month, 10)}` : body.cc_month;
    const expiryYear = body.cc_year ? body.cc_year.slice(-2) : "";
    const expirationDate = `${expiryMonth}${expiryYear}`;

    // Get IP Address
    const IP = req.headers.get("x-forwarded-for") || "127.0.0.1";

    // Load credentials from Environment Variables
    const CRM_URL = process.env.CRM_URL;
    const CRM_USERNAME = process.env.CRM_USERNAME || "";
    const CRM_PASSWORD = process.env.CRM_PASSWORD || "";
    const CAMPAIGN_ID = parseInt(process.env.CRM_CAMPAIGN_ID || "0", 10);
    const OFFER_ID = parseInt(process.env.CRM_OFFER_ID || "0", 10);
    const BILLING_MODEL_ID = parseInt(process.env.CRM_BILLING_MODEL_ID || "0", 10);
    const SHIPPING_ID = parseInt(process.env.CRM_SHIPPING_ID || "0", 10);
    const TRAN_TYPE = process.env.CRM_TRAN_TYPE || "Sale";
    const FORCE_GATEWAY_ID = parseInt(process.env.CRM_GATEWAY_ID || "0", 10);
    const INSURANCE_PRODUCT_ID = parseInt(process.env.CRM_INSURANCE_PRODUCT_ID || "0", 10);
    const INSURANCE_PRICE = parseFloat(process.env.CRM_INSURANCE_PRICE || "1.00");

    // Demo/Development mode fallback if CRM endpoint is not configured
    if (!CRM_URL || CRM_URL.includes("dummy-crm-api-url")) {
      const mockOrderId = `PLY-${Math.floor(100000 + Math.random() * 900000)}`;
      return NextResponse.json({
        order_id: mockOrderId,
        status: "success",
        message: "Demo order processed successfully."
      });
    }

    // Parse shopping cart products
    let productsList: CartItem[] = [];
    if (body.products) {
      try {
        productsList = JSON.parse(body.products);
      } catch (e) {
        console.error("Failed to parse products list JSON", e);
      }
    }

    const offers: CrmOffer[] = [];
    productsList.forEach((product) => {
      offers.push({
        offer_id: OFFER_ID,
        product_id: parseInt(String(product.StickyId), 10),
        billing_model_id: BILLING_MODEL_ID,
        quantity: parseInt(String(product.Qty), 10),
        price: parseFloat(String(product.Price))
      });
    });

    // Append Shipping Insurance if selected
    if (body["shipping-insurance"] === "yes" && INSURANCE_PRODUCT_ID > 0) {
      offers.push({
        offer_id: OFFER_ID,
        product_id: INSURANCE_PRODUCT_ID,
        billing_model_id: BILLING_MODEL_ID,
        quantity: 1,
        price: INSURANCE_PRICE
      });
    }

    // Build Payload for the CRM Gateway API
    const crmPayload: CrmPayload = {
      firstName: body.firstName,
      lastName: body.lastName,
      billingFirstName: body.firstName,
      billingLastName: body.lastName,
      billingAddress1: body.shippingAddress1,
      billingAddress2: "",
      billingCity: body.shippingCity,
      billingState: body.shippingState,
      billingZip: body.shippingZip,
      billingCountry: body.shippingCountry || "US",
      phone: body.phone,
      email: body.email,
      creditCardType: creditCardType,
      creditCardNumber: rawCcNo,
      expirationDate: expirationDate,
      CVV: body.CVV,
      shippingId: SHIPPING_ID,
      tranType: TRAN_TYPE,
      ipAddress: IP,
      campaignId: CAMPAIGN_ID,
      offers: offers,
      shippingAddress1: body.shippingAddress1,
      shippingAddress2: "",
      shippingCity: body.shippingCity,
      shippingState: body.shippingState,
      shippingZip: body.shippingZip,
      shippingCountry: body.shippingCountry || "US",
      notes: body.notes || "",
      forceGatewayId: FORCE_GATEWAY_ID
    };

    // Forward request securely server-to-server
    const authString = Buffer.from(`${CRM_USERNAME}:${CRM_PASSWORD}`).toString("base64");

    const crmResponse = await fetch(CRM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${authString}`
      },
      body: JSON.stringify(crmPayload)
    });

    const responseData = await crmResponse.json();

    // Check if order was processed successfully
    if (crmResponse.ok && responseData.order_id && !responseData.error_message) {
      return NextResponse.json({
        order_id: responseData.order_id
      });
    } else {
      return NextResponse.json(
        {
          error_message: responseData.error_message || "Payment declined or processed with errors."
        },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("Secure Checkout Route Error:", err);
    return NextResponse.json(
      {
        error_message: "Internal server error occurred while processing checkout request."
      },
      { status: 500 }
    );
  }
}
