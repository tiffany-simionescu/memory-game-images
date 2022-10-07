

let data;
const cardBox = document.getElementById('card-box');
// const cardBox = $("#card-box");

const readJsonFile = (file, callback) => {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

const loadGame = (data) => {
    cardBox.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        let frontCard = `<div class="card-view front-view"><i class="fa fa-question" aria-hidden="true"></i></div>`;
        let backCard = `<div class="card-view back-view"><img src="${data[i]['card_img']}"></div>`;
        $('#card-box').append(`<div id="${data[i]['card_id']}" class="card" onclick="checkCard("${data[i]['card_id']}", "${data[i]['card_value']}")" >${frontCard}${backCard}</div>`)
    }
}

window.onload = () => {
    readJsonFile('/json/data.json', (text) => {
        data = JSON.parse(text);
        loadGame(data);
    })
}