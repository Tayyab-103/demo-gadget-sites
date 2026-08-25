# Next.js Brand-Site Setup Guide

This is a premium, config-driven Next.js template. You can launch a unique site in under 15 minutes by changing the settings in the config files.

---

## How to Customize and Launch

### Step 1: Update Brand Details & Styling
Open `config/site-config.json` and customize the company metadata and styling:
* **useImageLogo**: Set to `true` to show logo images, or `false` to display the brand name as text.
* **theme**: Change primary/secondary colors (Hex code) and choose a font (`"Poppins"`, `"Inter"`, `"Montserrat"`, or `"Roboto"`).

### Step 2: Update Products & Bundle Prices
Open `config/products.json` and configure product details and pricing packages:
* Update base price (`ssPrice`).
* Define quantity discounts in the `bundles` list (e.g. 1 Bottle, 3 Bottles, 6 Bottles).
* Set product images using local files in `public/img/products/` or public image links.

### Step 3: Add API Credentials
Open the `.env` file in the root directory and add your CRM/payment gateway API keys:
```env
CRM_URL=https://your-crm-api-url.com
CRM_USERNAME=your_username
CRM_PASSWORD=your_password
CRM_CAMPAIGN_ID=123
CRM_OFFER_ID=1
CRM_BILLING_MODEL_ID=1
CRM_SHIPPING_ID=1
CRM_GATEWAY_ID=1
```

---

## Running and Deploying

### Run Locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Deploy to Vercel
1. Upload your folder to a **GitHub** repository......
2. Import the project on **Vercel**.
3. Paste the variables from your `.env` into the **Environment Variables** section in Vercel settings.
4. Click **Deploy** and connect your custom domain.........
