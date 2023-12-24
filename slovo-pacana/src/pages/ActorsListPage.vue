<template>
    <div class="actorsPage">
        <div class="actorsPage__top">
            <h1>Актеры сериала</h1>
            <h1>
                <strong>
                    <span style="color: red;">Слово пацана: Кровь на асфальте</span>
                </strong>
            </h1>
        </div>
        <div class="actorsPage__middle">
            <p>
                Откройте для себя блестящий актерский состав сериала "Слово Пацана: Кровь на асфальте", 
                который стал ключом к его неоспоримому успеху. Наш сайт предлагает эксклюзивный взгляд на талантливых актеров, 
                воплотивших в жизнь захватывающую и многогранную историю этого увлекательного сериала.
            </p>
        </div>
        <div class="actorsPage__bottom">
            <span>
                <h2>Актерский состав</h2>
            </span>
            <div class="actorsPage__bottom__container">
                <div class="actorsPage__bottom__container-item" v-for="actor in actorsList" 
                    :key="actor.id"
                >
                    <img :src="actor.src" :alt="actor.name">
                    <h4><strong>{{actor.name}}</strong></h4>
                    <p v-if="actor.id === 7" style="display: contents;">
                        <strong>{{actor.nickName}}</strong>  - {{actor.role}}
                    </p>
                    <p v-else>
                        <strong>{{actor.nickName}}</strong>  - {{actor.role}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ActorsListPage',
  data() {
    return {
        actorsList: [
            {
                id: 1,
                name: 'Иван Янковский', 
                nickName: 'Вова',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_1.jpg'
            },
            {
                id: 2,
                name: 'Рузиль Минекаев',
                nickName: 'Марат',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_2.jpg'
            },
            {
                id: 3,
                name: 'Леон Кемстач',
                nickName: 'Андрей',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_3.jpg'
            },
            {
                id: 4,
                name: 'Елизавета Базыкина',
                nickName: 'Наташа',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_4.jpg'
            },
            {
                id: 5,
                name: 'Анна Пересильд',
                nickName: 'Айгуль',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_5.jpg'
            },
            {
                id: 6,
                name: 'Анастасия Красовская',
                nickName: 'Ирина',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_6.jpg'
            },
            {
                id: 7,
                name: 'Сергей Бурунов',
                nickName: 'Отец Марата и Вовы',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_7.jpg'
            },
            {
                id: 8,
                name: 'Юля Александрова',
                nickName: 'Мама Андрея',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_8.jpg'
            },
            {
                id: 9,
                name: 'Антон Васильев',
                nickName: 'Ильдар',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_9.jpg'
            },
            {
                id: 10,
                name: 'Никита Кологривый',
                nickName: 'Кащей',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_10.jpg'
            },
            {
                id: 11,
                name: 'Лев Зулькарнаев',
                nickName: 'Зима',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_11.jpg'
            },
            {
                id: 12,
                name: 'Слава Копейкин',
                nickName: 'Турбо',
                role: 'главная роль',
                src: '../src/assets/images/actors/actor_12.jpg'
            }
        ]
    }
  }
}
</script>

<style>
.actorsPage {
    background-image: linear-gradient(to bottom right, #2a0845, #6441A5);
    padding-top: 250px;
    height: 100%;
}

.actorsPage__top {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 0px 100px 250px;
}

.actorsPage__top > h1 {
    color: #fff;
    font-size: 54px;
    font-weight: 500px;
    margin: 0;
    line-height: 80px;
}

h1 > strong {
    font-weight: 700;
}

.actorsPage__middle {
    background-color: #fff;
    display: flex;
    padding: 50px 150px 80px 250px;
    margin-top: 100px;
}

.actorsPage__middle > p {
    font-size: 20px;
    text-align: left;
    line-height: 1.5;
    color: #1d1d78;
    font-weight: 600;
}

.actorsPage__bottom {
    padding-top: 100px;
    padding-bottom: 60px;
    background-color: #f9f8fa;
    padding-left: 250px;
}

.actorsPage__bottom__container {
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 90%;
    align-self: stretch;
}

.actorsPage__bottom__container-item {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 50px 0 ;
    padding-right: 50px;
}

span > h2{
    display: inline;
    border-bottom: 4px solid #6de0f6;
    color: #6de0f6;
    font-size: 48px;
}

.actorsPage__bottom__container-item > h4 {
    margin: 15px 0 0px 0;
    color: #0a0541;
    font-size: 21px;
}

.actorsPage__bottom__container-item > p {
    margin-top: 5px;
}

</style>