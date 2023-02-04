import Router from "../libraries/router";
// import collectioncon from "../nft/collectioncon";

Router.post("/register",[],"userController@register");
Router.post("/login",[],"userController@login");
Router.post("/logout",[],"userController@logout");

export default Router.export();