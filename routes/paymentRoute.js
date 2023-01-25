import Router from "../libraries/router";
// import collectioncon from "../nft/collectioncon";

Router.post("/applicationfee",[],"paymentController@makePayment");

export default Router.export();