//import request from 'request';
const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", payWithPaystack, false);

const verifyPayment = async (ref) => {
  const url = `https://api.paystack.co/transaction/verify/${ref}`;
  console.log(url, key);
  var res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer sk_test_bef5722fbf3949039c15bfc2607624b88b232df0",
    }
  });
  console.log(res.data);
};

async function payWithPaystack(e) {
  // e.preventDefault();

  let handler = PaystackPop.setup({
    key: "pk_test_0591b8db522cd6913b5dc5d8bc0218a39384107e",
    email: document.getElementById("email").value,
    amount: document.getElementById("amount").value * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1),

    onClose: function () {
      alert("window closed");
    },

    callback: function (response) {
      let message = "Payment complete! Reference " + response.reference;
      verifyPayment(response.reference);
      alert(message);
    },
  });

  handler.openIframe();
}
