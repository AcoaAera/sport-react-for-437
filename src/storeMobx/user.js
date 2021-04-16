import {
    makeAutoObservable
} from "mobx"
import allUser from '../storeMobx/allUser.js'

class user {
    user = {}
    constructor() {
        makeAutoObservable(this)
        this.setEmptyUser()
    }

    setEmptyUser() {
        this.user = {
            surname: '',
            name: '',
            patronymic: '',
            position: 1,
            dateOfBirth: '',
            gender: 1,
            dateEmployment: '',
            dateOfDismissal: '',
            drivingLicence: true,
            colleagues: [],
            id: this.createNewId(allUser)
        }
    }

    setUser(user) {
        this.user = user
    }

    createNewId(allUser) {
        let isGoodId = false
        let newId
        while (!isGoodId) {
            newId = Math.round(Math.random() * 1000000)
            let count = 0
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].id === newId) count++
            }
            isGoodId = count === 0 ? true : false
        }
        return newId
    };

    setSurname = (val) => {
        this.user.surname = val
    }
    setName = (val) => {
        this.user.name = val
    }
    setPatronymic = (val) => {
        this.user.patronymic = val
    }
    setPosition = (val) => {
        this.user.position = val
    }
    setDateOfBirth = (val) => {
        this.user.dateOfBirth = val
    }
    setGender = (val) => {
        this.user.gender = val
    }
    setDateEmployment = (val) => {
        this.user.dateEmployment = val
    }
    setDateOfDismissal = (val) => {
        this.user.dateOfDismissal = val
    }
    setDrivingLicence = (val) => {
        this.user.drivingLicence = val
    }
    setColleagues = (val) => {
        this.user.colleagues = val
    }

    validateName() {
        return (!Boolean(this.user.name)) ? false : true
    }
    validateSurname() {
        return (!Boolean(this.user.surname)) ? false : true
    }
    validatePosition() {
        return (!Boolean(this.user.position)) ? false : true
    }
    validateDateOfBirth() {
        return (!Boolean(this.user.dateOfBirth)) ? false : true
    }
    validateGender() {
        return (!Boolean(this.user.gender)) ? false : true
    }
    validateDateEmployment() {
        return (!Boolean(this.user.dateEmployment)) ? false : true
    }
    validateDateOfDismissal(id) {
        return (!Boolean(this.user.dateOfDismissal)) ? true : (this.user.dateOfDismissal < this.user.dateEmployment) ? false : true
    }
}

export default new user()