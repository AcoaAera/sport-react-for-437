import {
    makeAutoObservable
} from "mobx"
import {
    pushUsersToLocalstorage,
    getUsersToLocalstorage
} from '../localStorage.js'

class allUser {
    users = []
    constructor() {
        makeAutoObservable(this)
        this.users = Boolean(getUsersToLocalstorage()) ? getUsersToLocalstorage() : []
    }

    /**
     * Добавить пользователя
     * @param {*} user 
     */
    insertUser(user) {
        this.users.push(user)
        pushUsersToLocalstorage(this.users)
    }

    /**
     * Обновить данные пользователя
     * @param {*} user 
     */
    updateUser(user) {
        this.users = this.users.map(el => el.id === user.id ? user : el)
        pushUsersToLocalstorage(this.users)
    }

    /**
     * Удалить пользователя из списка и почистить список коллег
     * @param {*} id 
     */
    delUser(id) {
        this.users.forEach((el) => {
            let colleagues = el.colleagues
            el = colleagues.includes(id) ? colleagues.splice(colleagues.indexOf(id), 1) : el
        })
        this.users = this.users.filter(user => user.id !== id)
        pushUsersToLocalstorage(this.users)
    }

    /**
     * Получить пользователя по id
     * @param {*} id 
     * @returns 
     */
    getUserById(id) {
        for (let i = 0; i < this.users.length; i++) {
            const el = this.users[i]
            if (el.id === Number(id)) {
                return el
            }
        }
        return null
    }

    /**
     * Получить массив всех пользователей в формате {key: .. , label: ..}
     * @returns {Array}
     */
    getUserAsKeyLabel() {
        return this.users.map(el => {
            return {
                key: el.id,
                label: el.surname + ' ' + el.name
            }
        })
    }

    /**
     * Получить массив всех пользователей в формате {key: ..id , label: ..ФИ} кроме себя самого
     * @returns {Array}
     */
    getUserAsKeyLabelNotMyself(id) {
        return !Boolean(id) ? [] : this.users.map(el => {
            return {
                key: el.id,
                label: el.surname + ' ' + el.name
            }
        }).filter(el => el.key !== id)
    }



    getUsersByIds(arrId) {
        return this.users
            .filter(el => arrId.indexOf(String(el.id)) !== -1)
            .map(el => {
                return {
                    key: el.id,
                    label: el.surname + ' ' + el.name
                }
            })
    }

    getUsers() {
        return this.users
    }

    setUsers(users) {
        this.users = users
    }
}

export default new allUser()