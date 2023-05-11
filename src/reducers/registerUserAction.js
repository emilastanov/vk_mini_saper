import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export function registerUserAction(data, headers) {
    return axios.post(SAPER_METHODS.METRICS, data, {headers})
}
