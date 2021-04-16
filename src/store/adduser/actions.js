export const ADDUSER_CHANGE_SURNAME_TEXT = 'ADDUSER_CHANGE_SURNAME_TEXT'
export const ADDUSER_CHANGE_NAME_TEXT = 'ADDUSER_CHANGE_NAME_TEXT'
export const ADDUSER_CHANGE_PATRONYMIC_TEXT = 'ADDUSER_CHANGE_PATRONYMIC_TEXT'
export const ADDUSER_CHANGE_POSITION_TEXT = 'ADDUSER_CHANGE_POSITION_TEXT'
export const ADDUSER_CHANGE_DATE_OF_BIRTH_DATE = 'ADDUSER_CHANGE_DATE_OF_BIRTH_DATE'
export const ADDUSER_CHANGE_GENDER_TEXT = 'ADDUSER_CHANGE_GENDER_TEXT'
export const ADDUSER_CHANGE_DATE_EMPLOYMENT_TEXT = 'ADDUSER_CHANGE_DATE_EMPLOYMENT_TEXT'
export const ADDUSER_CHANGE_DATE_OF_DISMISSAL_TEXT = 'ADDUSER_CHANGE_DATE_OF_DISMISSAL_TEXT'
export const ADDUSER_CHANGE_DRIVING_LICENSE_TEXT = 'ADDUSER_CHANGE_DRIVING_LICENSE_TEXT'

export const setSurnameText = (surname) => ({
    type: ADDUSER_CHANGE_SURNAME_TEXT,
    payload: surname
})
export const setNameText = (name) => ({
    type: ADDUSER_CHANGE_NAME_TEXT,
    payload: name
})
export const setPatronymicText = (patronymic) => ({
    type: ADDUSER_CHANGE_PATRONYMIC_TEXT,
    payload: patronymic
})
export const setPositionText = (position) => ({
    type: ADDUSER_CHANGE_POSITION_TEXT,
    payload: position
})
export const setDateOfBirthText = (dateOfBirth) => ({
    type: ADDUSER_CHANGE_DATE_OF_BIRTH_DATE,
    payload: dateOfBirth
})
export const setGenderText = (gender) => ({
    type: ADDUSER_CHANGE_GENDER_TEXT,
    payload: gender
})
export const setDateEmploymentText = (dateEmployment) => ({
    type: ADDUSER_CHANGE_DATE_EMPLOYMENT_TEXT,
    payload: dateEmployment
})
export const setDateOfDismissalText = (dateOfDismissal) => ({
    type: ADDUSER_CHANGE_DATE_OF_DISMISSAL_TEXT,
    payload: dateOfDismissal
})
export const setDrivingLicenceText = (drivingLicence) => ({
    type: ADDUSER_CHANGE_DRIVING_LICENSE_TEXT,
    payload: drivingLicence
})