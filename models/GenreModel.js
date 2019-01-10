export default {
    search:function(callback) {
        Genre.find().exec(callback)
    },
    getOne(id, callback) {
        Genre.findOne({
            _id: id
        }).exec(callback)
    },
    create(data, callback) {
        var genre = Genre(data)
        genre.save(callback)
    },
    edit(data, callback) {
        Genre.findOne({
            _id: data.id
        }).exec((err, result) => {
            result.name = data.name
            result.save(callback)
        })
    },
    delete(id, callback) {
        Genre.deleteOne({
            _id: id
        }).exec(callback)
    }
}
