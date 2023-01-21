import Router from "../libraries/router";
import collectioncon from "../nft/collectioncon";

Router.get("/register",[],"userController@createUser");

export default Router.export();