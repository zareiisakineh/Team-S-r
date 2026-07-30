
//Skrur av beskyttelsen
const BESKYTTELSE = false; // sett true når du vil aktivere igjen

if (BESKYTTELSE) {

    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        window.location.href = "login.html";
    }

}

if (sessionStorage.getItem("innlogget") !== "true") {
    window.location.href = "login.html";
}

//Da trenger du bare endre: const BESKYTTELSE = false;
//til:
//const BESKYTTELSE = true;
//når du skal bruke innlogging igjen.