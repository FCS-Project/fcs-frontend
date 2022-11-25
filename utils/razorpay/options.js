export const optionsCreate = (res, user) => {
  return {
    key: process.env.RAZORPAY_KEY_ID,
    amount: res.data.amount,
    currency: "INR",
    name: "VAMA CARE",
    description: "Proceed to buy this product",
    image: "/logo.png",
    order_id: res.data.id,
    handler: (res) => {
      console.log(res);
      //  Call dispatch
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
