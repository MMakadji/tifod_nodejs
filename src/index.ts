import express from 'express';
const app = express();
const db = require('./queries');

const port = 3000;
app.get('/aaa', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
// @ts-ignore
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

app.use(express.json());
app.use(express.urlencoded());
db.pool;
 app.get('/',db.getUsersQuery);
 app.get('/:id',db.getUserQuery);
 app.post("/",db.addUserQuery);
app.put('/update',db.updateUserQuery);
