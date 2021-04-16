export const positions = [{
        id: 1,
        name: "Менеджер"
    },
    {
        id: 2,
        name: "Пилот"
    },
    {
        id: 3,
        name: "Программист"
    },
    {
        id: 4,
        name: "Генеральный директор"
    },
    {
        id: 5,
        name: "Аналитик"
    }
]

export const gender = [{
        id: 1,
        name: "Мужской",
        nameEng: "male"
    },
    {
        id: 2,
        name: "Женский",
        nameEng: "female"
    },
]

// Получить name должности по id
export function getPosinionById(id) {
    let pos = positions.find((el) => el.id === Number(id))
    return Boolean(pos) ? pos.name : null
}

// Получить name гендера по id
export function getGenderById(id) {
    let gen = gender.find((el) => el.id === Number(id))
    return Boolean(gen) ? gen.name : null
}