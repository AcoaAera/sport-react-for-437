import {
    makeAutoObservable
} from "mobx"
import {
    getSport,
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
        console.log();
        this.sport = !Boolean(getSport()) ? this._emptySport : getSport();
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
        console.log(123);
        return this.sport.gym
    }
}

export default new Sport()