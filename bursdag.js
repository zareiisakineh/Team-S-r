 import { hentAnsatte } from "./ansatteFirestore.js";
 //Bursdagskode uten html
    document.addEventListener("DOMContentLoaded", async () => {

    const ansatte = await hentAnsatte();

console.log("Antall ansatte:", ansatte.length);


const iDag = new Date();
const dag = iDag.getDate();
const måned = iDag.getMonth() + 1;


console.log("Dagens dato:", dag, måned);

console.log(
    ansatte.map(person => ({
        navn: person.navn,
        dag: person.dag,
        måned: person.måned
    }))
);

// Finn dagens bursdager
const bursdagsbarn = ansatte.filter(
    person =>
        Number(person.dag) === dag &&
        Number(person.måned) === måned
);

console.log("Bursdagsbarn i dag:", bursdagsbarn);

// vise melding
        const melding = document.getElementById("bursdagMelding");

        if (melding && bursdagsbarn.length > 0) {

            melding.innerHTML = `
                <div class="card">
                    🎂 Gratulerer med dagen til
                    <strong>${bursdagsbarn.map(p => p.navn).join(", ")}</strong>
                    🎉
                </div>
            `;
        }

            const container = document.getElementById("bursdagsKalender");

    const månedsNavn = [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];
//test



    for (let måned = 1; måned <= 12; måned++) {

        const personer = ansatte.filter(
            person => person.måned === måned
        );

        if (personer.length === 0) continue;

        let html = `
            <div class="item">
                <button class="question">
                    <h3>${månedsNavn[måned - 1]}</h3>
                    <i class="fas fa-chevron-down icon"></i>
                </button>

                <div class="answer">
                    <div class="bilder">
        `;

        personer.sort((a, b) => a.dag - b.dag).forEach(person => {
                html += `
                    <div class="person">
                        <img src="${person.bilde}" alt="${person.navn}">
                        <h3>${person.navn} - ${person.dag}. ${månedsNavn[måned - 1]}</h3>
                    </div>
                `;
            });

        html += `
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += html;
    }
    
document.querySelectorAll(".question")
.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Klikk registrert");

        const item = button.parentElement;
        const answer = item.querySelector(".answer");

        answer.classList.toggle("open");

        button.querySelector(".icon")
              ?.classList.toggle("rotate");
    });

});


    });
  
    //deler bursdagsmelding på whatsapp 
const whatsappKnapp =
document.getElementById("sendWhatsapp");

if (whatsappKnapp) {

    whatsappKnapp.addEventListener("click", () => {

        const whatsappMelding =
            "🎂 Gratulerer med dagen kjære " +
            navn.join(" og ") +
            "!\n\n" +
            "Alle oss i Team Sør ønsker deg en fantastisk dag fylt med glede, smil og kake! 🎂❤️";

        const url =
            "https://wa.me/?text=" +
            encodeURIComponent(whatsappMelding);

        window.open(url, "_blank");

    });

}
