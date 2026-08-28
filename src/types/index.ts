export interface Bundle {
  quantity: number;
  price: number;
}

export interface Product {
  id: string;
  stickyId: number;
  name: string;
  description: string;
  image: string;
  images?: string[];
  showIngredients: boolean;
  ingredientsImage: string;
  category: string;
  billingModel: number;
  ssPrice: string;
  ssShipping: string;
  bundles?: Bundle[];
}

export interface CartItem {
  Id: string;
  Name: string;
  Image: string;
  Price: number | string;
  Qty: number;
  Total: string;
  billModel: number;
  StickyId: number;
  trlPrice: string;
  EnableMaxqty: number;
  Label: string;
  bundles?: Bundle[];
}

export interface ThemeConfig {
  primaryColor: string;
  primaryTextColor: string;
  secondaryColor: string;
  secondaryTextColor: string;
  neutralBgColor: string;
  neutralTextColor: string;
  fontFamily: string;
}

export interface SiteConfig {
  Product?: string;
  Processor?: string;
  brandName: string;
  websiteUrl: string;
  email: string;
  descriptor: string;
  corpName: string;
  phone: string;
  address: string;
  shippingCarrier: string;
  shippingPeriod: string;
  trialPeriod: number;
  useImageLogo: boolean;
  logoImage: string;
  footerLogoImage: string;
  theme: ThemeConfig;
  oneProductCartLimit?: string;
}
