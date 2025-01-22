const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișierele statice din folderul 'dist' (sau alt folder unde e index.html)
app.use(express.static(path.join(__dirname, "dist")));

// Dacă nicio altă rută nu este potrivită, servește 'index.html'
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});