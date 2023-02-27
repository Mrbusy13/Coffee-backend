import express from "express";
import {
  getAllCoffeeshops,
  getCoffeeshop,
  createCoffeeshop,
  deleteCoffeeshop,
  updateCoffeeshop,
  getCoffeeshopByName,
} from "../controllers/coffeeshopController.js"

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const router = express.Router();

// get all coffeeshops
router.get("/", getAllCoffeeshops);

// get a single coffeeshop by ID
router.get("/:id", getCoffeeshop);

// get a single coffeeshop by name
router.get("/:name", getCoffeeshopByName);

// post a new coffeeshop
router.post("/", createCoffeeshop);

// delete a coffeeshop
router.delete("/:id", deleteCoffeeshop);

// update a coffeeshop
router.patch("/:id", updateCoffeeshop);

export default router;
