import {
    makeAutoObservable
} from "mobx"
import {
    getSportCurDay,
    pushSport
} from '../localStorage.js'

class Sport {
    sport = {
        gym: 20,
        press: 30
    }

    _emptySport = {
        gym: 0,
        press: 0
    }

    constructor() {
        makeAutoObservable(this)
        this.sport = !Boolean(getSportCurDay()) ? this._emptySport : getSportCurDay();
    }

    setSport(sport) {
        this.sport = sport
    }

    setEmptySport() {
        this.sport = this._emptySport
        pushSport(this.sport)
    }

    setEmptyPress() {
        this.sport.press = 0
        pushSport(this.sport)
    }

    setEmptyGym() {
        this.sport.gym = 0
        pushSport(this.sport)
    }

    addPress = (val) => {
        this.sport.press += val
        pushSport(this.sport)
    }

    addGym = (val) => {
        this.sport.gym += val
        pushSport(this.sport)
    }

    getSport() {
        return this.sport
    }

    getPress = () => {
        return this.sport.press
    }

    getGym = () => {
        return this.sport.gym
    }
}

export default new Sport()