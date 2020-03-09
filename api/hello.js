module.exports = (req, res) => {
    const axios = require('axios');
    axios.get('https://hn.algolia.com/api/v1/search?query=Stephen+Hawking')
    .then(function (results) {
        // handle success
        console.log(results);
        return res.json(results.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error, error.message);
    });
  
}
