import {
    ADDUSER_CHANGE_DATE_EMPLOYMENT_TEXT,
    ADDUSER_CHANGE_DATE_OF_BIRTH_DATE,
    ADDUSER_CHANGE_DATE_OF_DISMISSAL_TEXT,
    ADDUSER_CHANGE_DRIVING_LICENSE_TEXT,
    ADDUSER_CHANGE_GENDER_TEXT,
    ADDUSER_CHANGE_NAME_TEXT,
    ADDUSER_CHANGE_PATRONYMIC_TEXT,
    ADDUSER_CHANGE_POSITION_TEXT,
    ADDUSER_CHANGE_SURNAME_TEXT
} from "./actions";

const defaultState = {
    surname: 'Кораблев',
    name: 'Алексей',
    patronymic: 'Васильевич',
    position: 3,
    dateOfBirth: '1997-02-22',
    gender: 1,
    dateEmployment: '2021-04-15',
    dateOfDismissal: "",
    drivingLicence: true,
    id: null
}

export const addUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADDUSER_CHANGE_NAME_TEXT:
            return {
                ...state,
                name: action.payload
            };
        case ADDUSER_CHANGE_SURNAME_TEXT:
            return {
                ...state,
                surname: action.payload
            };
        case ADDUSER_CHANGE_PATRONYMIC_TEXT:
            return {
                ...state,
                patronymic: action.payload
            };
        case ADDUSER_CHANGE_POSITION_TEXT:
            return {
                ...state,
                position: Number(action.payload)
            };
        case ADDUSER_CHANGE_DATE_OF_BIRTH_DATE:
            return {
                ...state,
                dateOfBirth: action.payload
            };
        case ADDUSER_CHANGE_GENDER_TEXT:
            return {
                ...state,
                gender: Number(action.payload)
            };
        case ADDUSER_CHANGE_DATE_EMPLOYMENT_TEXT:
            return {
                ...state,
                dateEmployment: action.payload
            };
        case ADDUSER_CHANGE_DATE_OF_DISMISSAL_TEXT:
            return {
                ...state,
                dateOfDismissal: action.payload
            };
        case ADDUSER_CHANGE_DRIVING_LICENSE_TEXT:
            return {
                ...state,
                drivingLicence: action.payload
            };

        default:
            return state;
    }
}