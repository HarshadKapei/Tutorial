import UserModel from "../models/UserModel"

const router = Router()
router.get("/search", (req, res) => {
    UserModel.search(res.callback)
})
router.get("/:id", (req, res) => {
    UserModel.getOne(req.params.id, res.callback)
})
router.post("/create", (req, res) => {
    UserModel.create(req.body, res.callback)
})
router.put("/edit", (req, res) => {
    UserModel.edit(req.body, res.callback)
})
router.put("/addToFavourites", (req, res) => {
    UserModel.addToFavourites(req.body, res.callback)
})
router.put("/removeToFavourites", (req, res) => {
    UserModel.removeToFavourites(req.body, res.callback)
})
router.delete("/delete/:id", (req, res) => {
    UserModel.delete(req.params.id, res.callback)
})
export default router
