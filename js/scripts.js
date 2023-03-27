const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { email, telephone, message } = event.target;
  const endpoint =
    "<https://94tlxle5bh.execute-api.us-west-1.amazonaws.com/default/sendContactEmail>";

  const body = JSON.stringify({
    senderName: email.value,
    senderTelephone: telephone.value,
    message: message.value,
  });
  const requestOptions = {
    method: "POST",
    body,
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
      console.log(response);
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unknown error occured.";
      console.log(error);
    });
});
