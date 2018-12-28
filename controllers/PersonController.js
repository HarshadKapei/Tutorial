import PersonModel from "../models/PersonModel"

var router = Router()
router.get("/search", (req, res) => {
    PersonModel.search(res.callback)
})
router.get("/:id", (req, res) => {
    PersonModel.getOne(req.params.id, res.callback)
})
router.post("/create", (req, res) => {
    PersonModel.create(req.body, res.callback)
})
router.put("/edit/:id", (req, res) => {
// var id = req.params.id
    PersonModel.edit( req.body, res.callback)
})
router.delete("/delete/:id", (req, res) => {
    PersonModel.delete(req.params.id, res.callback)
})
export default router
