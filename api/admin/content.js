const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Content = require('../../models/content');
require('dotenv').config();
const authMiddleware = require('../../middleware/authMiddleware');

mongoose.connect(process.env.CON_STR + "/Blog");



// Middleware'i tüm endpointlerde kullan
app.use(authMiddleware.jwtVerify);

app.get("/", (req, res) => {
  Content.find().sort({_id: -1})
    .then((response) => {
      res.status(200).json(response);
    }).catch((err) => {
    res.status(500).json({error: err});
  });
});

app.post("/", authMiddleware.checkAdmin, (req, res) => {
  const content = new Content(req.body);
  content.save().then((response) => {
    res.status(201).json(response);
  }).catch((err) => {
    let errMsg = err.errors;
    Object.keys(errMsg).forEach((key) => {
      return res.status(400).json({error: errMsg[key].message});
    });

  });

});

app.get("/:id", authMiddleware.checkAdmin, (req, res) => {
  Content.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    }).catch((err) => {
    res.status(404).json({error: "Sayfa Bulunamadı"});
  });
});


app.put("/:id", authMiddleware.checkAdmin, (req, res) => {
  Content.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response) => {
      res.status(204).json({success: true});
    }).catch((err) => {
    res.status(400).json({error: err});
  });

});


app.delete("/:id", authMiddleware.checkAdmin, (req, res) => {
  Content.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(204).json({success: true});
    }).catch((err) => {
    res.status(400).json({error: err});
  });
});


module.exports = {
  path: '/api/admin/content',
  handler: app
}


