

function show_bio(){
    photo.style.display = "none";
    erga.style.display = "none";
    sundesmoi.style.display = "none";
    login.style.display = "none";
    photos.style.display = "none";
    link.style.display = "none";
    ergajs.style.display = "none";
    biografia.style.display = "block";
    
}

function show_photo(){
    erga.style.display = "none";
    sundesmoi.style.display = "none";
    login.style.display = "none";
    biografia.style.display = "none";
    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "block";
    link.style.display = "none";
    ergajs.style.display = "none";
    photo.style.display = "block";
}

function show_erga(){
    photo.style.display = "none";
    sundesmoi.style.display = "none";
    login.style.display = "none";
    biografia.style.display = "none";
    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    link.style.display = "none";
    erga.style.display = "block";
}

function show_sundesmoi(){
    photo.style.display = "none";
    erga.style.display = "none";
    login.style.display = "none";
    biografia.style.display = "none";
    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    ergajs.style.display = "none";
    sundesmoi.style.display = "block";
}

function show_login(){
    photo.style.display = "none";
    erga.style.display = "none";
    sundesmoi.style.display = "none";
    biografia.style.display = "none";
    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    link.style.display = "none";
    ergajs.style.display = "none";
    login.style.display = "block";
}

function show_bio1(){
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    biografia1.style.display = "block";
}

function show_bio2(){
    biografia1.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    biografia2.style.display = "block";
}

function show_bio3(){
    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    biografia3.style.display = "block";
}

function show_bio4(){
    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    photos.style.display = "none";
    biografia4.style.display = "block";
}


function getJSONDataLink1() {
    link.style.display = "block";
    fetch("./link1.json", { method: "GET" })
        .then((res) => res.json())
        .then((json) => showJSONDataLink((json)))
        .catch((err) => console.error("error:", err));
}

function getJSONDataLink2() {
    link.style.display = "block";
    fetch("./link2.json", { method: "GET" })
        .then((res) => res.json())
        .then((json) => showJSONDataLink((json)))
        .catch((err) => console.error("error:", err));
}

function getJSONDataLink3() {
    link.style.display = "block";
    fetch("./link3.json", { method: "GET" })
        .then((res) => res.json())
        .then((json) => showJSONDataLink((json)))
        .catch((err) => console.error("error:", err));
}

function showJSONDataLink(albums) {
    let anHTML = `<table><tr>
        <th>URL</th></tr>`
    for (let anAlbum of albums) {
        anHTML += "<tr><td>" +
        anAlbum.url + "</td></tr>";
    }
    anHTML += "</table>";
    document.getElementById("link").innerHTML = anHTML;
}

function getJSONDataErga1() {
    ergajs.style.display = "block";
    fetch("./erga1.json", { method: "GET" })
        .then((res) => res.json())
        .then((json) => showJSONDataErga((json)))
        .catch((err) => console.error("error:", err));
}

function getJSONDataErga2() {
    ergajs.style.display = "block";
    fetch("./erga2.json", { method: "GET" })
        .then((res) => res.json())
        .then((json) => showJSONDataErga((json)))
        .catch((err) => console.error("error:", err));
}

function getJSONDataErga3() {
    ergajs.style.display = "block";
    fetch("./erga3.json", { method: "GET" })
        .then((res) => res.json())
        .then((json) => showJSONDataErga((json)))
        .catch((err) => console.error("error:", err));
}

function showJSONDataErga(albums) {
    let anHTML = `<table><tr>`
    for (let anAlbum of albums) {
        anHTML += "<tr><td>" +
        anAlbum.text + "</td></tr>";
    }
    anHTML += "</table>";
    document.getElementById("ergajs").innerHTML = anHTML;
}



function clearScreen() {
    biografia = document.getElementById("biografia");
    photo = document.getElementById("photo");
    erga = document.getElementById("erga");
    sundesmoi = document.getElementById("sundesmoi");
    login = document.getElementById("login");
    biografia1 = document.getElementById("biografia1");
    biografia2 = document.getElementById("biografia2");
    biografia3 = document.getElementById("biografia3");
    biografia4 = document.getElementById("biografia4");
    photos = document.getElementById("photos");


    biografia1.style.display = "none";
    biografia2.style.display = "none";
    biografia3.style.display = "none";
    biografia4.style.display = "none";
    photos.style.display = "none";
    photo.style.display = "none";
    erga.style.display = "none";
    sundesmoi.style.display = "none";
    biografia.style.display = "none";
    login.style.display = "none";

}
window.onload = clearScreen;