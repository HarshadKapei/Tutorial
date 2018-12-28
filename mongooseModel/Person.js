var schema = new Schema({
    name: { type: String},
    image: { type: String },
    dob: { type: Date }
})

export default mongoose.model("Person", schema)
