const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const appName = process.env.APP_NAME

Arts_filesapp.use('/Peoples of the Philippines_ Tausug - National Commission for Culture and the ', express.static(path.join(__dirname, 'Peoples of the Philippines_ Tausug - National Commission for Culture and the Arts_files')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Peoples of the Philippines_ Tausug - National Commission for Culture and the Arts.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});

