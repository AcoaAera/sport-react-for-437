import {
    getCurrentDay
} from './different'

const SPORT = 'SPORT'

export const pushSport = (sport) => {
    let allSport = !Boolean(getSport()) ? null : getSport()

    sport.date = getCurrentDay()
    if (allSport) {
        let id = (allSport.findIndex(el => el.date === getCurrentDay()));
        if (id === -1) {
            allSport.push(sport)
        } else {
            allSport[id] = sport
        }
        localStorage.setItem(SPORT, JSON.stringify(allSport))
    } else {
        localStorage.setItem(SPORT, JSON.stringify([sport]))
    }
}

export const getSport = () => {
    let sport = JSON.parse(localStorage.getItem(SPORT))
    return !Boolean(sport) ? null : sport.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getSportCurDay = () => {
    let allSport = !Boolean(getSport()) ? null : getSport()
    if (allSport !== null && !Boolean(allSport.length)) localStorage.clear()

    let sportCurDay = getSport()
    return !Boolean(sportCurDay) ? sportCurDay : sportCurDay.find((el) => el.date === getCurrentDay())
}