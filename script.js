const videoELement = document.querySelector('#video');
const button = document.querySelector('#button');
//Select Media Stream FUnction
async function selectMediaStream() {
    try {

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoELement.srcObject = mediaStream;
        videoELement.onloadedmetadata = () => {
            videoELement.play();
        }
    } catch (e) {
        console.log(e)
    }

};

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;
    //Start Picture in Picture
    await videoELement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
})

//om Load
selectMediaStream();