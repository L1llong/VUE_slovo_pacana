<template>
    <div class="soundtrackPage">
        <div class="soundtrackPage__top">
            <h1>Саундтреки сериала</h1>
            <h1>
                <strong>
                    <span style="color: red;">Слово пацана: Кровь на асфальте</span>
                </strong>
            </h1>
        </div>
        <div class="soundtrackPage__bottom">
            <h1>
                <SvgComponent/> 
                <p>
                    ТОП-5 саундтреков сериала 
                </p> 
                <SvgComponent/>
            </h1>
            <div class="soundtrackPage__bottom-music" v-for="audio in audioList" :key="audio.id">
                <div class="soundtrackPage__bottom-wrapper">
                    <img :src="audio.img" id="soundtrackImg">
                    <div class="soundtrackPage__bottom-wrapper-text">
                        <p>{{audio.artist}}</p>
                        <h2>{{audio.name}}</h2>
                    </div>
                </div>
                <div class="soundtrackPage__bottom-track">
                    <img src="../assets/images/soundtracks-img/play.png" :id="'playBtn-' + audio.id">
                    <div :id="'waveform-' + audio.id"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import SvgComponent from '../components/SvgComponent.vue'
export default {
    name: 'SoundTracksPage',
    components: {
    SvgComponent,
    },
    mounted() {
        this.audioList.forEach((audio) => {
            const containerId = 'waveform-' + audio.id;
            const playBtnId = 'playBtn-' + audio.id;
            const container = document.getElementById(containerId);
            const playBtn = document.getElementById(playBtnId);
            const wafesurfer = WaveSurfer.create({
                container,
                waveColor: '#ddd',
                progressColor: '#ff006c',
                badWidth: 4,
                responsive: true,
                height: 40,
                barRadius: 4,
            }) 
            wafesurfer.load(audio.url);

            playBtn.addEventListener('click', () => {
                wafesurfer.playPause();
                if (playBtn.src.includes('play.png')) {
                    playBtn.src = 'src/assets/images/soundtracks-img/pause.png'
                } else {
                    playBtn.src = 'src/assets/images/soundtracks-img/play.png'
                }
            })

            wafesurfer.on('finish', () => {
                playBtn.src = 'src/assets/images/soundtracks-img/play.png'
                wafesurfer.stop();
            })
        });
    },
    data() {
        return {
            audioList: [
                {
                    id: 1,
                    artist: 'Аигел',
                    name: 'Пыяла',
                    url: '/src/assets/audio/aigel.mp3',
                    img: 'src/assets/images/soundtracks-img/aigel.jpg'
                },
                {
                    id: 2,
                    artist: 'Баста',
                    name: 'На заре',
                    url: '/src/assets/audio/basta.mp3',
                    img: 'src/assets/images/soundtracks-img/basta.jpg'
                },
                {
                    id: 3,
                    artist: 'Мираж',
                    name: 'Новый герой',
                    url: '/src/assets/audio/mirage.mp3',
                    img: 'src/assets/images/soundtracks-img/mirage.jpg'
                }
            ]
        }
    }
}
</script>

<style>
.soundtrackPage {
    background-image: linear-gradient(to bottom right, #2a0845, #6441A5);
    padding-top: 250px;
    height: 100%;
}

.soundtrackPage__top {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 0px 100px 250px;
}

.soundtrackPage__top > h1 {
    color: #fff;
    font-size: 54px;
    font-weight: 500px;
    margin: 0;
    line-height: 80px;
}

h1 > strong {
    font-weight: 700;
}

.soundtrackPage__bottom {
    background-color: #fff;
    padding: 50px 0 0px 250px;
    color: #1d1d78;
    display: flex;
    flex-direction: column;
}

.soundtrackPage__bottom > h1 {
    display: flex; 
    font-size: 38px;
}

.soundtrackPage__bottom p {
    margin: 0 10px 0 10px;
}

.soundtrackPage__bottom-music {
    display: flex;
    flex-direction: column;
    padding: 15px 30px 30px 30px;
    background: #000001;
    color: #fff;
    border-radius: 8px;
    margin-bottom: 50px;
    max-width: 70%;
    height: 115px;
}

.soundtrackPage__bottom-wrapper {
    display: flex;
    height: 55px;
    margin-bottom: 20px;
}

.soundtrackPage__bottom-music h2 {
    margin: 5px 0 0 0;
}

.soundtrackPage__bottom-music p {
    margin: 10px 0 0 0;
    font-size: medium;
}

.soundtrackPage__bottom-track {
    display: flex;
    align-items: center;
    margin: 10px 0 5px 0;
    
}

.soundtrackPage__bottom-track img {
    width: 50px;
    margin: 0 30px 0 10px;
    cursor: pointer;
}

#soundtrackImg {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    margin-right: 30px;
}

.soundtrackPage__bottom-track div {
    flex: 1;
}

</style>