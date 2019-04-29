import {playMode} from '../common/js/config'


const state = {
    singer: {},
    playing: false, /* 播放或者停止 */
    fullScreen: false, /* 是否全屏 */
    playlist: [], /* 播放列表 */
    sequencelist: [], /* 随机列表 */
    mode: playMode.sequence,  /* 播放模式 */
    currentIndex: -1
}

export default state