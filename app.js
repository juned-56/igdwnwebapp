// /server/server.js
const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint to download the Instagram video
app.post("/download", (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).send("No URL provided");
    }

    // Specify the output file name
    const outputFile = path.join(__dirname, "../downloads", "instagram_video.mp4");

    // yt-dlp command to download the video
    const command = `yt-dlp -f best -o "${outputFile}" "${url}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            return res.status(500).send("Download failed");
        }

        // Send the video file for download
        res.download(outputFile, "Instagram_Video.mp4", () => {
            fs.unlinkSync(outputFile); // Clean up the file after download
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
