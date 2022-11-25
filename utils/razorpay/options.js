import { updateOrder } from "../order/updateOrder";

export const optionsCreate = (res, user) => {
  return {
    key: process.env.RAZORPAY_KEY_ID,
    amount: res.data.amount,
    currency: "INR",
    name: "VAMA CARE",
    description: "Proceed to buy this product",
    image: "/logo.png",
    order_id: res.razorpayData.id,
    handler: (razorpayRes) => {
      var paymentStatus = false;
      if (razorpayRes.razorpayPaymentId) {
        paymentStatus = true;
      }

      updateOrder(
        {
          razorpayPaymentId: razorpayRes.razorpay_payment_id,
          razorpayOrderId: razorpayRes.razorpay_order_id,
          paymentStatus: paymentStatus,
        },
        res.data.id
      ).then((res) => {
        console.log("payment done>>>", res);
        if (res.success) {
          alert("Payment Success!");
        } else {
          alert("Payment Failed!");
        }
      });
    },
    prefill: {
      name: user.name ?? "User Name",
      email: user.email ?? "User Email",
      contact: user.mobileNumber ?? "User Phone",
    },
    notes: {
      address: "VAMA CARE OFFICE",
    },
    theme: {
      color: "var(--black)",
    },
  };
};
