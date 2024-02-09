const mongoose = require('mongoose');


module.exports = mongoose.model('Content', {
  title: {
    type: String,
    required: [true, 'Lütfen içerik başlığını giriniz'],
    maxlength: [150, 'İçerik başlığı en fazla 150 karakter olmalıdır']
  },
  content: {
    type: String,
    required: [true, 'Lütfen içerik giriniz'],
    maxlength: [1000, 'İçerik en az 1000 karakter olmalıdır']
  },

});
