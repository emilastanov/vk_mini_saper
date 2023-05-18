import {useRef} from "react";

export const handleLongPress = (func) => {
    const timeoutRef = useRef(null);

    const handleLongPressStart = () => {
        timeoutRef.current = setTimeout(() => {
            func();
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
