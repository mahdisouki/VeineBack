const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const doctorRoutes = require('./routes/DoctorRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 

require("./db/cnx")

app.use(express.json());
app.use(bodyParser.json())
// console.log(JSON.stringify(swaggerSpec, null, 2));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//routes
app.use('/api', doctorRoutes); 















app.listen(5000 , ()=>console.log('server is running!!!'))