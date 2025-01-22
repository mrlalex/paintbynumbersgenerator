const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite aplicației să interpreteze cereri POST cu JSON
app.use(express.json());

// Servește fișierele statice din rădăcina proiectului
app.use(express.static(path.join(__
app.get("/api/test", (req, res) => {
    res.json({ message: "Serverul funcționează corect!" });
});

app.post("/api/process-image", (req, res) => {
    const { imageUrl } = req.body;

    // Simularea procesării imaginii
    if (!imageUrl) {
        return res.status(400).json({ error: "Lipsește URL-ul imaginii" });
    }

    // Aici poți adăuga logica ta pentru procesarea imaginii
    const result = `Imaginea de la ${imageUrl} a fost procesată cu succes.`;

    res.json({ message: result });
});

// === Fallback pentru rutele nepotrivite ===

// Dacă nicio rută API nu este potrivită, servește 'index.html' din rădăcină
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Pornirea serverului
app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});
