<template>
  <div class="singer">
sss
  </div>
</template>

 <script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  export default {
    data () {
      return {
        singers: []
      }
    },
    created () {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        console.log(getSingerList(),11111111111111)
        getSingerList().then((res) => {
          alert(444)
          if(res.code == ERR_OK){
            this.singers = res.data.list
            console.log(this.singers)
            alert(11)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
