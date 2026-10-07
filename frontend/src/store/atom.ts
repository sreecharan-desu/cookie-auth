import { atom } from "recoil";


/**
 * userAtom utility.
 */
export const userAtom = atom({
    key : "userAtom",
    default : {
        id : "",
        username : "",
        email : ""
    }
})

/**
 * isAuth utility.
 */
export const isAuth = atom({
    key : "isAuth",
    default : true
})