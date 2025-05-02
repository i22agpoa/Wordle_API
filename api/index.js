const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('TU_MONGO_URI', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.listen(3001, () => console.log('API corriendo en puerto 3001'));