document.addEventListener("DOMContentLoaded", hentJson);
let babus = [];
let kategoriFilter = "alle";
let knapper = document.querySelector(".data-menu");
let modal = document.querySelector("#modal")

//henter json fil og indlæser data
//ligger retterne i array
async function hentJson() {
    let myJson = await fetch("menu3.json");
    babus = await myJson.json();
    console.log(babus)

    visBabus();
}

//viser retterne, og eventlistner på rettens navn til modal vindue

function visBabus() {
    let destfor = document.querySelector(".data-forretter"),
        desthoved = document.querySelector(".data-hovedretter"),
        temp = document.querySelector(".data-template");


    // her ses hvad der bliver kaldt frem i arrayet fra json fil
    babus.forEach(babu => {
        console.log(babu);

        let klon = temp.cloneNode(true).content;
        //indsæt data i klonen
        klon.querySelector(".navn").textContent = babu.navn;

        klon.querySelector(".navn").addEventListener("click", () => {
            visModal(babu);
        });

        if (babu.kategori == "forret") {
            destfor.appendChild(klon);
        }

        if (babu.kategori == "hovedret") {
            desthoved.appendChild(klon);
        }


    });
}

//fuction viser modal vundet når man trykket på rettens navn.
//Det sættes eventlistener på så når man trykker 'close'knap så
//modal vindue bliver lukket

function visModal(retten) {

    modal.classList.add("vis");
    modal.querySelector(".kortbeskrivelse").textContent = retten.kortbeskrivelse;
    modal.querySelector(".pris").textContent = retten.pris;
    modal.querySelector("button").addEventListener("click", skjulModal);
}

//funtionen det skjuler modal vinduet
function skjulModal() {
    console.log("test");
    modal.classList.remove("vis");
}
