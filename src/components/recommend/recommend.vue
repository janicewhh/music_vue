<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60"/>
              </div>
              <div class="text">
                <h2 class="name">{{item.creator.name}}</h2>
                <p class="desc">{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading :title="title1"></loading>
      </div>
    </scroll>
  </div>
</template>
 <script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'


  export default {
    data () {
      return {
        recommends: [],
        discList: [],
        title1: '我正在加载中'
      }
    },
    mounted(){
      this._getRecommend()
      setTimeout(()=>{
        this._getDiscList()
      },2000)

    },
    components: {
      Slider,
      Scroll,
      Loading
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if(res.code == ERR_OK){
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList () {
        this.dataList = {"code":0,"subcode":0,"message":"","default":0,"data":{"uin":851053892,"categoryId":10000000,"sortId":5,"sum":5878,"sin":0,"ein":29,"list":[{"dissid":"3717256718","createtime":"2018-03-13","commit_time":"2018-03-13","dissname":"恋爱粘合剂：高浓度的甜蜜情愫","imgurl":"http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyJA9TTehNCBOcGAExx6e7FGDJFEkrmM7FA/600?n=1","introduction":"","listennum":65224,"score":0.0,"version":0,"creator":{"type":0,"qq":452775188,"encrypt_uin":"7e4A7iSkoKcF","name":"还不是因为你长得不好看","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3288081334","createtime":"2017-12-04","commit_time":"2017-12-04","dissname":"禁欲系！腐国古典英剧魅力指南","imgurl":"http://p.qpic.cn/music_cover/0iachsNZmG84pY2Pf8Y8vE0HiacKGPYTKjGZMSDgrIfwKVsdIxJfM6Og/600?n=1","introduction":"","listennum":86627,"score":0.0,"version":0,"creator":{"type":0,"qq":3048283468,"encrypt_uin":"oinPNe-FoivsNn**","name":"爱布鲁斯的南方人","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1143207333","createtime":"2018-02-10","commit_time":"2018-02-10","dissname":"治愈：樱花漫作他年忆，不觉已释怀","imgurl":"http://p.qpic.cn/music_cover/Ay2w92PeiaO57pZWMwecv6aDUT6M4oPslMrB0FyfCtZwC2972fHbicPQ/600?n=1","introduction":"","listennum":273418,"score":0.0,"version":0,"creator":{"type":0,"qq":1009772031,"encrypt_uin":"oKnzNKSlowniov**","name":"L岺","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3780173751","createtime":"2018-03-15","commit_time":"2018-03-15","dissname":"韩国地下嘻哈人气厂牌AOMG","imgurl":"http://p.qpic.cn/music_cover/icmord6PBGdDicuWKPmh9IGOM5B4uUjEbLp3sDy4ygEG7CUYQBTbHf0g/600?n=1","introduction":"","listennum":15894,"score":0.0,"version":0,"creator":{"type":0,"qq":314541266,"encrypt_uin":"oi6P7Kv5owCs","name":"褐","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3609042292","createtime":"2017-12-28","commit_time":"2017-12-28","dissname":"『星空电音』漫步星空下，抖腿星宿间。","imgurl":"http://p.qpic.cn/music_cover/DYAIOgq83epmFYdfqYEs6pEdcw6PhVgbyVt3KeuTDxw7YQ01ncpMbw/600?n=1","introduction":"","listennum":194939,"score":0.0,"version":0,"creator":{"type":0,"qq":78860832,"encrypt_uin":"7icF7wnFoi-*","name":"HOPE-T","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2984261902","createtime":"2017-12-08","commit_time":"2017-12-08","dissname":"情调收集：宇航员必备爵士乐","imgurl":"http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdqVl04Qba6kDWockuaE6yib5ry7ia9dYx8Ow/600?n=1","introduction":"","listennum":83363,"score":0.0,"version":0,"creator":{"type":2,"qq":348361207,"encrypt_uin":"oivFoiC5ownl","name":"风少","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3778229241","createtime":"2018-03-16","commit_time":"2018-03-16","dissname":"二月热门原创：岁月安好，你是最美的风景","imgurl":"http://p.qpic.cn/music_cover/Kl5Iia768uuzOU0OedgJe04yokFhW24HsXUbhtFSRztXKC4q8ic2WUlQ/600?n=1","introduction":"","listennum":110964,"score":0.0,"version":0,"creator":{"type":0,"qq":2661758453,"encrypt_uin":"owCsoKSkNevkoz**","name":"吃鸡不带挂","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3648908465","createtime":"2018-01-12","commit_time":"2018-01-12","dissname":"歌手第二季歌曲合集","imgurl":"http://p.qpic.cn/music_cover/JBDCVgqXWXaYUvcsElqcicSclCsLGy3pSUBt28EkurcPYExW0xibPTDg/600?n=1","introduction":"","listennum":2590592,"score":0.0,"version":0,"creator":{"type":2,"qq":3414308253,"encrypt_uin":"oiv57eozNe-koz**","name":"鹅猴综艺狸","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"1789765848","createtime":"2018-01-17","commit_time":"2018-01-17","dissname":"孤独后摇：映射城市苦旅人的心境","imgurl":"http://p.qpic.cn/music_cover/A68o1S3cCg2seVsQVvbZBiaW5UAAzrDibgl9ibpLrHiagsjMF4EqtAia9NA/600?n=1","introduction":"","listennum":16690,"score":0.0,"version":0,"creator":{"type":0,"qq":3083067593,"encrypt_uin":"oinFoins7i4qoz**","name":"冬天吃了秋天","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3779376721","createtime":"2018-03-15","commit_time":"2018-03-15","dissname":"抒情华语，专治周末起床气","imgurl":"http://p.qpic.cn/music_cover/R8unPZMA4Vp5v2Ms96bstxlxdJzziaBoA12bnm6dpHCv2CWDGeGP0ibg/600?n=1","introduction":"","listennum":43065,"score":0.0,"version":0,"creator":{"type":0,"qq":945187827,"encrypt_uin":"NKvkoKclNe-l","name":"念安娜","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1190459513","createtime":"2018-01-10","commit_time":"2018-01-10","dissname":"后摇与鱼｜群聊窥屏潜水必备","imgurl":"http://p.qpic.cn/music_cover/lricrZ3ca62ybvZbWYjtYa9d3Biab7MTiaJYJtuVMNZu84ysP2Dm23mUQ/600?n=1","introduction":"","listennum":364329,"score":0.0,"version":0,"creator":{"type":2,"qq":1967728311,"encrypt_uin":"oKEs7iSANeo5ov**","name":"冷门单曲酱","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3610185837","createtime":"2017-12-21","commit_time":"2017-12-21","dissname":"洗脑港铁广告曲：你今日听咗未？","imgurl":"http://p.qpic.cn/music_cover/nDEZhEolBibyCLoia8Tssu00ULSHke0rCic9omBKDRYUROfTibZnIBCibuw/600?n=1","introduction":"","listennum":457050,"score":0.0,"version":0,"creator":{"type":0,"qq":3042217590,"encrypt_uin":"oinPow-57i4qon**","name":"不稀饭棉花糖の萝莉","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3769643966","createtime":"2018-03-10","commit_time":"2018-03-10","dissname":"Deep House | 性感与海浪的深邃交织","imgurl":"http://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKsvKGskAwXmxyQ6znIKzOEwMNmqO81rKohg/600?n=1","introduction":"","listennum":346142,"score":0.0,"version":0,"creator":{"type":2,"qq":1400010678,"encrypt_uin":"oKvzoen5oeClNn**","name":"玫瑰王","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3777191100","createtime":"2018-03-12","commit_time":"2018-03-12","dissname":"雨过昔年：采茶时节的小城谣","imgurl":"http://p.qpic.cn/music_cover/e5SnsVktAB0wJZdaicbicYgqaO08Bgib1dWicSkJkydqczNOUChNHjXHZw/600?n=1","introduction":"","listennum":363746,"score":0.0,"version":0,"creator":{"type":7,"qq":280474525,"encrypt_uin":"owcz7eSP7K-k","name":"辰小弦","isVip":7,"avatarUrl":"","followflag":0}},{"dissid":"3762530786","createtime":"2018-03-14","commit_time":"2018-03-14","dissname":"2018抖音热门欧美BGM精选","imgurl":"http://p.qpic.cn/music_cover/CIY2ghIaVQwxemsbBuCNDYusO6NYv1ahcj72nQhCqAryvTdqpWfLTQ/600?n=1","introduction":"","listennum":454166,"score":0.0,"version":0,"creator":{"type":0,"qq":965669402,"encrypt_uin":"NKCk7wCq7enA","name":"雅南","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3667840958","createtime":"2018-01-19","commit_time":"2018-01-19","dissname":"QQ炫舞十年之约，等你上线！","imgurl":"http://p.qpic.cn/music_cover/PicvI2ibuAucDnMibTiceeblmxU6zl0HpRur7IKWdJ9pJaqNBA7JzYxLHA/600?n=1","introduction":"","listennum":3225317,"score":0.0,"version":0,"creator":{"type":2,"qq":1541142556,"encrypt_uin":"oK4PoK6Pow4k7c**","name":"听风.","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3769713415","createtime":"2018-03-10","commit_time":"2018-03-10","dissname":"【科普向】史上最贵的音乐录影带","imgurl":"http://p.qpic.cn/music_cover/tmk5HNSnJvJhsOvcIpWulWdzRXicVoxE9Tibx9uNJAQgE6J8wib6GLBLw/600?n=1","introduction":"","listennum":140776,"score":0.0,"version":0,"creator":{"type":0,"qq":2958598324,"encrypt_uin":"owEkNe4qNeoA7n**","name":"biG橘子","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3650844670","createtime":"2018-03-14","commit_time":"2018-03-14","dissname":"「氤氲浴室」泡澡听的萨克斯纯音","imgurl":"http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyJA9TTehNCBOiaUHHGzPlmicRrbm7mVJwiaqg/600?n=1","introduction":"","listennum":823097,"score":0.0,"version":0,"creator":{"type":0,"qq":452775188,"encrypt_uin":"7e4A7iSkoKcF","name":"还不是因为你长得不好看","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3778307996","createtime":"2018-03-13","commit_time":"2018-03-13","dissname":"安静新民谣：上班族的减压良药","imgurl":"http://p.qpic.cn/music_cover/T0qpeJj1MpLkoxkZMuVVx6efRz1bfKh3Q5IOaKOAttWWRh7X5whrgw/600?n=1","introduction":"","listennum":398284,"score":0.0,"version":0,"creator":{"type":2,"qq":810360741,"encrypt_uin":"Ne6zoiCz7iv5","name":"被嫌弃的唐唐的一生","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3735632992","createtime":"2018-03-13","commit_time":"2018-03-13","dissname":"弘大LiveHouse：K-Indie聚集地","imgurl":"http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3Dn6T61ST4eLyicBT5NIrreSLYYYfLNjSp42Q/600?n=1","introduction":"","listennum":116063,"score":0.0,"version":0,"creator":{"type":2,"qq":631851806,"encrypt_uin":"7wo5Ne45Nens","name":"虛榮少女","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3132600776","createtime":"2018-03-14","commit_time":"2018-03-14","dissname":"国风哼唱 • 千嶂里，落日孤城闭","imgurl":"http://p.qpic.cn/music_cover/1HFn1Rm4ztLiaPmN5cz0jG4unxTXxnQLB6JlsfgjGvRLjn8lRGQNo4A/600?n=1","introduction":"","listennum":480295,"score":0.0,"version":0,"creator":{"type":2,"qq":1776206658,"encrypt_uin":"oKSl7w-z7wCkNn**","name":"陈小苏","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3635705848","createtime":"2018-01-08","commit_time":"2018-01-08","dissname":"轻快电子：网络写手深夜码字加速器","imgurl":"http://p.qpic.cn/music_cover/aaxX4Babic4VicBPicJOwr5xiarATJiaHYTGlfoejkvx88Ya8dvZ3S2kYKQ/600?n=1","introduction":"","listennum":627205,"score":0.0,"version":0,"creator":{"type":2,"qq":1600189472,"encrypt_uin":"oKCzoe6FNKvloc**","name":"默笙","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3687088783","createtime":"2018-02-08","commit_time":"2018-02-08","dissname":"苦涩回忆：歌词应景，连想念都很无力","imgurl":"http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyIJibhCD2qU4ugiaA5BpuD1nnnliaKwSibQj8A/600?n=1","introduction":"","listennum":219918,"score":0.0,"version":0,"creator":{"type":0,"qq":452775188,"encrypt_uin":"7e4A7iSkoKcF","name":"还不是因为你长得不好看","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3777030376","createtime":"2018-03-12","commit_time":"2018-03-12","dissname":"万能青年旅店的私藏歌单推荐","imgurl":"http://p.qpic.cn/music_cover/4icZ4RVXrH8HBd4ibnQOuaD0lH0R8s0CrEmOxP79TDCFibNbeber3Mvxg/600?n=1","introduction":"","listennum":27684,"score":0.0,"version":0,"creator":{"type":2,"qq":1795529580,"encrypt_uin":"oKSq7K4ANK4Fon**","name":"滚圈少年","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3776786744","createtime":"2018-03-12","commit_time":"2018-03-12","dissname":"无止境冒险！《妖精的尾巴》原声集","imgurl":"http://p.qpic.cn/music_cover/zWAjtOcnpLTJ07iacJUgay5CibJ5z9w8b10oPrOy8BroXrPqI0fAdJVw/600?n=1","introduction":"","listennum":46969,"score":0.0,"version":0,"creator":{"type":2,"qq":1250888122,"encrypt_uin":"oK-koecFNe6Aoc**","name":"Awakening","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"1721510647","createtime":"2018-03-12","commit_time":"2018-03-12","dissname":"HEXAGON：2015-2018作品全收录","imgurl":"http://p.qpic.cn/music_cover/PiajxSqBRaEJPtLXYsvILNVnzofiaMhNDKmmmRgCe9eekq9tz6UqRDNg/600?n=1","introduction":"","listennum":45904,"score":0.0,"version":0,"creator":{"type":0,"qq":4960643,"encrypt_uin":"7eEsoeCPoz**","name":"black","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3777356423","createtime":"2018-03-13","commit_time":"2018-03-13","dissname":"阅读音乐：宅家读书听的清新小调","imgurl":"http://p.qpic.cn/music_cover/PJrGzQib7nia43112ibFrSia1DK8S0ibnDiaEvw0ebPbJKmKOPAichwQibsJNg/600?n=1","introduction":"","listennum":210648,"score":0.0,"version":0,"creator":{"type":0,"qq":1545023735,"encrypt_uin":"oK4P7KnAoiSi7v**","name":"Monster〃","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1177169452","createtime":"2017-08-29","commit_time":"2017-08-29","dissname":"回忆录 | 重温那些已解散的韩国团体","imgurl":"http://p.qpic.cn/music_cover/L2n8QvE0WqdQ0BsaqcJZzIPaYMbewwQYMeiapVg0h3QZYNHJViadL1kA/600?n=1","introduction":"","listennum":238863,"score":0.0,"version":0,"creator":{"type":2,"qq":2742568821,"encrypt_uin":"owSPow4sNecAov**","name":"Zona","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3713113716","createtime":"2018-02-07","commit_time":"2018-02-07","dissname":"听红了脸！和女友打情骂俏唱不出的歌","imgurl":"http://p.qpic.cn/music_cover/8HhavvWNIicpyjlv0UnT5TRCIic5HVgq8IBIMDjI0Tve973ibEFKzQghg/600?n=1","introduction":"","listennum":466207,"score":0.0,"version":0,"creator":{"type":3,"qq":478695379,"encrypt_uin":"7eSF7wEkoiSq","name":"DJ顾念晨","isVip":3,"avatarUrl":"","followflag":0}},{"dissid":"845714605","createtime":"2016-12-14","commit_time":"2016-12-14","dissname":"说走就走·旅行必备独立摇滚","imgurl":"http://p.qpic.cn/music_cover/PW5V5hCPicL8uJB8k0HAnwwEG2T7wEWwMQsNN3srzrWl9WTbIliaBic0w/600?n=1","introduction":"","listennum":225476,"score":0.0,"version":0,"creator":{"type":0,"qq":2783670800,"encrypt_uin":"owSFoiCloeczon**","name":"听听看","isVip":0,"avatarUrl":"","followflag":0}}]}}
        this.discList = this.dataList.data.list
      },
      loadImage(){
        if(!this.loadCheck){
          this.$refs.scroll.refresh()
          this.loadCheck = true
        }

      }
    }
  }
</script>
<style scoped lang="stylus" rel="styleshheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        // padding-top: 40%
        // overflow: hidden
        // .slider-content
        //   position: absolute
        //   top: 0
        //   left: 0
        //   width: 100%
        //   height: 100%
      .recommend-list
        margin-top 170px
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>

