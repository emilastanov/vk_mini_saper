import {alphabet} from "../../static/texts/boardData";

export function deviceIdCoder(deviceId) {
    return Array.from(deviceId).map(sym=>(
        alphabet[parseInt(sym)]
    )).join('');
}
