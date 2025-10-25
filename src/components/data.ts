// Defines the structure for a single feature card
export type Feature = {
  title: string;
  description: string;
};

// An array of feature data extracted from the images
export const features: Feature[] = [
  {
    title: "Coupons",
    description: "Set up basic discounts or create customized coupons with usage limits and expiration dates."
  },
  {
    title: "Currency",
    description: "With customers in 167 countries, Podia supports businesses all over the world. Take payment in more than 20 global currencies."
  },
  {
    title: "Payment gateways",
    description: "Your customers can pay with Stripe, PayPal, Google Pay, Apple Pay, iDeal, SEPA Debit, Stripe Link, and other popular payment processors."
  },
  {
    title: "Payment plans",
    description: "Increase conversions by letting customers pay in installments over time. Podia handles the recurring charges for you."
  },
  {
    title: "Upsells",
    description: "Offer additional products and services during the checkout flow, at the exact moment your customer is ready to buy."
  },
  {
    title: "Tax collection",
    description: "Make tax time less stressful with Podia's global tax support. Collect taxes from 230 tax jurisdictions across all payment methods."
  },
  {
    title: "Discussion forums",
    description: "Add built-in discussion forums to any product you make. You decide who can post and how students get notified."
  },
  {
    title: "Product bundles",
    description: "Bundle products together, or give customers access to additional products when they make a purchase in your online store."
  },
  {
    title: "Waitlists",
    description: "Set up a product waitlist to collect email addresses while you build, then let people know when launch day arrives."
  }
];
