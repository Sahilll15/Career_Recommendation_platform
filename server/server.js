const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const myDb = require('./db');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/categoy.routes');
const articleRoutes = require('./routes/articles.routes')
const interestRoutes = require('./routes/userinterests.routes')
const recmndRoutes = require('./routes/rcmnd.routes')
const quizRoutes = require('./routes/quiz.routes')
const productRoutes = require('./routes/Product.routes')

const resumeRoutes = require('./routes/resume.routes')
const groupRoutes = require('./routes/group.routes')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const PORT = process.env.PORT || 4001;

myDb.myDb();

app.use('/api/v1/auth/', userRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/articles', articleRoutes);


app.use('/api/v1/groups', groupRoutes)

app.use('/api/v1/interests', interestRoutes);
app.use('/api/v1/rcmnd', recmndRoutes);
app.use('/api/v1/resume', resumeRoutes);
app.use('/api/v1/quiz', quizRoutes);
app.use('/api/v1/products', productRoutes);



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
}
)

