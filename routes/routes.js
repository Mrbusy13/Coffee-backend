import express from "express";

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const coffeeRoutes = express.Router();

// This section will help you get a list of all the documents.
coffeeRoutes.route("/listings").get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("listingsAndReviews")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
        console.log(result);
      }
    });
});
