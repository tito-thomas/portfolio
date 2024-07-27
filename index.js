const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');
const { exec } = require('child_process');


const url = 'http://localhost:3000';

app.use(express.static(path.join('../public', '/')));
app.use('../public/Views/Shared', express.static(path.join('../public', '/Shared')));
app.use('/', router)

console.log("RUNNING")
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});


// exec(`start chrome ${url}`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error opening Chrome: ${error}`);
//     return;
//   }
//   console.log(`Chrome opened with URL: ${url}`);
// });
 