import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const books = await req.context.models.Book.find();
  return res.send(books);
});

router.get("/:bookId", async (req, res) => {
  const book = await req.context.models.Book.find({ id: req.params.bookId });
  return res.send(book);
});

export default router;
