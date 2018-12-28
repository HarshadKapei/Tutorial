import MovieModel from "../models/MovieModel"

const router = Router()
router.get("/search", (req, res) => {
    MovieModel.search(res.callback)
})
router.get("/:id", (req, res) => {
    MovieModel.getOne(req.params.id, res.callback)
})
router.post("/create", (req, res) => {
    MovieModel.create(req.body, res.callback)
})
router.put("/edit/:id", (req, res) => {
    MovieModel.edit(req.body, res.callback)
})
router.delete("/delete/:id", (req, res) => {
    MovieModel.delete(req.params.id, res.callback)
})
export default router
