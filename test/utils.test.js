import { generateUser, getUser, setUser } from '../utils.js';
const test = QUnit.test;

test('generate user returns userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        karma: 50,
        crypto: 1,
        user: 'daSpencerE',
        metavatar: 'gamer-brah'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const formData = new FormData();
    formData.set('name', 'daSpencerE');
    formData.set('avatar', 'gamer-brah');

    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test ('setUser sets userOBbject to local storage', (expect) => {
    localStorage.removeItem('USER');

    const userObject = {
        completed: {},
        karma: 50,
        crypto: 1,
        user: 'daSpencerE',
        metavatar: 'gamer-brah'
    };
    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, userObject);
});

test ('getUser should return LS USER  string as a parsed object', (expect) => {
    localStorage.removeItem('USER');

    const userObject = {
        completed: {},
        karma: 50,
        crypto: 1,
        user: 'daSpencerE',
        metavatar: 'gamer-brah'
    };
    setUser(userObject);

    const actual = getUser();
    
    expect.deepEqual(actual, userObject);

});