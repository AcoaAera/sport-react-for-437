export const ALLUSER_ADD_NEWUSER = 'ALLUSER_ADD_NEWUSER'
export const ALLUSER_DEL_USER = 'ALLUSER_DEL_USER'

export const pushUser = (user) => ({
    type: ALLUSER_ADD_NEWUSER,
    payload: user
})

export const delUser = (user) => ({
    type: ALLUSER_DEL_USER,
    payload: user
})