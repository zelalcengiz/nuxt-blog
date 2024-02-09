const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authenticateUser = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("authorization => ", authorization);
  if (!authorization) {
    return res.status(401).json({error: 'Unauthorized'});
  }
  const token = authorization.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, {
    algorithms: ['HS256'],
    issuer: "localhost",
    audience: "localhost"
  }, (err, decoded) => {
    if (err) {
      return res.status(401).json({error: 'Invalid token'});
    }
    next();
  });
};


const checkAdmin = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({error: 'Unauthorized'});
  }
  const token = authorization.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, {
    algorithms: ['HS256'],
    issuer: "localhost",
    audience: "localhost"
  }, (err, decoded) => {
    if (err) {
      return res.status(401).json({error: 'Invalid token'});
    }
    if (decoded.role !== 'admin') {
      return res.status(401).json({error: 'Unauthorized'});
    }
    next();
  });
}


module.exports = {
  jwtVerify: authenticateUser,
  checkAdmin,
};


/* const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }*/
