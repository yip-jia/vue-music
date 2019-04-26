
const axios = require('axios');
const iconv = require('iconv-lite')
const bodyParser = require('body-parser')


module.exports = {
    devServer: {
        before(app) {
            app.get('/api/getDiscList', (req, res) => {
                var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com',
                        host: 'c.y.qq.com',
                    },
                    params: req.query,

                }).then((response) => {
                     res.json(response.data)
                }).catch((e) => {
                      console.info(e)
                })
            })


      
            app.post('/api/getPurlUrl', bodyParser.json(), (req, res) => {
                const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
                axios.post(url, req.body, {
                  headers: {
                    referer: 'https://y.qq.com/',
                    origin: 'https://y.qq.com',
                    'Content-type': 'application/x-www-form-urlencoded'
                  }
                }).then((response) => {
                  res.json(response.data)
                }).catch((e) => {
                  console.log(e)
                })
              })




        }
    }
}

