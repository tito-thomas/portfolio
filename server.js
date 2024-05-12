const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');
const { exec } = require('child_process');


const url = 'http://localhost:3000';

app.use(express.static(path.join(__dirname, '/')));
app.use('/Shared', express.static(path.join(__dirname, '/Shared')));
app.use('/', router)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


exec(`start chrome ${url}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening Chrome: ${error}`);
    return;
  }
  console.log(`Chrome opened with URL: ${url}`);
});




