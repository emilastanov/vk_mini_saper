import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export async function checkPost(params) {
    return axios.get(SAPER_METHODS.CHECK_POST, {
        params
    });
}
