import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export async function setUserRecord(data, headers) {
    return axios.post(SAPER_METHODS.LEADERBOARD, data, {headers});
}
