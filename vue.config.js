
const Axios = require('axios');
const iconv = require('iconv-lite')


module.exports = {
    devServer: {
        before(app) {
            app.get('/api/getDiscList', (req, res) => {
                var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
                Axios.get(url, {
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
        }
    }
}

