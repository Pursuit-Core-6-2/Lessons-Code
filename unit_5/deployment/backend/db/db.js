const pgp = require('pg-promise')()
const cs = process.env.DATABASE_URL
const db = pgp(cs)

module.exports = db
