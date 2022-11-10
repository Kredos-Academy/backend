class PurchaseController {
    /**
     * POST / getAllUserPurchase
     * @dev API method to get all nft purchase created by a user..
     */
    async getAllUserPurchase(req, res) {
      try {
        res.status(201).send({ msg: "Lorem ipsum dolor sit amet." });
      } catch (error) {
        res.status(400).send({ msg: "error!" });
      }
    }
  }
  
  let purchaseController = new PurchaseController();
  module.exports = purchaseController;
  