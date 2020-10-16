const jwt = require("passport-jwt").Strategy;
const Extract = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20')
const User = require("../models/User");

const Keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = Extract.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new jwt(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: Keys.googleClientID,
        clientSecret: Keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        userProfileURL:'https://www.googleapis.com/oauth2/v3/userinfo'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('profile',profile)
        const newUser = {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        };
        User.findOne({ googleId: profile.id }).then((user) => {
          if (user) {
            done(null, user);
          } else {
            new User(newUser).save().then((user) => {
              done(null, user);
            });
          }
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
