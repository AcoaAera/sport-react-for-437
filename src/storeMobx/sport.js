import {
    makeAutoObservable
} from "mobx"
import {
    getSportCurDay,
    pushSport
} from '../localStorage.js'

class Sport {
    sport = {}

    _emptySport = {}

    constructor() {
        makeAutoObservable(this)
        this.sport = !Boolean(getSportCurDay()) ? this._emptySport : getSportCurDay();
    }

    setEmptySport() {
        this.sport = this._emptySport
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
}

export default new Sport()