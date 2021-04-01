const axios = require('axios').default;

const serverURL = 'https://sandbox.iexapis.com/stable';

exports.getScockPrice = (symbol) => {

    return axios(serverURL + '/stock/' + symbol + '/price' + '?token=' + process.env.STOCKS_TOKEN)
        .then(response => response.data)
        .catch(function (error) {
            if (error.response) {

                if (error.response.status === 404)
                throw {
                    message: error.response.data,
                    title: 'Stock not found'
                }
            }
            throw {
                message: error.response.data,
                title: 'Stock API error'
            }

        });

}

