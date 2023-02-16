import coffeeshop from "../models/Coffeeshops.js";
import mongoose from "mongoose";

//function getAllCoffeeshops
export const getAllCoffeeshops = async (req, res)=> {
   const data = await coffeeshop.find({})
    res.status(200).json(data)
}


// function get single coffeeshop

// function create a coffeeshop

// function delete a coffeeshop

// function update a coffeeshop

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

// export { getAllCoffeeshops };
