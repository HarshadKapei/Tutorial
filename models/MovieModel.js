import Movie from "../mongooseModel/Movie"

export default {
    search(callback) {
        Movie.find().exec(callback)
    },
    getOne(id, callback) {
        Movie.findOne({
            _id: id
        }).exec(callback)
    },
    create(data, callback) {
        var movie = Movie(data)
        movie.save(callback)
    },
    edit(data, callback) {
        Movie.findOne({
            _id: data.id

            
        }).exec(function(err, result) {
            result.name = data.name
            result.email = data.email
            result.password = data.password
            result.save(callback)
        })
    },
    delete(id, callback) {
        Movie.deleteOne({
            _id: id
        }).exec(callback)
    }
}
