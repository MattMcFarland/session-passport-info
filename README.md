# A middleware that console.logs if user is `logged-in` or `logged-out` and session info.

[![npm](https://img.shields.io/npm/v/session-passport-info.svg)](https://www.npmjs.com/package/session-passport-info)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/MattMcFarland/session-passport-info)
[![Coverage Status](https://coveralls.io/repos/MattMcFarland/session-passport-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/MattMcFarland/session-passport-info?branch=master)

Express session diagnostic for
[Connect](https://github.com/senchalabs/connect) /
[Express](http://expressjs.com/) with [Passport.js](http://passportjs.org/)

## Compatibility

* Support Express `4.x` and `5.0`
* Support Node.js `0.10`, `0.12`, `4.x`, `5.x` and all [io.js](https://iojs.org) versions
* Support for Passport

### For use with `express-session` and `passport`

Express `4.x`, `5.0` and Connect `3.x`:

Once added, you will get information regarding the session like:

- `status: logged-in || logged-out`
- `sessionStore`
- `sessionID`
- `session`

```js
const session = require('express-session');
const passportInfo = require('session-passport-info');

app.use(session());
app.use(passportInfo());

```
__Note__    This is for Passport, for session diagnostic try [session-info](https://npmjs.com/package/session-info)


## License

The MIT License
