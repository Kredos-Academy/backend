import Router from "../libraries/router";
// import collectioncon from "../nft/collectioncon";

Router.post("/applicationPayment",[],"paymentController@applicationPayment");
Router.post("/coursePayment",[],"paymentController@coursePayment");
Router.post("/createPayment",[],"paymentController@createPayment");
Router.get("/paymentCallback",[],"paymentController@paymentCallback");

export default Router.export();