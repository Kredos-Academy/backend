import Controller from "../../libraries/controller/index";

export default class PurchaseController extends Controller {
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
