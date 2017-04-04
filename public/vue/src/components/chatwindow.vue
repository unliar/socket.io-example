<template>
  <div class="chatwindow">
    <div style="position: fixed;top: 0;width: 100%;z-index: 800"><x-header :left-options="{showBack: true}" >你正在与{{msg}}会话</x-header></div>  
    <div class="list">
    <div v-for=' n in 100'>
       <cell :title="n" is-link></cell>
    </div>
    </div>
    
  </div>
</template>
<script>
    import { XHeader,Cell } from 'vux'
  export default {
    name: 'chatwindow',
    data () {
        return {
            msg:'爸爸'
        }
    },
    components: {
        XHeader,
        Cell
    }
  }

</script>
<style>
.list{
    margin-bottom: 60px;
    margin-top: 60px
}

</style>
