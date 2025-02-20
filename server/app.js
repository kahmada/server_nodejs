const express = require('express');
const path = require('path');

const app = express();
app.use('/website', express.static(path.join(__dirname , 'public')));
app.use((req, res)=> {

    res.status(404);
    res.send('File not found!');
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
