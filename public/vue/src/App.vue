<template>
  <div id="app">
    <router-view></router-view>
    <div class="navlink">
      <div>
        <router-link to="/" tag='div'>
        <div><span><img src="./assets/information.png" alt=""></span></div>
        <span>聊天</span>
        </router-link>
      </div>
      <div>
        <router-link to="/friendslist" tag='div'>
        <div><span><img src="./assets/heart.png" alt=""></span></div>
        <span>朋友</span>
        </router-link>
      </div>
      <div>
        <router-link to='/userinfo' tag='div'>
        <div><span><img src="./assets/my_line.png" alt=""></span></div>
        <span>我</span>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
  
 
 .navlink{
   display: flex;
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 500;
   background-color: white;
 } 
 .navlink div{
   flex-grow: 1;
   text-align: center;
   margin-top: 5px
  
 }
.navlink img{
  width: 27px;
  height: 27px;
}
</style>
