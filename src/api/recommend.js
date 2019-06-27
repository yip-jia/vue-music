import jsonp  from '../common/js/jsonp'
import {commonParam, options} from './config'
import axios from 'axios';
const debug = process.env.NODE_ENV !== 'production'
export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParam, {
        platforn: 'h5',
        uin: 0,
        needNewCode: 1
    })
    
    return jsonp(url, data, options)
}


export function getDiscList() {
    const url = debug ? '/api/getDiscList' : '//47.92.243.233:8088/api/getDiscList'
    const data = Object.assign({}, commonParam, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 19,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json',

    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}


export function getSongList (disstid) { 
    const url = debug ? '/api/getCdInfo' : '//47.92.243.233:8088/api/getCdInfo'
    const data = Object.assign({}, commonParam, {
      disstid,
      type: 1,
      json: 1,
      utf8: 1,
      onlysong: 0,
      platform: 'yqq',
      hostUin: 0,
      needNewCode: 0
    })
  
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }