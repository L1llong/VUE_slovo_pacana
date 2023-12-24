<template>
    <div class="header__bottom-bar">
      <div class="header__bottom-bar-logo-left">
        <img src="../assets/images/logotype_15x-1-optimized.webp" alt="header logo-bottom"><br>
        <router-link to="/seriesList">
          <button id="watch">Смотреть</button>
        </router-link>
        <router-link to="/actors">
          <button id="actors">Актеры</button>
        </router-link>
      </div>
      <div class="header__bottom-bar-logo-right">
        <img class="header__bottom-bar-logo-img" src="../assets/images/Без-имени-2-2-optimized.png" alt="">
      </div>
    </div>
</template>

<script>

</script>

<style>
.header__bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to bottom right, #2a0845, #6441A5);
  height: 100vh;
  margin-top: 50px;
}

.header__bottom-bar-logo-left {
  text-align: center;
  padding-left: 100px;
}

.header__bottom-bar-logo-img{
  max-width:90%;
}

button#watch {
  background: rgb(22, 194, 224);
  border-radius: 25px;
  font-size: 17px;
  color: rgba(245, 236, 236, 0.922);
  padding: 10px 20px 10px 20px;
  width: 200px;
  height: 50px;
  margin-right: 20px;
}

button#actors {
  background: rgba(224, 22, 22, 0.897);
  border-radius: 25px;
  font-size: 17px;
  color: rgba(245, 236, 236, 0.922);
  padding: 10px 20px 10px 20px;
  width: 200px;
  height: 50px;

}

.header__bottom-bar-logo-left > img {
  display: flex;
  
  margin-bottom: 20px;
}

</style>