const API_URL = "http://localhost:5242/api/eszkozok";

const uzenet = document.querySelector("#uzenet");
const eszkoztable = document.querySelector('#eszkoztable');

const EszkozokLekeres = () => {
    console.log("fetch run")
    fetch(API_URL)
    .then(response => response.json())
    .then(data => { //array
        eszkoztable.innerHTML = '';

        data.forEach(eszkoz => { //object
            eszkoztable.innerHTML += `
                <tr>
                    <td>${eszkoz.id}</td>
                    <td>${eszkoz.nev}</td>
                    <td>${eszkoz.leltariSzam}</td>
                    <td>${eszkoz.kategoria}</td>
                    <td>${eszkoz.gyarto}</td>
                    <td>${eszkoz.modell}</td>
                    <td>${eszkoz.terem}</td>
                    <td>${eszkoz.allapot}</td>
                    <td>${eszkoz.hasznalatbanVan}</td>
                    <td>${eszkoz.kolcsonozheto}</td>
                    <td>${eszkoz.beszerzesiAr}</td>
                    <td>${eszkoz.beszerzesDatuma}</td>
                </tr>
            `;

        });
        
    })
    .catch(error =>{
        
        console.log(`hiba: ${error}`)

        uzenet.innerHTML = 
        '<div class="alert alert-danger"> Nem sikerült csatlakozni</div>';

    })
};

// addeventlistener segítségével figyelünk egy felhasználói eseményt.
// Hogyha bekövetkezik ez az esemény (kattintás), akkor utána mehív egy fügvényt az addeventlistener -> EszkozokLekeres().
document.getElementById("buttonLekerdezes")
    .addEventListener('click', EszkozokLekeres());

