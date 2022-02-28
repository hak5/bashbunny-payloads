const WALLPAPERS = [
    'abstact-nature.jpg',
    'beach-cave.jpg',
    'mountains-lake.png',
    'sea-airplain.png',
    'solid-blue.jpg',
    'windows-light.jpg'
];
document.querySelector('body').style.backgroundImage = ('url("./assets/img/wallpapers/' + (WALLPAPERS.sort(() => Math.random() - 0.5)[0]) + '")');