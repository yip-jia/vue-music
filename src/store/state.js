import {playMode} from '../common/js/config'
import {loadSearch, loadPlay} from '../common/js/cache'

const state = {
    singer: {},
    playing: false, /* 播放或者停止 */
    fullScreen: false, /* 是否全屏 */
    playlist: [], /* 播放列表 */
    sequenceList: [], /* 随机列表 */
    mode: playMode.sequence,  /* 播放模式 */
    currentIndex: -1,
    disc: {},
    topList:{},
    searchHistory:loadSearch(),
    playHistory: loadPlay()
}

export default state