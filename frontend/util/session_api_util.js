export const signup = () => {
 return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: {user}
    })
}

export const login = () => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data:  {user}
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}