module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            name: {type: String, unique: true},
            phone: {type: String, unique: true}
        }, {
            timestamps: true
        }
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("user", schema);
}