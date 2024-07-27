const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');
const { exec } = require('child_process');


const url = 'http://localhost:3000';

// app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '../public')));
// app.use('/Content', express.static(path.join(__dirname, '../public/Content')));
// app.use('/Scripts/custom', express.static(path.join(__dirname, '../public/Scripts/custom')));
// app.use('/Home', express.static(path.join(__dirname, '../public/Views/Home')));
// app.use('/Shared', express.static(path.join(__dirname, '../public/Views/Shared')));
// app.use('/Shared', express.static(path.join(__dirname, '/Shared')));
app.use('/', router)

console.log("RUNNING")
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});

export default app
// exec(`start chrome ${url}`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error opening Chrome: ${error}`);
//     return;
//   }
//   console.log(`Chrome opened with URL: ${url}`);
// });

