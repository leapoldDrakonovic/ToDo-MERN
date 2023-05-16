const express = require ('express');
const mongoose = require ('mongoose')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json({extended:true}))
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/todo', require('./routes/todo.route'))

async function start () {
    try {
        await mongoose.connect('mongodb+srv://fishmastor4:000000999Aaa@cluster0.f8etd2p.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: true
        })

        app.listen(PORT, ()=> {
            console.log(`server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()