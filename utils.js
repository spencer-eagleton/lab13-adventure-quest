
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
