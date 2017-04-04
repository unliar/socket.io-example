<template>
  <div class="userinfo">
<x-header :left-options="{showBack: false}">个人信息</x-header>
        <group>
       <cell title='用户昵称：你爸爸'>
        <img slot="icon" width="20" style="display:block;margin-right:5px;"  src="../assets/my_line.png">
      </cell>
      </group>
  </div>
</template>
<script>
    import { Cell ,Group,XHeader } from 'vux'
  export default {
    name: 'userinfo',
    data(){
        return{
            msg:'用户信息'
        }
    },
    components: {
        Cell,
        Group,
        XHeader
    }
  }

</script>
<style>


</style>
