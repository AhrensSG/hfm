import { NextResponse } from "next/server";
import { Stripe } from "stripe";

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export async function POST(req) {
  try {
    const { items } = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(0),
      currency: "eur",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message, { status: 500 });
  }
}
