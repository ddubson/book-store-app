import {Request, Response, Router} from "express";
import {bookRepository} from "./AppConfig";

const router = Router();

router.route("/books").get((req: Request, res: Response) => {
  res.json(bookRepository.fetchAll());
});

router.route("/books/:id").get((req: Request, res: Response) => {
  res.json(bookRepository.findById(req.params.id));
});

export default router;
