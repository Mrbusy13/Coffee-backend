import express from "express";
import {
  getAllCoffeeshops,
  getCoffeeshop,
  addCoffeeshop,
  deleteCoffeeshop,
  updateCoffeeshop
} from "//file tbc";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const router = express.Router();

// get all coffeeshops
router.get("/", getAllCoffeeshops)

// get a single coffeeshop
router.get("/:id", getCoffeeshop)

// post a new coffeeshop
router.post("/", addCoffeeshop)

// delete a coffeeshop
router.delete("/:id", deleteCoffeeshop)

// update a coffeeshop
router.update("/:id", updateCoffeeshop)

export default router;