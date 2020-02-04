
const db = require('./db')

let getOneBookmark = (bookmarkID) => {
    return db.one('SELECT * FROM bookmarks WHERE id = $1', bookmarkID).catch(err => {
        console.error(err)
    })
}

let getAllBookmarks = () => {
    return db.manyOrNone('SELECT * FROM bookmarks').catch(err => {
        console.error(err)
    })
}

let getBookmarkByTitle = (title) => {
    return db.oneOrNone('SELECT * FROM bookmarks WHERE title = $1', title).catch(err => {
        console.error(err)
    })
}

let createBookmark = (newBookmark) => {
    return db.none('INSERT INTO bookmarks(user_id, url, title) VALUES (${user_id}, ${url}, ${title})', { ...newBookmark }).catch(err => {
        console.error(err)
    })
}

let updateBookmark = (update) => {
    return db.oneOrNone('UPDATE bookmarks SET url = ${url}, title = ${title} WHERE id = ${id}', { ...update })
        .catch(err => {
            console.error(err)
        })
}

let deleteBookmark = (id) => {
    return db.none('DELETE FROM bookmarks WHERE ID = $1', id)
}

let getOneUser = (id) => {
    return db.one('SELECT * FROM users WHERE id = $1', id).catch(err => {
        console.error(err)
    })
}

let getAllUsers = (id) => {
    return db.any('SELECT * FROM users').catch(err => {
        console.error(err)
    })
}

let createUser = (user) => {
    return db.none('INSERT INTO users(email, username) VALUES (${email}, ${username})', { ...user })
        .catch(err => {
            console.error(err)
        })
}

let updateUser = (user) => {
    return db.none('UPDATE users SET email = ${email}, username = ${username} WHERE id = ${id}', { ...user })
        .catch(err => {
            console.error(err)
        })
}

let deleteUser = (id) => {
    return db.none('DELETE FROM users WHERE ID = $1', id)
}

module.exports = {
    getOneBookmark,
    getAllBookmarks,
    getBookmarkByTitle,
    createBookmark,
    updateBookmark,
    deleteBookmark,
    getOneUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}
