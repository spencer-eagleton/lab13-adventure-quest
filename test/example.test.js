
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
    formData.set('user', 'daSpencerE');
    formData.set('metavatar', 'gamer-brah');

    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
