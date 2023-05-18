import {useRef} from "react";
import {doTaptic} from "../vkBridgeHelpers";

export const handleLongPress = (func) => {
    const timeoutRef = useRef(null);

    const handleLongPressStart = () => {
        timeoutRef.current = setTimeout(() => {
            func();
            doTaptic('success')
                .catch(e=>{console.log(e)});
        }, 800);
    };

    const handleLongPressEnd = () => {
        clearTimeout(timeoutRef.current);
    };

    return {
        onMouseDown: handleLongPressStart,
        onMouseUp: handleLongPressEnd,
        onMouseLeave: handleLongPressEnd,
        onTouchStart: handleLongPressStart,
        onTouchEnd: handleLongPressEnd,
        onTouchCancel: handleLongPressEnd
    };
}
