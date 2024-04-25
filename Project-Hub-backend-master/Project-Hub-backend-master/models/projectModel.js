const mongoose = require('mongoose');


module.exports = mongoose.model('projects1', {
    p_title: String,
    p_description: String,
    p_exp:String,
    p_link:String,
    p_img:String,
});
