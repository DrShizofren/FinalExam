
const express = require('express')
const app = express()
const port = 3030
var cors = require('cors')
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json())

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String
});
const Product = mongoose.model('Product', productSchema);

app.get('/', async (req, res) => {
    const data = await Product.find()
    res.send(data)
})

app.post('/', async (req, res) => {
    const data = await Product.create(req.body)
    res.send('Got a POST request')
})

app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const data = await Product.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    mongoose.connect("mongodb+srv://aslanfcbp109:1pq0dh77990erP@cluster0.8atjk.mongodb.net/").then(() => console.log("db connected"))
    console.log(`Example app listening on port ${port}`)
})