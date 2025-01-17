let progress = 0;
const totalSize = 1000; // Simulating 1GB as 1000MB
const downloadSpeed = 14; // 14MB per second

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const downloadSpeedText = document.getElementById('download-speed');
const endMessage = document.getElementById('end-message');
const popup = document.getElementById('popup');

function updateProgress() {
    if (progress < totalSize) {
        progress += downloadSpeed; // Add 14MB per second
        const percentage = (progress / totalSize) * 100;
        
        progressBar.style.width = percentage + "%";
        progressText.innerText = `${Math.min(progress, totalSize)}/1GB`;
        downloadSpeedText.innerText = `Speed: ${downloadSpeed} MB/s`;

        if (progress < totalSize) {
            setTimeout(updateProgress, 1000); // Update every second
        } else {
            startInstallation();
        }
    }
}

function startInstallation() {
    popup.innerHTML = "<p>Installing files...</p>";
    setTimeout(() => {
        popup.innerHTML = "<p>Server Connected</p><p>Files Connected</p>";
        setTimeout(showErrorMessage, 2000); // Simulate RAM error
    }, 3000); // Wait for installation to finish
}

function showErrorMessage() {
    endMessage.style.display = 'block';
    document.getElementById('ram-message').style.display = 'block';
}

// Start the download process
setTimeout(updateProgress, 1000);
