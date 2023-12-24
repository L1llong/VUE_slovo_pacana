<template>
<div class="achievements">
    <div class="achievements__container">
      <h2><span>Достижения</span> сериала</h2>
      <div class="achievements__container-items">
        <div class="container__item" v-for="item in achievements" :key="item.id">
          <a :href="item.href" target="_blank">
            <img class="container__item--img" :src="item.img" alt="item.headerText">
            <div class="container__item--text">
              <h5 class="item_h5">{{ item.headerText }}</h5>
              <p>{{ item.text }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AchievementsComponent',
  data() {
    return {
      achievements: [
        {
          id: 1,
          img: '../src/assets/images/raiting-kinopoisk.png',
          headerText: 'Оценка Кинопоиска',
          text: '9.1 - именно такая оценка сериала на крупнейшем портале Кинопоиск.',
          href: 'https://www.kinopoisk.ru/film/5304403/votes/'
        },
        {
          id: 2,
          img: '../src/assets/images/top_250.png',
          headerText: 'ТОП Кинопоиска',
          text: 'За месяц сериал вошел в ТОП 250 сериалов за все время.',
          href: 'https://www.kinopoisk.ru/lists/movies/series-top250/'
        },
        {
          id: 3,
          img: '../src/assets/images/raiting-wink.png',
          headerText: 'Оценка Wink',
          text: '9.6 - оценка на площадке Wink, где транслируется сериал.',
          href: 'https://wink.ru/series/slovo-patsana-year-2023'
        }
      ]
    }
  }
}
</script>

<style>
.achievements {
  background: linear-gradient(to bottom right, #2a0845, #6441A5);
  height: 70vh;
}

.achievements__container{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 5%;
}
.achievements__container-items{
  display: flex;
  justify-content: center;
  padding: 0 150px;
}

.achievements__container > h2 {
  color: white;
  font-size: 48px;
  font-weight: 500;
  line-height: 55px;
}

.container__item--text {
  display: inline-block;
  text-align: left;
  margin-left: 10px;
  max-width: 50%;
}

h2 > span {
  border-bottom: 4px solid #d1088b;
  color: #6de0f6
}
.item_h5 {
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 0;
}

.container__item--text > p {
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0;
}

.container__item--img {
  padding-bottom: 55px;
}
</style>