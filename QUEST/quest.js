import quests from '../quest-data.js';
import { findByID } from '../utils.js';
console.log(quests);

const params = new URLSearchParams(window.location.search);

// const questData = findByID(quests, params.get('id'));
