 const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișierele statice din rădăcina proiectului
app.use(express.static(path.join(__dirname)));

// Dacă nicio altă rută nu este potrivită, servește 'index.html' din rădăcină
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});
