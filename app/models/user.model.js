module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            //Use unique
            name: String,
            phone: String,
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