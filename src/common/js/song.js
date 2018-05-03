export default class Song{
  constructor({id, mid, singer, name, album, duration, image, url}){
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}


export function createSong(musicData){
  console.log(musicData,1111)
  return new Song({
    id: musicData.songid,
    mid:musicData.songmid,
    singer:filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url:`http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    url:`http://dl.stream.qqmusic.qq.com/C4000026DBoG28Y4Hz.m4a?vkey=FFF8AFC4FDD1B719F60E01D23F25E4A5A8154DF03E0FF11AE5F2C26A2CD740C52E31BD6404DB06FA66FC57EDFACDC8001D5F29C8DB62AE89&guid=9411215375&uin=0&fromtag=66`
  })
}

export function filterSinger(singer){
  let ret = []
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
