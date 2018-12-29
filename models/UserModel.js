import User from "../mongooseModel/User"

export default {
    search(callback) {
        User.find().exec(callback)
    },
    getOne(id, callback) {
        User.update({ _id: id }, 
            { $inc: { view: 1 } } 
        ).exec(function(err,result){
            result.User.findUser(callback)
        })
    },
    findUser(id,callback){
        User.findOne({
            _id:id
        }).exec(callback)
    },
    create(data, callback) {
        var user = User(data)
        user.save(callback)
    },
    edit(data, callback) {
        User.findOne({
            _id: data.id
        }).exec(function(err, result) {
            result.name = data.name
            result.email = data.email
            result.password = data.password
            result.save(callback)
        })
    },
    addToFavourites(data, callback) {
        User.update(
            { _id: data.user },
            { $addToSet: { favourites: data.favourite } }
        ).exec(callback)
    },
    removeToFavourites(data, callback) {
        User.update(
            { _id: data.user },
            { $pull: { favourites: data.favourite } }
            // { multi: true }
        ).exec(callback)
    },
    delete(id, callback) {
        User.deleteOne({
            _id: id
        }).exec(callback)
    }
}
