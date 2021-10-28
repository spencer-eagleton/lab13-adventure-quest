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

    localStorage.setItem('USER', JSON.stringify(userObject));
}

export function getUser(){
    
    return JSON.parse(localStorage.getItem('USER'));


}

export function scoreQuest(choiceObject, questID, userObject){
    userObject.crypto += choiceObject.crypto;
    userObject.karma += choiceObject.karma;
    userObject.completed[questID] = true;

}
