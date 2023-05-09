import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export async function getBanList(params) {
    return axios.get(SAPER_METHODS.BAN_LIST, {
        params
    });
}
