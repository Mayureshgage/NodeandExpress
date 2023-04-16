const express = require('express');
const app = express();
let courses = [
    {id : 1, name: 'science'},
    {id : 2, name: 'history'},
    {id : 3, name: 'geography'}
]

app.get('/',(req,res) => {
    res.send('Hello world');
});

app.get('/api/courses',(req,res) => {
    res.send([1, 2, 3]);
});

//single param
app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('this course not available');
    } else {
        res.status(200).send(course);
    }
});

app.get('/api/posts/:year/:month',(req,res) => {

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}.....`));

