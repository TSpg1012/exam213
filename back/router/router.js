let router =  require("express").Router()
const ProductController = require("../controller/controller")

router.get("/",ProductController.getAllProducts)
router.post("/",ProductController.getPostProducts)
router.delete("/:id",ProductController.getDeleteProducts)
router.get("/:id",ProductController.getByID)

module.exports = router