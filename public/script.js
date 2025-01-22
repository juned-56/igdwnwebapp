// async function getVideoPreview() {
//     const url = document.getElementById("instaUrl").value;
//     if (!url) {
//         alert("Please enter a valid Instagram video URL");
//         return;
//     }

//     try {
//         const response = await fetch("http://localhost:3000/download", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ url })
//         });

//         if (response.ok) {
//             const blob = await response.blob();
//             const videoUrl = URL.createObjectURL(blob);

//             // Show video preview
//             const previewPlayer = document.getElementById("previewPlayer");
//             previewPlayer.src = videoUrl;
//             document.getElementById("videoPreview").style.display = "block";

//             // Enable download button
//             document.getElementById("downloadBtn").style.display = "inline-block";
//         } else {
//             alert("Failed to fetch video preview.");
//         }
//     } catch (error) {
//         console.error(error);
//         alert("Error fetching the video preview.");
//     }
// }

// function downloadVideo() {
//     const previewPlayer = document.getElementById("previewPlayer");
//     if (previewPlayer.src) {
//         const link = document.createElement("a");
//         link.href = previewPlayer.src;
//         link.download = "Instagram_Video.mp4";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     } else {
//         alert("Preview the video first!");
//     }
// }








// Toggle Mobile Menu
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

// Fetch Instagram Video Preview
async function getVideoPreview() {
    const url = document.getElementById("instaUrl").value;
    if (!url) {
        alert("Please enter a valid Instagram video URL");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        if (response.ok) {
            const blob = await response.blob();
            const videoUrl = URL.createObjectURL(blob);

            // Show video preview
            const previewPlayer = document.getElementById("previewPlayer");
            previewPlayer.src = videoUrl;
            document.getElementById("videoPreview").style.display = "block";

            // Enable download button
            document.getElementById("downloadBtn").style.display = "inline-block";
        } else {
            alert("Failed to fetch video preview.");
        }
    } catch (error) {
        console.error(error);
        alert("Error fetching the video preview.");
    }
}

// Download Instagram Video
function downloadVideo() {
    const previewPlayer = document.getElementById("previewPlayer");
    if (previewPlayer.src) {
        const link = document.createElement("a");
        link.href = previewPlayer.src;
        link.download = "Instagram_Video.mp4";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Preview the video first!");
    }
}

