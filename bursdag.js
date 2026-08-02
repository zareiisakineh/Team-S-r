 //Bursdagskode uten html
    document.addEventListener("DOMContentLoaded", () => {

        // Automatisk gratulasjon
        const iDag = new Date();
        const dag = iDag.getDate();
        const måned = iDag.getMonth() + 1;

        const bursdagsbarn = ansatte.filter(
            person => person.dag === dag &&
                    person.måned === måned
        );

        const melding = document.getElementById("bursdagMelding");

        if (bursdagsbarn.length > 0) {

            melding.innerHTML = `
                <div class="card">
                    🎂 Gratulerer med dagen til
                    <strong>${bursdagsbarn.map(p => p.navn).join(", ")}</strong>
                    🎉
                </div>
            `;
        }

    });
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

    for (let måned = 1; måned <= 12; måned++) {

        const personer = ansatte.filter(
            person => person.måned === måned
        );

        if (personer.length === 0) continue;

        let html = `
            <div class="item">
                <button class="question" onclick="toggleAccordion(this)">
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




  // Bursdagsbeskyttelse:
const visKnapp = document.getElementById("visKnapp");
const beskyttetInnhold = document.getElementById("beskyttetInnhold");


if (visKnapp && beskyttetInnhold) {
    // Sjekk om tilgang allerede finnes
    const tilgang = localStorage.getItem("bursdagTilgang");

    if (tilgang === "ja") {

        beskyttetInnhold.style.display = "block";
        visKnapp.style.display = "none";
    }
    
    visKnapp.addEventListener("click", () => {
        const passord = prompt("Skriv inn passord for bursdager");

        if (passord === "teamsør2026") {
            beskyttetInnhold.style.display = "block";
            visKnapp.style.display = "none";

            localStorage.setItem(
                "bursdagTilgang",
                "ja"
            );

        } else {
            alert("Feil passord");
        }

    });

}

//loggut-knapp: fjerner ansattes tilgang til bursdagskalender, neste gang må de skrive passordet igjen for 
//å få tilgang
const loggutKnapp = document.getElementById("loggutKnapp");

if (loggutKnapp) {

    loggutKnapp.addEventListener("click", () => {

        localStorage.removeItem("bursdagTilgang");

        location.reload();

    });

}

