import Stripe from "stripe";
const stripeKey = Stripe(process.env.STRIPE_KEY);
export const makePayment = async (req, res) => {
  try {
    stripeKey.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
