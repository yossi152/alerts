import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/get-oref-alerts", async (req, res) => {
  const orefUrl =
    "https://alerts-history.oref.org.il//Shared/Ajax/GetAlarmsHistory.aspx?lang=he&mode=2&city_0=%D7%94%D7%A8%20%D7%90%D7%93%D7%A8";
  try {
    const response = await fetch(orefUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching from Oref:", error);
    res.status(500).json({ error: "Failed to fetch alerts from Oref." });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening at http://localhost:${PORT}`);
});
