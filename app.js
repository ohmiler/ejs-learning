const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const user = {
    firstName: 'John',
    lastName: 'Doe',
    admin: true
}

const posts = [
    {title: 'Title 1', body: 'This is body 1'},
    {title: 'Title 2', body: 'This is body 2'},
    {title: 'Title 3', body: 'This is body 3'},
    {title: 'Title 4', body: 'This is body 4'},
]

app.get('/', (req, res) => {
    res.render('pages/index', {
        user: user,
        title: "Home Page"
    })
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"
    })
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})