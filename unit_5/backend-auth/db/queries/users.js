const db = require('../db')

const getAllUsers = async () => {
	const users = await db.any("SELECT id, username FROM users")
	return users;
}

const addNewUser = async (user) => {
	const newUserQuery = `
		INSERT INTO users(username, password_digest)
			VALUES($/username/, $/password/)
			RETURNING id, username
	`
	const newUser = await db.one(newUserQuery, user)
	return newUser;
}

const getUserByUsername = async (username) => {
	const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [username])
	return user;
}

module.exports = {
	getAllUsers,
	addNewUser,
	getUserByUsername
}
