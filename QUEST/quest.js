import quests from '../quest-data.js';
import { findByID } from '../utils.js';


const params = new URLSearchParams(window.location.search);
const questData = findByID(quests, params.get('id'));
console.log(questData);

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;


const questChoices = document.getElementById('quest-choices');

for (let choice of questData.choices){
    
    const label = document.createElement('label');
    label.textContent = choice.description;
    

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choices';
    input.value = choice.id;

   



    label.appendChild(input);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'DECIDE';
questChoices.append(button);

button.addEventListener('submit', ()=>{
    getUser
});