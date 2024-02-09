const express = require('express');
const jsonWebToken = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.CON_STR + "/Blog");
const User = require("../../models/User");


app.use(cookieParser());

let user = null;
app.post('/login', (req, res) => {

  const {email, password} = req.body;
  User.findOne({
    email: email,
    password: password
  }).then((response) => {
    console.log(response);
    user = response;
    if (response) {
      const token = jsonWebToken.sign({
        email: response.email,
        name: response.name,
        surname: response.surname,
        role: response.role,
      }, process.env.JWT_SECRET, {
        expiresIn: '1h',
        issuer: "localhost",
        audience: "localhost"
      });
      res.status(200).json({token});
    }
    res.status(401).json({error: 'Kullanıcı adı veya şifre hatalı!'});
  });
});


app.post('/logout', (req, res) => {
  // Logout işlemleri burada gerçekleştirilebilir
  res.status(200).json({message: 'Logout successful'});
});

app.post('/user', (req, res) => {
  // Token'dan kullanıcı bilgileri alınıp gönderilecek
  res.status(200).json({user});
});

app.post("/auth-token", (req, res) => {
  const token = jsonWebToken.sign({role: "guest"}, process.env.JWT_SECRET, {
    expiresIn: '1h',
    issuer: "localhost",
    audience: "localhost"
  });
  res.status(200).json({token});
});


module.exports = {
  path: '/api/auth',
  handler: app
}
