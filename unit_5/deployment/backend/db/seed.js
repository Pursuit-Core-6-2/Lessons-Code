const db = require("./db");
// const { QueryFile } = require('pg-promise')

// db.none('CREATE DATABASE ')

// const seedfile = new QueryFile('./seed.sql')

let tables = {
    users: "users",
    bookmarks: "bookmarks"
}

let users = [
    {
        email: "bill@microsoft.com",
        username: "bgates"
    },
    {
        email: "jeff@amazon.com",
        username: "jbezos"
    },
    {
        email: "spichay@google.com",
        username: "sundar"
    }
]

let bookmarks = [
    {
        url: "https://microsoft.com",
        title: "Microsoft homepage"
    },
    {
        url: "https://amazon.com",
        title: "Amazon is great"
    },
    {
        url: "https://google.com",
        title: "Google is creepy"
    }
]

let queries = users.map((user, index) => {
    return db.one("INSERT INTO users(email, username) VALUES (${email}, ${username}) RETURNING id",
        {
            table: tables.users,
            email: user.email,
            username: user.username
        })
        .then(result => {
            return db.none("INSERT INTO bookmarks(user_id, url, title) VALUES(${user_id}, ${url}, ${title})", {
                user_id: result.id,
                url: bookmarks[index].url,
                title: bookmarks[index].title
            })
        })
        .catch(err => {
            console.error(err)
        })
})

Promise.all(queries).then(() => {
    console.log(`inserted ${users.length} rows`)
    process.exit()
}).catch(err => {
    console.error("promise broke")
    console.error(err)
})
