"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const selectRadio = document.getElementById('selectRadio');
const nameParag = document.getElementById('nameParag');
const ApiLink = `https://mp3quran.net/api/v3/radios`;
function getName() {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(ApiLink);
        const response = yield req.json();
        for (let i = 0; i < response.radios.length; i++) {
            const option = document.createElement('option');
            option.id = 'optionRadio';
            option.setAttribute(`data-server`, response.radios[i].url);
            selectRadio.appendChild(option).innerHTML += `${response.radios[i].name}`;
        }
    });
}
getName().catch(_ => {
    ContinerContent.style.display = 'none';
    erorr_in_network.style.display = 'flex';
});
const audioRadio = document.getElementById('audioRadio');
selectRadio.onchange = function (e) {
    const target = e.target;
    nameParag.innerHTML = `راديو: ${target.value}`;
    const selectedIndex = target.selectedIndex;
    const optionRadio = target.options[selectedIndex];
    console.log(optionRadio);
    const server = optionRadio.dataset.server;
    console.log(server);
    audioRadio.src = server;
    audioRadio.play();
    if (selectedIndex == 0) {
        nameParag.innerHTML = `راديو`;
    }
};
