module.exports = app => {
    const user = require("../controllers/user.controller")
    const r = require("express").Router();

    r.get("/", user.findall);
    r.get("/:id", user.show);
    r.post("/", user.create);
    r.put("/:id", user.update);
    r.delete("/:id", user.delete);
    
    
    app.use("/user", r);
}

