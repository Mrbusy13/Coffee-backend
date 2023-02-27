import Coffeeshop from "../models/Coffeeshops.js";
import mongoose from "mongoose";
import { Request, Response } from "express";

//function getAllCoffeeshops
export const getAllCoffeeshops = async (req: Request, res: Response) => {
  console.log(req);
  const data = await Coffeeshop.find({});
  res.status(200).json(data);
};

// function get single coffeeshop by ID
export const getCoffeeshop = async (req: Request, res: Response) => {
  const { search } = req.params;
  const name: any = req.query.name;
  const town: any = req.query.town;
  const id: any = req.query.id;

  console.log(search, req.params, req.query, name, id);

  if (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "No coffee shop found with that ID" });
      return;
    }
    const coffeeshop = await Coffeeshop.findById(id);
    res.status(200).json(coffeeshop);
    return
  }

  if (name) {
    const coffeeshop = await Coffeeshop.find({ name: name });
    if (coffeeshop !== null) {
      res.status(200).json(coffeeshop);
      return
    } else {
      res.json({ error: "No coffeeshop with that Name" });
      return
    }
  } 
  
  if (town){
    const coffeeshop = await Coffeeshop.find({ town: town });
    if (coffeeshop !== null) {
      res.status(200).json(coffeeshop);
      return
    } else {
      res.json({ error: "No coffeeshop in that Town" });
      return
    }
    
  }
};

// function get single coffeeshop by name
export const getCoffeeshopByName = async (req: Request, res: Response) => {
  const name: any = req.query;
  console.log(name.name);
  if (!mongoose.Types.ObjectId.isValid(name.name)) {
    res.status(400).json({ error: "No Coffeeshop found by that Name" });
    return;
  }

  const namedCoffeeshop = await Coffeeshop.findOne({ name: name });
  res.status(200).json(namedCoffeeshop);
};

// function create a coffeeshop
export const createCoffeeshop = async (req: Request, res: Response) => {
  const { name, town } = req.body;

  try {
    const coffeeshop = await Coffeeshop.create({ name, town });
    res.status(200).json(coffeeshop);
  } catch (error) {
    res.status(400).json("There was a problem");
  }
};
// function delete a coffeeshop
export const deleteCoffeeshop = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const query = mongoose.Types.ObjectId.isValid(id)
      ? { _id: id }
      : { name: id };
    const deletedCoffeeshop = await Coffeeshop.deleteOne(query);
    res.status(200).json(deletedCoffeeshop);
  } catch (error) {
    res.status(400).json({ error: "Delete operation could not be performed." });
  }
};

// function update a coffeeshop
export const updateCoffeeshop = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No coffee shop found with that ID." });
    return;
  }
  const updatedCoffeeshop = await Coffeeshop.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  res
    .status(200)
    .json({ message: "Coffee Shop Updated", data: updatedCoffeeshop });

  if (!updatedCoffeeshop) {
    return res
      .status(400)
      .json({ error: "Update operation could not be performed" });
  }
};

// import Coffeeshop from "../models/coffeeshopModel.js";

// const getAllCoffeeshops = async (req, res) => {
//   try {
//     const data = await Coffeeshop.find({});
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// export { getAllCoffeeshops }
