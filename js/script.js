/**
 * ラジオ局一覧
 *
 * @type {string[]}
 */
const channelList = [
  'http://37.220.36.53:7904/;?type=http&amp;nocache=18236',
  'http://ststmks.s3.amazonaws.com/izakayasound/media/kitanohomare.mp3',
  'http://uk2.internet-radio.com:8024//stream?type=http&nocache=541',
  'http://uk1.internet-radio.com:8267/stream?type=http&nocache=541',
  'http://media-ice.musicradio.com/HeartSussexMP3',
  'http://64.71.79.181:8024/;',
  'http://bluford.torontocast.com:8504/;',
  'http://musicbird.leanstream.co/JCB076-MP3?args=tunein_02',
  'http://bigrradio.cdnstream1.com/5174_128',
  'http://hyades.shoutca.st:8043/stream',
  'http://itori.animenfo.com:443/;',
  'http://144.217.64.13:7100/;?type=http&amp;nocache=18238',
  'http://184.75.223.178:8102/;?type=http&amp;nocache=18236',
  'http://51.15.76.3:80/;?type=http&amp;nocache=18237',
  'http://50.7.130.2:13014/;?type=http&amp;nocache=18239',
  'http://94.23.67.172:8010/;?type=http&amp;nocache=18240',
  'http://212.3.234.219:8080/wr-test-128.mp3',
  'http://51.15.76.3:80/;?type=http&amp;nocache=18237',
  'http://ice3.somafm.com/deepspaceone-128-mp3',
  'https://streamer.radio.co/s2c3cc784b/listen',
  'http://50.7.130.2:13014/;?type=http&amp;nocache=18239',
  'http://94.23.67.172:8010/;?type=http&amp;nocache=18240',
  'http://212.18.63.135:9034/;?type=http&amp;nocache=18242',
  'http://158.69.38.195:20278/;?type=http&amp;nocache=18243',
  'http://149.56.74.125:9628/;?type=http&amp;nocache=18244',
  'http://192.240.102.198:14150/;?type=http&amp;nocache=18245',
  'http://5.178.87.156:2068/;?type=http&amp;nocache=18247',
  'http://192.99.38.174:9342/;?type=http&amp;nocache=18249',
  'http://87.229.24.114:35110/;?type=http&amp;nocache=18250',
  'http://46.105.171.217:8024/;?type=http&amp;nocache=18251',
  'http://78.31.65.20:8080/;?type=http&amp;nocache=18252',
  'http://50.117.1.60:80/;?type=http&amp;nocache=18255',
  'http://151.80.97.38:8224/;?type=http&amp;nocache=18256',
  'http://167.114.251.212:80/;?type=http&amp;nocache=18258',
  'http://94.23.66.155:8080/;?type=http&amp;nocache=18259',
  'http://178.162.208.117:8418/;?type=http&amp;nocache=18260',
  'http://149.56.74.125:9508/;?type=http&amp;nocache=18262',
  'http://82.199.155.117:8000/;?type=http&amp;nocache=18263',
  'http://109.123.70.138:8136/;?type=http&amp;nocache=18264',
  'http://94.75.227.133:7005/;?type=http&amp;nocache=18265',
  'http://192.151.153.234:9968/;?type=http&amp;nocache=18268',
  'http://185.66.249.48:9600/;?type=http&amp;nocache=18269',
  'http://50.97.94.44:8086/;?type=http&amp;nocache=18271',
  'http://149.56.147.197:8231/;?type=http&amp;nocache=18273',
  'http://78.46.73.91:9043/;?type=http&amp;nocache=18274',
  'https://cdn-beta.tunein.com/assets/media/blank.mp3',
  'http://85.10.198.55:8000/;?type=http&amp;nocache=18276',
  'http://37.220.36.53:7904/;?type=http&amp;nocache=18277',
  'http://51.15.76.3:80/;?type=http&amp;nocache=18278',
  'https://vapor.fm:8000/stream'
]

/**
 * urlのラジオを再生
 *
 * @param url
 * @return void
 */
function play (url) {
  const player = document.getElementById('player')

  player.innerHTML = getSource(url)
  player.load()

  player.play()
}

/**
 * DOM読み込み後にchannelListからラジオボタンを作成
 */
window.onload = function () {
  const radio = document.getElementById('radio')

  radio.innerHTML = channelList.reduce((result, url, i) => {
    result.push(getRadio(url))

    if (isEndOfRow(i)) {
      result.push(rowEnd)
      if (!isLast(i)) result.push(rowStart)
    }

    return result
  }, [rowStart]).join('\n')
}

/**
 * 行の開始タグ
 *
 * @type {string}
 */
const rowStart = `<div class="row">`

/**
 * 行の終了タグ
 *
 * @type {string}
 */
const rowEnd = `</div>`

/**
 * URLからラジオボタンのタグを取得
 *
 * @param url
 * @returns {string}
 */
function getRadio (url) {
  return `<input type="radio" name="checkit" onclick="play('${url}')" class="radiobox-tremolo">`
}

/**
 * URLからsourceタグを取得
 *
 * @param url
 * @returns {string}
 */
function getSource (url) {
  return `<source id="source" src="${url}" type="audio/mpeg">`
}

/**
 * インデクスから行の終了位置かどうかを判定する
 *
 * @param i
 * @returns {boolean}
 */
function isEndOfRow (i) {
  return !((i + 1) % 10) || isLast(i)
}

/**
 * インデクスから最後のアイテムかどうかを判定する
 *
 * @param i
 * @returns {boolean}
 */
function isLast (i) {
  return i + 1 === channelList.length
}
