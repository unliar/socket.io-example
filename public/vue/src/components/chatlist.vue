<template>
<div class="chatlist">
  <x-header :left-options="{showBack: false}">消息列表</x-header>
</div>
</template>

<script>
  import { XHeader } from 'vux'
export default {
  name: 'chatlist',
  data () {
    return {
      msg: '聊天记录列表'
    }
  },
  components: {
    XHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
