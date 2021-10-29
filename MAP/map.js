import quests from '../quest-data.js';
import { getUser } from '../utils.js';

const questLinks = document.getElementById('quest-links');
// <a href="./quest?id=chatroom">Brave the Forbidden Chatroom</a>
// <a href="./quest?id=amazonia">Capitalist Coindom of Amazonia</a>
// <a href="./quest?id=zuck">Zuckerberg's Castle</a>

const user = getUser();
for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    
    } else {
        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    questLinks.appendChild(a);


}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;

    questLinks.appendChild(span);
}