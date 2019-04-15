import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const restaurants = await req.context.models.Restaurant.find();
  return res.send(restaurants);
});

router.get("/:restaurantId", async (req, res) => {
  const restaurant = await req.context.models.Restaurant.find({
    id: req.params.restaurantId
  });
  return res.send(restaurant);
});

export default router;
