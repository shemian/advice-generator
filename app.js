//  Set up the server
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from public directory
app.use(express.static('public'))


//  Route to serve the html file
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html') /// Get the absolute path to the HTML file
    res.sendFile(filePath);    
});

//  Route to fetch new advice
app.get('/get-advice', async (req, res) => {
    try {
        //  Make a request to the advice generator API using fetch
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip.advice;

        //  Send the new advice as a json response
        res.json({advice});
    } catch (error) {
        console.error("Error fetching new advice: ", error.message);
        res.status(500).json({error: "An error occured while fetching advice"});
    }
})


//  Starting the server
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
})