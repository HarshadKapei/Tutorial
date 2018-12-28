var schema = new Schema({
    name: { type: String }
})
export default mongoose.model("Genre", schema)
