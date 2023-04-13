const express = require('express');
const app = express();

const cors = require('cors');
const employee = require('./Routes/employee.js');

app.use(cors());
app.use(express.json());

app.use('/employee',employee);


const port = 3000;
app.listen(port,()=>{
    console.log(`listening in port ${port}!!!`);
})
