import { auth } from "./firebase.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const innhold = document.getElementById(
    "beskyttetInnhold"
);

const loginBox = document.getElementById(
    "loginBox"
);


onAuthStateChanged(auth, user => {


if(user){

    innhold.style.display="block";

    loginBox.style.display="none";


}else{

    innhold.style.display="none";

    loginBox.style.display="block";

}


});

//loggutKnapp
const loggutKnapp =
document.getElementById("loggutKnapp");


if(user){

    innhold.style.display="block";
    loginBox.style.display="none";
    loggutKnapp.style.display="block";

}else{

    innhold.style.display="none";
    loginBox.style.display="block";
    loggutKnapp.style.display="none";

}