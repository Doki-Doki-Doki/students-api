// index.js

// Import the Libraries
const express = require('express')
const axios = require('axios') 
const cors = require('cors')

// Initialize the Express App
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

// Start the Web Server on Port 8000
app.listen(8000, () => {
    console.log("App is listening on port 8000")
})


app.get('/students', async (req, res) => {
    try {

        const students = await axios.get('https://json-server-q3wd.onrender.com/students')
        res.status(200).json(students.data)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
    
})

app.get('/students/:id', async (req, res) => {
    try {

        const { id } = req.params

        const students = await axios.get('https://json-server-q3wd.onrender.com/students')
        res.status(200).json(students.data)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
    
})