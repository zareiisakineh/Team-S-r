const riktigPassord = "TeamSøt2026";


const loginButton = document.getElementById("loginButton");
   loginButton.classList.add("loginButton");
  loginButton.addEventListener("click", () => {

    const passord =
      document.getElementById("password").value;

    if (passord === riktigPassord) {

      sessionStorage.setItem(
        "innlogget",
        "true"
      );

      window.location.href = "index.html";

    } else {
      alert("Feil passord");
    }

});