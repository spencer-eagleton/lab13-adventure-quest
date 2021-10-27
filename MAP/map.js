import quests from '../quest-data.js';

const questLinks = document.getElementById('quest-links');
// <a href="./quest?id=chatroom">Brave the Forbidden Chatroom</a>
// <a href="./quest?id=amazonia">Capitalist Coindom of Amazonia</a>
// <a href="./quest?id=zuck">Zuckerberg's Castle</a>
console.log(questLinks);

for (let quest of quests){
    const a = document.createElement('a');
    a.href = `./quest?id=${quest.id}`;
    a.textContent = quest.title;
    questLinks.appendChild(a);

}