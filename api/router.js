const express = require('express');
const path = require('path');
const router = express.Router();



router.get("/", function (req, res) {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

router.get("/anime-project", function (req, res) {
    const filePath = path.join(__dirname, '../public/Views/Home/AnimeProject.html');
    res.sendFile(filePath);
});

router.get("/bitcoin-project", function (req, res) {
    const filePath = path.join(__dirname, '../public/Views/Home/BitcoinProject.html');
    res.sendFile(filePath);
});


//Header and footer

router.get("/Shared/navbar.html", function (req, res) {
    const filePath = path.join(__dirname, '../public/Views/Shared/navbar.html');
    res.sendFile(filePath);
});

router.get("/Shared/footer.html", function (req, res) {
    const filePath = path.join(__dirname, '../public/Views/Shared/footer.html');
    res.sendFile(filePath);
});
  
  
module.exports = router;
