const chatroom = {
    id: 'chatroom',
    title: 'Brave the Chatroom',
    map: {},
    image: '',
    description: `Welcome to the Chatroom. You enter only to encounter a hoard of Cyber-Bullies. The lead Cyber-Bully has challenged you to a political debate, and betting 30 crypto on the winner. How do you respond? `,
    choices: [{
        id: 'debate',
        description: 'Debate the head Cyber-Bully',
        result:`
        You had all your facts lined up, with supporting evidence, but the lead Cyber-Bully has deployed anecdotal evidence, and has played to the emotions of the chatroom. You have been cancelled. Was it worth it?`,
        karma: -30,
        crypto: -30
    }, {
        id: 'callout',
        description: 'Call-out the Cyber-bully',
        result:`You detect problematic logic from the Cyber-Bully and search through his Twitter, revealing his controversial ethos. You post a screenshot and the chatroom turns against the head Cyber-Bully. He has been OWNED and CANCELLED, earning you fifty karma points`,
        karma: 50,
        crypto: 30
    }, {
        id: 'exit',
        description: 'Exit the Chat',
        result: `Your mama taught you not to argue with bullies and thus you have exited the chat, saving your Crypto for another day, however, the whole internet declares that you have been PWNED by the Cyber-Bully, damaging your reputation and costing you Karma`,
        karma: -30,
        crypto: 0
    }]

};

const amazonia = {
    id: 'amazonia',
    title: 'Coindom of Amazonia',
    map: {},
    image: '',
    description: `You have entered the capitalist Coindom of Amazonia. After navigating through the forest of AWS servers, you have earned the trust of a rag-tag army of Crypto-Warriors armed with only GME and AMC stonks. You lead the army to Bezos' Lair and encounter the dragon himself. He laughs at your puny investment and challenges you to a stonk-off. How do you command your army?`,
    choices: [{
        id: 'HODL',
        description: '',
        result: 'You call out to your crypto army "DIAMOND HANDS" and the army holds on for dear life and you inspire the rest of the Meta-Verse to buy and hold. You take off to the moon and Bezos cedes his hoarded capital',
        karma: 10,
        crypto: 5000
    }, {
        id: 'buy',
        description: 'Command the Army to buy more stonks to match the power of Bezos',
        result: '',
        karma: 0,
        crypto: -5000
    }, {
        id: 'sell',
        description: '',
        result: '',
        karma: -30,
        crypto: -50
    }]
};

const zuck = {
    id: 'zuck',
    title: 'Zuckerbergs Castle',
    map: {},
    image: '',
    description: '',
    choices: [{
        id: 'troll',
        description: '',
        result: '',
        karma: -50,
        crypto: -50 
    }, {
        id: 'logoff',
        description: 'sign out of facebook',
        result: 'Zuck the Zuckerberg',
        karma: 1000,
        crypto: 0
    }, {
        id: 'influencer',
        description: 'become influencer',
        result: 'get zucked',
        karma: -100,
        crypto: 30
    }]
};

const quests = [
    chatroom, amazonia, zuck
];

export default quests;