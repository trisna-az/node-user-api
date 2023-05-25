module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            name: {type: String, unique: true},
            phone: {type: String, unique: true},
            status: {type: String, default: "new registered"}
        }, {
            timestamps: true
        }
    );
    
    schema.pre('save', function(next) {
        const self = this;
        mongoose.models["User"].findOne({$or:[{name : self.name}, {phone : self.phone}]},function(err, user) {
            if(err) {
                next(err);
            } else if(user) {
                self.status = "already registered";
                next();
            } else {
                next();
            }
        });
    });

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("user", schema);
}