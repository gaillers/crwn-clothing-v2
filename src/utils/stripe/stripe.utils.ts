import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

if (!STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Stripe publishable key is missing from environment variables');
}

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
