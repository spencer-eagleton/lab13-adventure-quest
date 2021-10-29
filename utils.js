import quests from "./quest-data.js";

export function findByID(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}
export function generateUser(formData){
  
    return {
        completed: {},
        karma: 50,
        crypto: 1,
        user: formData.get('name'),
        metavatar: formData.get('avatar')
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
    
}


export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
    

}

export function scoreQuest(choiceObject, questID, userObject){
    
    userObject.karma += choiceObject.karma;
    userObject.crypto += choiceObject.crypto;
    userObject.completed[questID] = true;

}

export function completesAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}