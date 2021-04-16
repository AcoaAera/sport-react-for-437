import {
    ALLUSER_ADD_NEWUSER,
    ALLUSER_DEL_USER
} from "./actions"

const defaultState = []

export const allUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALLUSER_ADD_NEWUSER:
            action.payload = {
                ...action.payload,
                id: createNewId(state)
            }
            state.splice(0, -1, action.payload)
            return state
        case ALLUSER_DEL_USER:
            return state.splice(state.indexOf(action.payload))
        default:
            return state
    }
};

function createNewId(array) {
    let isGoodId = false
    let newId;
    while (!isGoodId) {
        newId = Math.round(Math.random() * 1000000)
        let count = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === newId) count++
        }
        isGoodId = count === 0 ? true : false
        //isGoodId = (array.find(({ id }) => id === newId) !== -1);
    }

    return newId
};