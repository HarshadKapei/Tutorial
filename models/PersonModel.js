import Person from "../mongooseModel/Person"

export default {
    search: function(callback) {
        Person.find().exec(callback)
    },
    getOne:function(id, callback) {
        Person.findOne({
            _id: id
        }).exec(callback)
    },
    create:function(data, callback) {
        var person = Person(data)
        person.save(callback)
    },
    edit:function(data, callback) {
        Person.findOne({
            _id: data.id
        }).exec(function(err, result) {
            result.name = data.name,
            result.image = data.image,
            result.dob = data.dob,
            result.save(callback)
        })
    },
    delete:function(id, callback) {
        Person.deleteOne({
            _id:id
        }).exec(callback)
    }
}
