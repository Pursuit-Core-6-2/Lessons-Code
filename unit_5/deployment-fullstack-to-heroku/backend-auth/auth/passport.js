const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { comparePasswords } = require('../auth/helpers');
const usersQueries = require('../db/queries/users');

passport.use(new LocalStrategy(async (username, password, done) => {
  console.log('Authenticating user')
  try {
    const user = await usersQueries.getUserByUsername(username);
    if (!user) {
      // Username not found in the database
      return done(null, false)
    }

    const passMatch = await comparePasswords(password, user.password_digest);
    if (!passMatch) {
      // Username found but passwords don't match
      return done(null, false)
    }

    delete user.password_digest; // Delete password_diggest from user object to not expose it accidentally
    done(null, user);

  } catch (err) {
    done(err)
  }
}))

passport.serializeUser((user, done) => {
  console.log('serializing user to session')
  done(null, user)
})

passport.deserializeUser(async (user, done) => {
  console.log('deserializing user from session')
  try {
    let retrievedUser = await usersQueries.getUserByUsername(user.username)
    delete retrievedUser.password_digest;
    done(null, retrievedUser)
  } catch (err) {
    done(err, false)
  }
})

module.exports = passport;
