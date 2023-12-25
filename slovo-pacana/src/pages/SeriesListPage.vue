<template>
    <div class="seriesPage">
        <div class="seriesPage__top">
            <h1>Список серии</h1>
            <h1>
                <strong>
                    <span style="color: red;">Слово пацана: Кровь на асфальте</span>
                </strong>
            </h1>
        </div>
        <div class="seriesPage__bottom">
            <div class="seriesPage__bottom-wraper">
                <div class="seriesPage__bottom-item" v-for="series in series" 
                    :key="series.id"
                    @click="goToEpisode(series.id)"
                >
                    <img  class="seriesPage__bottom-item-img" :src="series.src" :alt="series.episode">
                    <h3 class="seriesPage__bottom-item-title">Смотреть</h3>
                    <h3>{{series.episode}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeriesListPage',
    data() {
        return {
            series: [
                {
                    id: 1,
                    episode: 'Серия 1',
                    src: '../src/assets/images/images-series/episode_1.jpg'
                },
                {
                    id: 2,
                    episode: 'Серия 2',
                    src: '../src/assets/images/images-series/episode_2.jpg'
                },
                {
                    id: 3,
                    episode: 'Серия 3',
                    src: '../src/assets/images/images-series/episode_3.jpg'
                },
                {
                    id: 4,
                    episode: 'Серия 4',
                    src: '../src/assets/images/images-series/episode_4.jpg'
                },
                {
                    id: 5,
                    episode: 'Серия 5',
                    src: '../src/assets/images/images-series/episode_5.jpg'
                },
                {
                    id: 6,
                    episode: 'Серия 6',
                    src: '../src/assets/images/images-series/episode_6.jpg'
                },
                {
                    id: 7,
                    episode: 'Серия 7',
                    src: '../src/assets/images/images-series/episode_7.jpg'
                },
                {
                    id: 8,
                    episode: 'Серия 8',
                    src: '../src/assets/images/images-series/episode_8.jpg'
                },
            ]
        }
    },
    methods: {
        goToEpisode(id) {
            this.$router.push('/episode/' + id)
        }
    }
}
</script>

<style>
.seriesPage {
    background-image: linear-gradient(to bottom right, #2a0845, #6441A5);
    padding-top: 250px;
    height: 100%;
}

.seriesPage__top {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 0px 100px 250px;
}

.seriesPage__top > h1 {
    color: #fff;
    font-size: 54px;
    font-weight: 500px;
    margin: 0;
    line-height: 80px;
}

h1 > strong {
    font-weight: 700;
}

.seriesPage__bottom {
    background-color: #fff;
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    align-self: stretch;
    padding-left: 250px;
}

.seriesPage__bottom-wraper {
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 90%;
    align-self: stretch;
    margin-top: 100px ;
}

.seriesPage__bottom-item {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0px 50px 60px 0 ;
    position: relative;
    cursor: pointer;
}

.seriesPage__bottom-item > h3 {
    padding-left: 5px;
}

.seriesPage__bottom-item-img{
    border-radius: 15px 15px 15px 15px;
    width: 200px;
}


.seriesPage__bottom-item-img {
  transition: filter 0.3s;
}

.seriesPage__bottom-item:hover .seriesPage__bottom-item-img {
  filter: brightness(0.5);
}

.seriesPage__bottom-item-title {
  position: absolute;
  color: #e3e2e2;
  top: 50px;
  left: 100px;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.seriesPage__bottom-item:hover .seriesPage__bottom-item-title {
  opacity: 1;
}
</style>