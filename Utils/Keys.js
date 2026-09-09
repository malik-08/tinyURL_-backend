import {nanoid} from "nanoid";

export const generateShortId = (lenght) => {
    return nanoid(lenght);
}