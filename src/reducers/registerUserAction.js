import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export async function registerUserAction({userId, device, action, state}) {
    return axios.post(SAPER_METHODS.METRICS, {
        userId,
        device,
        action,
        state
    })
}