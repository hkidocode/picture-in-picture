const video = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video and then play
async function selectMediaStream() {
    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = captureStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        throw 'media stream ' + error;
    }
}


button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await video.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

selectMediaStream();