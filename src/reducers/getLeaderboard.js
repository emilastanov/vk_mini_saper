import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export async function getLeaderboard(params) {
    return axios.get(SAPER_METHODS.LEADERBOARD, {
        params
    });
}
