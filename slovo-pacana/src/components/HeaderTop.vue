<template>
      <div class="header__top-bar">    
        <div class="header__logo-wrapper">
          <router-link to="/"><img src="../assets/images/logo_@1x-optimized.png" alt="header logo-top"></router-link>
        </div>
        <div class="header__controls-wrapper">
          <router-link to="/" 
            class="header__controls-wrapper__link"
          >
            <span :class="{ active: isActive('/') }">Главная</span>
          </router-link>
          <router-link to="/actors" 
            class="header__controls-wrapper__link"
          >
            <span :class="{ active: isActive('/actors') }">Актеры</span>
          </router-link>
          <router-link to="/dates" 
            class="header__controls-wrapper__link"
          >
            <span :class="{ active: isActive('/dates') }">Даты выхода</span>
          </router-link>

          <router-link to="/seriesList">
            <button id="list">
              <a href="">Список серии</a>
            </button>
          </router-link> 
        </div>
      </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data() {
    return {
      activeLink: '/'
    }
  },
  methods: {
    isActive(link) {
      return this.activeLink === link
    }
  }
}
</script>

<style>
.header {
  /* background-image: linear-gradient(to bottom right, #2a0845, #6441A5); */

  height: 100%;
}

.header__top-bar {
  background-image: linear-gradient(to bottom right, #2a0845, #4f2e8d);

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid black; */
  position: fixed;
  top: 0;
  width: 100%;
}

.header__logo-wrapper {
  margin: 20px 0 10px 0;
  padding-left: 50px;
}

.header__controls-wrapper {
  padding-right: 50px;
}

.header__controls-wrapper__link {
  display: inline-block;
  font-size: 17px;
  padding-right: 50px;
  text-decoration: none;
  color: rgba(245, 236, 236, 0.922);
  font-weight: 600;
}


.header__controls-wrapper__link:active,
.header__controls-wrapper__link.active {
  color: rgb(88, 88, 236);
}

button#list {
  background: rgb(211, 10, 134);
  border-radius: 25px;
}

button#list > a {
  display: inline-block;
  font-size: 17px;
  padding: 10px;
  text-decoration: none;
  color: rgba(245, 236, 236, 0.922);
}
</style>