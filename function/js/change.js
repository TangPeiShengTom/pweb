//随机数，实现图片随机搭配
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 7) + 1;
    return randomNumber;
}

let get01 = document.querySelector('.change')
let get03 = document.querySelector('body')
get03.style.backgroundImage = `url(img/${getRandomNumber()}.jpg)`;//设置背景图片
get03.style.backgroundRepeat = "no-repeat";//设置图片不重复
get03.style.backgroundSize = "cover";//设置图片为平铺(刚好铺满div)
// setInterval(function () {
//     let now = new Date()
//     let time = now.getSeconds()
//     console.log(time);
//     if (time < 20) {
//         get01.innerHTML = `<img src="img/${getRandomNumber()}.jpg" alt=""  width="600" height="400">`
//         get03.style.backgroundImage = `url(img/${getRandomNumber()}.jpg)`;//设置背景图片
//     } else if (time >= 20 && time < 40) {
//         get01.innerHTML = `<img src="img/${getRandomNumber()}.jpg" alt="" width="600" height="400">`
//         get03.style.backgroundImage = `url(img/${getRandomNumber()}.jpg)`//设置背景图片
//     } else {
//         get01.innerHTML = `<img src="img/${getRandomNumber()}.jpg" alt="" width="600" height="400">`
//         get03.style.backgroundImage = `url(img/${getRandomNumber()}.jpg)`
//     }
//     get03.style.backgroundRepeat = "no-repeat";//设置图片不重复
//     get03.style.backgroundSize = "cover";//设置图片为平铺(刚好铺满div)
// }, 3000)

setInterval(function () {
    get01.innerHTML = `<img src="img/${getRandomNumber()}.jpg" alt=""  width="100%" height="100%">`
    get03.style.backgroundImage = `url(img/${getRandomNumber()}.jpg)`;//设置背景图片
    get03.style.backgroundRepeat = "no-repeat";//设置图片不重复
    get03.style.backgroundSize = "cover";//设置图片为平铺(刚好铺满div)
}, 5000)


const audioPlayer = document.getElementById('audio-player');
const musicTitle = document.querySelector('.music-title');

//基础路径
const basePath = '../assets/music/';
//音乐名字和后缀
const songNames = [
    'YourName.mp3',
    '忙碌的生活「人山人海」.mp3',
    '夏日午后时.mp3',
    '一起躲雨.mp3',
    '寄居蟹里的纸条.mp3',
    '海面有风.mp3',
    'nop.aac',
    'CallOfSilence.aac',
    '河畔谧语.mp3',
    '爱情.mp3',
    '光.mp3',
    '弹给路小雨的吉他(Demo).mp3',
    '刻在我心底的名字.mp3',
    'IfICould.mp3',
    '按下暂停键你将变得清醒且堕落.mp3',
    '如果可以.mp3',
    '阴天快乐.mp3',
    'Things You Said.mp3',
    'Counter Attack-Mankind.mp3',
    '晴れゆく空.aac',
    '家族の時間.aac',
    '消えゆく陽菜.mp3',
    '一定要拥有吗.mp3',
    'felicity.mp3',
    '晚安（鹿先森乐队）.mp3',
    'Eta.mp3',

];
//用map方法拼接完整路径
const songs = songNames.map(song => basePath + song);


// 音乐列表
const musicList = ['你的名字',
    '人山人海',
    '夏日午后时',
    '一起躲雨',
    '寄居蟹里的纸条',
    '海面有风',
    'nop',
    'Call of Silence',
    '河畔谧语',
    '爱情',
    '光',
    '弹给路小雨的吉他',
    '刻在我心底的名字',
    'If I could',
    '按下暂停键你将变得清醒且堕落',
    '如果可以',
    '阴天快乐',
    'Things You Said',
    'Counter Attack-Mankind',
    '晴れゆく空',
    '家族の時間',
    '消えゆく陽菜',
    '一定要拥有吗',
    'felicity',
    '晚安（鹿先森乐队）',
    'Eta',

];


let currentSongIndex = 0;
let currentMusicIndex = 0;
function playSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    musicTitle.textContent = `《${musicList[currentMusicIndex]}》`;
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    audioPlayer.pause();
    playSong();
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
    playSong();
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

audioPlayer.addEventListener('ended', () => {
    playNext();
});

// 点击播放下一首歌曲
audioPlayer.addEventListener('click', () => {
    playNext();
});

// 点击播放上一首歌曲
audioPlayer.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // 阻止右键菜单
    playPrevious();
});
