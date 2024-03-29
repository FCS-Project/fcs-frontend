import { toast } from "react-toastify";
import { updateOrder } from "../order/updateOrder";

export const optionsCreate = (res, user, owner, buyerId) => {
  return {
    key: process.env.RAZORPAY_KEY_ID,
    amount: res.data.amount,
    currency: "INR",
    name: owner.name,
    description: "Proceed to buy this product",
    image: owner.displaySrc ?? "./logo.png",
    order_id: res.razorpayData.id,
    handler: (razorpayRes) => {
      var paymentStatus = false;
      if (razorpayRes.razorpayPaymentId != "") {
        paymentStatus = true;
      }
      updateOrder(
        {
          razorpayPaymentId: razorpayRes.razorpay_payment_id,
          razorpayOrderId: razorpayRes.razorpay_order_id,
          paymentStatus: paymentStatus,
          buyerId: buyerId,
        },
        res.data.id
      ).then((res) => {
        if (res.success) {
          toast.success("Payment Success!");
        } else {
          toast.error("Payment Failed!");
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
