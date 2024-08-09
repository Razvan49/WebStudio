document.addEventListener("DOMContentLoaded", function () {
  // Adaugă un event listener pentru a preveni trimiterea formularului fără validare
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne trimiterea automată a formularului

    const name = document.getElementById("name").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validare simplă a câmpurilor
    if (name === "" || telephone === "" || email === "" || message === "") {
      alert("Toate câmpurile sunt obligatorii!");
      return; // Oprește executarea dacă există erori
    }

    // Apelarea funcției sendMail dacă validarea trece
    sendMail();
  });
});

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    telephone: document.getElementById("telephone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_s3113xf";
  const templateID = "template_vtw1e1l";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Golește câmpurile formularului după trimiterea cu succes
      document.getElementById("name").value = "";
      document.getElementById("telephone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Mesajul tău a fost trimis cu succes!");
      // Reîncărcarea paginii după trimitere
      window.location.reload(); // Adaugă această linie
    })
    .catch((err) => console.log(err));
}
