export const positions = [{
        nameRus: "Анжуманя",
        name: "gym"
    },
    {
        nameRus: "Пресс",
        name: "press"
    },
    {
        nameRus: "Планка",
        name: "planka"
    },
    {
        nameRus: "Стульчик",
        name: "static_chair"
    },
]

export const title = 'Статистика'
export const titleSite = ""

export function getNameRusByName(name) {
    let x = positions.find(el => el.name === name)
    return x !== -1 ? x.nameRus : null
}