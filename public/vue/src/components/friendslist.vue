<template>
  <div class="friendslist">
       <x-header :left-options="{showBack: false}">朋友列表</x-header>
     <group>
      <cell title="我是你爸爸" is-link></cell>
     </group>
  </div>
</template>
<script>
    import { Cell ,Group,XHeader } from 'vux'
  export default {
    name: 'friendslist',
    data(){
        return{
            msg:'朋友列表'
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
