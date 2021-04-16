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
    return JSON.parse(localStorage.getItem(SPORT))
}

export const getSportCurDay = () => {
    let allSport = !Boolean(getSport()) ? null : getSport()
    if (allSport !== null && !Boolean(allSport.length)) localStorage.clear()

    let sportCurDay = getSport()
    return !Boolean(sportCurDay) ? sportCurDay : sportCurDay.find((el) => el.date === getCurrentDay())
}

function getCurrentDay() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}