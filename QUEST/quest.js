import quests from '../quest-data.js';
import { findByID, getUser, scoreQuest, setUser } from '../utils.js';


const params = new URLSearchParams(window.location.search);
const questData = findByID(quests, params.get('id'));


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
    input.required = true;
    input.value = choice.id;

   



    label.appendChild(input);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'DECIDE';
questChoices.append(button);



questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findByID(questData.choices, selectedRadio.value);
    

    const user = getUser();
    
    scoreQuest(choice, questData.id, user);
    
    setUser(user);

    // display result
    const questDetails = document.getElementById('quest-details');
    const questResults = document.getElementById('results');
    questDetails.classList.add('hidden');
    questResults.classList.remove('hidden');

    const resultSpan = document.createElement('p');
    resultSpan.textContent = choice.result;
   
    const backToMap = document.createElement('a');
    backToMap.href = '../map';
    backToMap.textContent = 'BACK TO MAP';
    questResults.append(resultSpan, backToMap);
});