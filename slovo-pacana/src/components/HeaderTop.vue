<template>
      <div class="header__top-bar">    
        <div class="header__logo-wrapper">
          <router-link to="/"><img src="../assets/images/logo_@1x-optimized.png" alt="header logo-top"></router-link>
        </div>
        <div class="header__controls-wrapper">
          <router-link to="/">Главная</router-link>
          <router-link to="/actors">Актеры</router-link>
          <router-link to="/dates">Даты выхода</router-link>

          <router-link to="/seriesList">
            <button id="list">
              <a href="">Список серии</a>
            </button>
          </router-link> 
        </div>
      </div>
</template>

<script>

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
  padding: 0 20px;
  /* border-bottom: 1px solid black; */
  position: fixed;
  top: 0;
  width: 100%;
}

.header__logo-wrapper {
  margin: 20px 0 10px 0;
}
.header__controls-wrapper > a {
  display: inline-block;
  font-size: 17px;
  padding-right: 50px;
  text-decoration: none;
  color: rgba(245, 236, 236, 0.922);
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