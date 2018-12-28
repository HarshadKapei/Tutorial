var schema = new Schema({
    name: { type: String },
    email: { type: String, unique: true, validate: validators.isEmail() },
    password: { type: String },
    resetToken: String,
    resetTokenExpiry: { type: Date },
    accessToken: { type: String },
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
    accessLevel: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
})
export default mongoose.model("User", schema)
