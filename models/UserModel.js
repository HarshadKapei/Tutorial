import User from "../mongooseModel/User"
import { __values } from "tslib"

export default {
    search(callback) {
        User.find().exec(callback)
    },
    getOne(id, callback) {
        User.findOne({
            _id: id
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
        User.findOne({
            _id: data.user
        }).exec(function(err, result) {
            result.favourites.push(data.favourite)
            result.save(callback)
        })
    },
    removeToFavourites(data, callback) {
        User.findOne({
            _id: data.user
        }).exec(function(err, result) {
            // for (var i = 0; i < favourites.length - 1; i++) {
            //     if (result.favourites === data.favourite) {
            //         result.favourites = delete favourites[i]
            //     }
            // }

            _.remove(result.favourites, function(n) {
                return n == data.favourite
            })
            console.log("##################" + result)
            result.save(callback)
        })
    },
    delete(id, callback) {
        User.deleteOne({
            _id: id
        }).exec(callback)
    }
}
