import Coffeeshop from "../models/Coffeeshops.js";
import mongoose from "mongoose";

type getAllCoffeeshops = () => void;


//function getAllCoffeeshops
export const getAllCoffeeshops = async (req: Request, res: Response):Promise<void>  => {
  const data = await Coffeeshop.find({});
  res.status(200).json(data);
};

// function get single coffeeshop
export const getCoffeeshop = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No coffee shop found with that ID." });
    return;
  }

  const coffeeshop = await Coffeeshop.findById(id);
  res.status(200).json(coffeeshop);
};

// function create a coffeeshop
export const createCoffeeshop = async (req: Request, res: Response) => {
  const { name, town } = req.body;

  try {
    const coffeeshop = await Coffeeshop.create({ name, town });
    res.status(200).json(coffeeshop);
  } catch (error) {
    res.status(400).json({ error: "There was a problem" });
  }
};
// function delete a coffeeshop
export const deleteCoffeeshop = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedCoffeeshop = await Coffeeshop.deleteOne(id);
      res.status(200).json(deletedCoffeeshop);
    } catch (error) {
      res.status(400).json({ error: "Delete operation could not be performed." });
    }
  };
// function update a coffeeshop
export const updateCoffeeshop = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No coffee shop found with that ID." });
    return;
  }
  const updatedCoffeeshop = await Coffeeshop.findOneAndUpdate({_id:id}, {...req.body});
    res.status(200).json("Coffee Shop Updated", updatedCoffeeshop);
  
  if (!updatedCoffeeshop){
    return res.status(400).json({ error: "Update operation could not be performed"})
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
