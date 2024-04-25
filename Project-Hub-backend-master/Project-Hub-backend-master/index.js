const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const projectController = require('./controller/projectController')
const multer = require('multer')
const uploads =multer({dest:'uploads/'})
const bcrypt = require('bcrypt');
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test', (err) => {
    if (err) {
        console.log('DB Err.')
        console.log(err)
    } else {
        console.log('DB Connected.')
    }
});



// app.get('/hello', (req, res) => {
//     return res.send('Hello')
// })
// app.post('/api/projects',projectController.addProjects)j

app.post('/api/projects',uploads.single('p_img'),projectController.addProjects)
app.get('/api/projects',projectController.getProjects)
// app.get('/api/services',(req,res)=>
// {
//     const _data=[{},{}]
//     return res.send({code:200,message: 'sucsess',data:_data})
// })
app.get('/api/slider',projectController.getSlider)
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  });
  
  const User = mongoose.model('table', userSchema);
  
  
  app.use(bodyParser.json());
  
  app.post('/signup', async (req, res) => {
      
    console.log('Received signup request:', req.body);
  
    const { username, password, repeatPassword, email } = req.body;
  
    try {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
  
      if (password !== repeatPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword, email });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'User signed in successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})