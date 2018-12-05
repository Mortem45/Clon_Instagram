const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const cloninstagramClient = require('cloninstagram-client');
const config = require('../config');


let client = cloninstagramClient.createClient(config.client);

exports.localStrategy = new LocalStrategy((username, password, done) => {
  client.auth(username, password, (err, token) => {
    if (err) {
      return done(null, false, { message: 'username and password not found' });
    }

    client.getUser(username, (err, user) => {
      if (err) {
        return done(null, false, { message: `an error ocurred: ${err.message}` })
      }

      user.token = token;
      return done(null, user);
    })
  })
});

exports.facebookStrategy = new FacebookStrategy ({
  clientID: config.auth.facebook.clientID,
  clientSecret: config.auth.facebook.clientSecret,
  callbackURL: config.auth.facebook.callbackURL,
  profileFields: ['id', 'displayName', 'email']
}, function (accessToken, refreshToken, profile, done) {
  let userProfile = {
    username: profile._json.id,
    name: profile._json.name,
    email: prodile._json.email,
    facebook: true
  }
  findOrCreate(userProfile, (err, user) => {
    return done(null, user);
  })

  function findOrCreate(userm, done) {
    client.getUser(user.username, (err, usr) => {
      if (err) {
        return client.saveUser(user, callback);
      }

      callback(null, usr);
    })
  }
});


exports.serializeUser = function (user, done) {
  done(null, {
    username: user.username,
    token: user.token
  });
}

exports.deserializeUser = function (user, done) {
  client.getUser(user.username, (err, usr) => {
    usr.token = user.token;
    done(err, usr);
  });
}