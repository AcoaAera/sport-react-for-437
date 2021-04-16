import {
    EDITUSER_CHANGE_DATE_EMPLOYMENT_TEXT,
    EDITUSER_CHANGE_DATE_OF_BIRTH_DATE,
    EDITUSER_CHANGE_DATE_OF_DISMISSAL_TEXT,
    EDITUSER_CHANGE_DRIVING_LICENSE_TEXT,
    EDITUSER_CHANGE_GENDER_TEXT,
    EDITUSER_CHANGE_NAME_TEXT,
    EDITUSER_CHANGE_PATRONYMIC_TEXT,
    EDITUSER_CHANGE_POSITION_TEXT,
    EDITUSER_CHANGE_SURNAME_TEXT
} from "./actions";

const defaultState = {
    surname: null,
    name: null,
    patronymic: null,
    position: null,
    dateOfBirth: null,
    gender: null,
    dateEmployment: null,
    dateOfDismissal: null,
    drivingLicence: false,
    id: null
}

export const editUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EDITUSER_CHANGE_NAME_TEXT:
            return {
                ...state,
                name: action.payload
            };
        case EDITUSER_CHANGE_SURNAME_TEXT:
            return {
                ...state,
                surname: action.payload
            };
        case EDITUSER_CHANGE_PATRONYMIC_TEXT:
            return {
                ...state,
                patronymic: action.payload
            };
        case EDITUSER_CHANGE_POSITION_TEXT:
            return {
                ...state,
                position: action.payload
            };
        case EDITUSER_CHANGE_DATE_OF_BIRTH_DATE:
            return {
                ...state,
                dateOfBirth: action.payload
            };
        case EDITUSER_CHANGE_GENDER_TEXT:
            return {
                ...state,
                gender: action.payload
            };
        case EDITUSER_CHANGE_DATE_EMPLOYMENT_TEXT:
            return {
                ...state,
                dateEmployment: action.payload
            };
        case EDITUSER_CHANGE_DATE_OF_DISMISSAL_TEXT:
            return {
                ...state,
                dateOfDismissal: action.payload
            };
        case EDITUSER_CHANGE_DRIVING_LICENSE_TEXT:
            return {
                ...state,
                drivingLicence: action.payload
            };

        default:
            return state;
    }
}