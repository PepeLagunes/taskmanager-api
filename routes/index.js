
const router = require("express").Router();
const usersRoutes = require("./users");
const todoRoutes = require("./todos");

router.use("/users", usersRoutes); 
router.use("/list", todoRoutes);

router.use("/", function(request, response) {
    return response.send("Welcome TaskmanagerApi");
});
module.exports = router;
