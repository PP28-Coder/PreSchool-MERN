var axios = require('axios');
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3099
var fres = []
app.use(cors())
app.use(express.json()); 

// Add middleware to parse JSON bodies
app.use(express.json());

app.post('/insert', (request,res) => {
  // This is the body of the HTTP request
  const requestData = request.body;
  console.log(requestData)
  var data_insert_one = {
    "collection": "contactUs",
    "database": "fsd",
    "dataSource": "indepthbdt",
    "document": requestData
  };

  // these are the request options and headers to the POST request
  // data passes the above defined
  var config_insert_one = {
    method: 'post',
    // here insertOne is called in mongo
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-qpyji/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'lVm9zg8tAPZoo1Coa5BVpkJM7NBuhA6EV3io59CIlb4BIvzWVAWEr0ReLQXfogw5',
    },
    data: data_insert_one
  };

  axios(config_insert_one)
    .then((response) => {
      console.log(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })

    res.json({ message: 'Data received successfully' });
})

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`)
})

