<template>
<div class="footer">
    <div class="footer-content">
      <h1 v-for="footer in footer" :key="footer">
        {{footer}}
      </h1>
    </div>
</div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      footer: ['Footer', 'Footer','Footer','Footer','Footer','Footer','Footer','Footer','Footer','Footer']
    }
  }
}
</script>

<style>
.footer {
  background: linear-gradient(to bottom right, #2a0845, #6441A5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  height: 7%;
  padding: 0 60px;
  color: #fff;  
}

.footer-content{
  display: flex;
}

.footer-content > h1 {
  margin: 30px 50px 30px 0;
}
</style>