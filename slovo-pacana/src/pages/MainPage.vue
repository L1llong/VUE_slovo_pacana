<template>
<HeaderBottom />
<AboutComponent />
<AchievementsComponent />
</template>

<script>
import HeaderBottom from '../components/HeaderBottom.vue'
import AboutComponent from '../components/AboutComponent.vue'
import AchievementsComponent from '../components/AchievementsComponent.vue'
export default {
  name: 'MainPage',
  components: {
    HeaderBottom,
    AboutComponent,
    AchievementsComponent,
  }
}
</script>