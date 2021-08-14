import { updateFirstName, updateLastName } from "./userFormActionTypes";

//action creators

//first name action creators
export const updateFirstNameInput = (input) => {

    return {
        type: updateFirstName,
        payload: input,
    };
};
//last name action creators
export const updateLastNameInput = (input) => {

    return {
        type: updateLastName,
        payload: input,
    };
};