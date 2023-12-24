<template>
    <template v-for="episodes in episodes" :key="episodes.id">
        <div class="episodePage" v-if="$route.params.id === `${episodes.id}`">
            <div class="episodePage__top-wrapper">
                <div class="episodePage__top">
                    <h1>
                        <strong>
                            <span style="color: red;">Слово пацана: Кровь на асфальте</span>
                        </strong>
                        - {{ episodes.episode }} серия смотреть онлайн 
                    </h1>
                </div>
            </div>
            <div class="episodePage__middle">
                <div class="episodePage__middle--background">
                    <div class="episodePage__middle__container">
                        <div class="episodePage__middle__container--item">
                            <div class="episodePage__middle__container--item-header">
                                <h2>
                                    {{ episodes.season }} сезон {{ episodes.episode }} серия
                                </h2>
                                <p>
                                    <strong>
                                        <span style="color: red;">2023</span>, 
                                        Слово пацана. Кровь на асфальте. Сезон {{ episodes.season }}. Серия {{ episodes.episode }}
                                    </strong>
                                </p>
                            </div>
                            <div class="episodePage__middle__container--item-body">
                                <iframe :src="episodes.src" 
                                    class="video-player" allowfullscreen
                                    allow="autoplay" 
                                >
                                </iframe>
                            </div>
                            <div class="episodePage__middle__container--item-footer">
                                <h2>
                                    Сюжет
                                </h2>
                                <p>
                                    <span>
                                        {{ episodes.description_1 }}
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        {{ episodes.description_2 }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
export default {
    name: 'WatchEpisodePage',
    data() {
        return {
            episodes: [
                {
                    id: 1,
                    episode: '1',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1qT_nIEmWcv449SxffakgogeCzFo_BwE5/preview',
                    description_1: 'В первой серии 1 сезона сериала "Слово Пацана: Кровь на Асфальте", зрители погружаются в уникальную и захватывающую атмосферу Советского Союза конца восьмидесятых годов. Это время, когда страна стояла на пороге больших перемен, и каждый день приносил с собой новые вызовы и возможности. Взрослые были поглощены борьбой за выживание, в то время как молодежь искала свой путь в мире, полном опасностей и неопределенностей.',
                    description_2: 'Сериал "Слово Пацана: Кровь на Асфальте" открывает свою историю, представляя зрителям Андрея, прилежного ученика, который держится подальше от пацанской жизни. Его повседневность - это учеба, домашние дела, и попытки помочь своей семье. Однако, его жизнь резко меняется после встречи с Маратом, парнем, чья жизнь тесно связана с уличной культурой города. Эта случайная встреча в автобусе становится началом неожиданной и глубокой дружбы, которая кардинально изменит их жизни.'
                },
                {
                    id: 2,
                    episode: '2',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1IXNOB2JkHsnUIqNTnSeR2wFVtF3jFmHS/preview',
                    description_1: 'Во второй серии сериала "Слово Пацана: Кровь на Асфальте", смотреть которую можно онлайн, мир Андрея претерпевает резкие изменения. Под давлением тревожной матери, заботливого инспектора из милиции и строгих учителей, Андрей все глубже погружается в сложный мир уличных взаимоотношений.',
                    description_2: 'Серия демонстрирует, как жизнь Андрея разделяется на "до" и "после" встречи с Маратом и его бандой. В это же время брат Марата, вернувшийся из горячей точки, чувствует, что настал момент взять под свою опеку молодых пацанов, чтобы спасти их от ошибок, которые могут быть совершены слишком поздно.'
                },
                {
                    id: 3,
                    episode: '3',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1OBvnBQMRCOy6t2AvnpQ5gwC1bLIgNxY_/preview',
                    description_1: 'В третьей серии "Слово Пацана: Кровь на Асфальте", доступной для онлайн просмотра, сериал погружает зрителей в мир, где веселье дискотек контрастирует с жестокостью улиц. Пока многие отдаются беззаботным танцам, другие сталкиваются с суровой реальностью жизни на улице.',
                    description_2: 'Сложные отношения между персонажами обостряются, приводя к цепи необдуманных решений и действий. Недопонимания и обман внутри "универсама" вынуждают героев поступать под влиянием момента, что неизбежно приводит к серьезным последствиям. За каждым нанесенным ударом следует еще более мощный ответ, усиливая напряжение в сюжете.'
                },
                {
                    id: 4,
                    episode: '4',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1r52rt2AhTFPgEq4GeZgS-TbilDvTlHvF/preview',
                    description_1: 'Четвертая серия "Слово Пацана: Кровь на Асфальте", доступная для просмотра онлайн, переносит зрителей в центр захватывающего действия. В этой серии пацаны совершают дерзкую операцию, достойную фильма "Робокоп", чтобы вызволить Вову из больницы.',
                    description_2: 'После успешного спасения, они стоят перед важным выбором: продолжать путь беспорядочной мести или искать альтернативные пути решения своих проблем. Этот момент становится переломным, когда им приходится отпустить часть своего прошлого, чтобы двигаться вперед.'
                },
                {
                    id: 5,
                    episode: '5',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1wa_4U1WpiS1RA3L3bhvg5oRTy4OC-ElM/preview',
                    description_1: 'Пятая серия сериала "Слово Пацана: Кровь на Асфальте", доступная для онлайн просмотра, представляет собой микс надежды и неизбежных последствий. Благодаря инициативе Андрея, группа "универсам" открывает собственный видеосалон, который быстро становится популярным и приносит значительную прибыль. Это короткое затишье дает возможность расцвести новым чувствам и амбициям.',
                    description_2: 'В серии показано, как Вова пытается ухаживать за медсестрой, которая его спасла, и как Марат усиленно добивается внимания Айгуль. Даже Андрей начинает видеть призрачный шанс на исправление ситуации, однако, последствия его действий начинают настигать его. Зло, совершенное им, аукнулось, и теперь его эхо задевает даже тех, кто казался невиновным.'
                },
                {
                    id: 6,
                    episode: '6',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1XawL5DrYvT0W6eEJcpO-Q_BakdV71fY-/preview',
                    description_1: 'В 6 серии сериала «Слово пацана» Марат и Вова оказываются в непростой ситуации. Столкновение с «домбытовскими» обернулось трагедией для Айгуль. Девушка получила серьезные травмы, и Марат с Вовой знают, что молчать об этом нельзя. Однако они боятся, что некоторые подробности происшествия могут навредить.',
                    description_2: 'С одной стороны, Марат и Вова хотят рассказать правду о том, что произошло. Они считают, что это единственный способ защитить Айгуль. С другой стороны, они опасаются, что это может привести к новым конфликтам.'
                },
                {
                    id: 7,
                    episode: '7',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1XawL5DrYvT0W6eEJcpO-Q_BakdV71fY-/preview',
                    description_1: 'В 7-й серии "Слово Пацана: Кровь на Асфальте", доступной для просмотра онлайн, зрители погружаются в один из самых напряженных и эмоциональных моментов сериала. Этот эпизод открывает новые глубины в истории Андрея и его семьи, демонстрируя сложность их взаимоотношений и непростой путь, который им предстоит пройти.',
                    description_2: 'Андрей, всегда старающийся быть опорой и надеждой для своей матери, сталкивается с серьезными трудностями. Его усилия помочь матери оказываются бесполезными, и неожиданное возвращение ее в их жизнь вносит новый виток хаоса и неуверенности. Семейная драма достигает апогея, когда каждое их решение и действие может привести к катастрофическим последствиям. Андрей и его мать находятся на грани разрушения своих отношений, и серия показывает зрителям, насколько сложно сохранить семейные узы в условиях кризиса.'
                },
                {
                    id: 8,
                    episode: '8',
                    season: '1',
                    src: 'https://drive.google.com/file/d/1XawL5DrYvT0W6eEJcpO-Q_BakdV71fY-/preview',
                    description_1: 'В 8 серии "Слово Пацана: Кровь на Асфальте", которую можно смотреть онлайн, зрители станут свидетелями развития исключительно напряженных и эмоциональных событий, подводящих итоги всему сезону. Этот финальный эпизод, полный драматических моментов и внутренних конфликтов, представляет собой кульминацию истории главных героев сериала.',
                    description_2: 'В центре сюжета - усилия главных героев по преодолению невероятных трудностей и испытаний, которые они переживают в своей борьбе за справедливость и честь. Их путь пронизан сложными моральными дилеммами и важными решениями, которые оказывают решающее влияние на их жизни и будущее.'
                }

            ]
        }
    }
}
</script>

<style>
.episodePage {
    background-image: linear-gradient(to bottom right, #2a0845, #6441A5);
    padding-top: 250px;
    height: 100%;
}

.episodePage__top-wrapper {
    border-bottom: 20px solid #fff;
}
.episodePage__top {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 0px 100px 250px;
    max-width: 750px;
}

.episodePage__top > h1 {
    color: #fff;
    font-size: 54px;
    font-weight: 900px;
    margin: 0;
    line-height: 70px;
}

h1 > strong {
    font-weight: 700;
}

.episodePage__middle {
    background-image: url(https://slovo-pacana.su/wp-content/uploads/2023/12/orig.jpg#107);
    background-position: center;
    background-size: cover;
}

.episodePage__middle--background {
    opacity: 1;
    background-image: linear-gradient(52deg, #0F0F0F 30%, rgba(67,66,66,0.63) 100%);
    transition: 0s;
}

.episodePage__middle__container {
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
}

.episodePage__middle__container--item {
    color: #fff;   
    padding: 100px 0 0px 250px;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
}

.episodePage__middle__container--item-header > h2 {
    font-size: 50px;
    margin: initial;
}

.episodePage__middle__container--item-header {
    margin-bottom: 35px;
}

.episodePage__middle__container--item-header > p{
    font-size: large;
}

.episodePage__middle__container--item-body {
    display: flex;
    width: 940px;
    height: 480px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 35px;
}

.video-player {
    border: none; /* Убрать рамку */
    width: 940px;
    height: 100%;
    border-radius: 10px;
}

.episodePage__middle__container--item-footer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 940px;
    padding-bottom: 50px;
}

.episodePage__middle__container--item-footer > h2 {
    font-size: 50px;
    margin: 0 0 30px 0;
}

.episodePage__middle__container--item-footer > p {
    font-size: large;
    margin: 0px 0 20px 0;
    line-height: 30px;
}
    
</style>