import { CHALLENGES } from '../constants/challanges';
import { getRandomInt } from '../utils/getRandomInt';

export const getRandomChallenge = () => {
    const index = getRandomInt(CHALLENGES.length);
    return { id: index, text: CHALLENGES[index] };
};