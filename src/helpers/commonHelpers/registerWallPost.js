import {registerUserAction} from "../../reducers/registerUserAction";

export const registerWallPost = (userData, state) => {
    registerUserAction({
        userId: userData.user.userId,
        device: userData,
        action: "application.made.post",
        state: state ? "success" : "error",
        userAgent: navigator.userAgent
    })
        .catch((e)=>{
            console.log(e);
        });
}
