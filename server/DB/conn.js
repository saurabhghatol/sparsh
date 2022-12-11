const { config } = require('dotenv');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB = process.env.DATABASE;
console.log(DB);

mongoose.set('strictQuery', true);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log('Error in connection' + err));

