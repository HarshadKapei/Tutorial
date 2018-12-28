const router = Router()
router.get("/search", (req, res) => {
    GenreModel.search(res.callback)
})
router.get("/:id", (req, res) => {
    GenreModel.getOne(req.params.id, res.callback)
})
router.post("/create", (req, res) => {
    GenreModel.create(req.body, res.callback)
})
router.put("/edit/:id", (req, res) => {
    GenreModel.edit(req.body, res.callback)
})
router.delete("/delete/:id", (req, res) => {
    GenreModel.delete(req.params.id, res.callback)
})
export default router
