const folder_path = 'C:/Users/pc/OneDrive/Desktop/html_learn/images';

const images =[
        `${folder_path}/images.png`, 
        `${folder_path}/background.png`,
        `${folder_path}/dog.jpg`,
        `${folder_path}/download.png`,
        `${folder_path}/test.png`,
] 
let currentIndex = 0;
function changeBackgroundImage() {
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
}
changeBackgroundImage();

setInterval(changeBackgroundImage, 10000);
