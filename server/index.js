const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const appPath = path.join(__dirname, '..', 'dist');
app.use(express.static(appPath));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log('server connected', PORT);
});