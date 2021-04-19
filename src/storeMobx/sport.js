import {
    makeAutoObservable
} from "mobx"
import {
    getSportCurDay,
    pushSport
} from '../localStorage.js'
import {
    positions
} from '../dictionary'

const _emptySport = {}

class Sport {
    sport = {}


    constructor() {
        makeAutoObservable(this)
        this.sport = !Boolean(getSportCurDay()) ? _emptySport : getSportCurDay();
    }

    setEmptySport() {
        this.sport = _emptySport
        pushSport(this.sport)
    }

    setEmptyByType(type) {
        this.sport[type] = 0
        pushSport(this.sport)
    }

    addByType(val, type) {
        this.sport[type] = (!Boolean(this.sport[type])) ? val : this.sport[type] + val
        pushSport(this.sport)
    }

    getSportByType(type) {
        return !Boolean(this.sport[type]) ? 0 : this.sport[type]
    }

    getListCurrentSportName = () => {
        let arr = []
        for (let key in this.sport) positions.forEach(el => el.name === key ? arr.push(el.nameRus) : null)
        return arr;
    }

    getListCurrentSportValue = () => {
        let arr = []
        for (let key in this.sport) positions.forEach(el => el.name === key ? arr.push(this.sport[key]) : null)
        return arr;
    }
}

export default new Sport()