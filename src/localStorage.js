const SPORT = 'SPORT'

export const pushSport = (sport) => {
    localStorage.setItem(SPORT, JSON.stringify(sport))
}

export const getSport = () => {
    return JSON.parse(localStorage.getItem(SPORT))
}

export const getGym = () => {
    return JSON.parse(localStorage.getItem(SPORT)).gym
}

export const getPress = () => {
    return JSON.parse(localStorage.getItem(SPORT)).press
}