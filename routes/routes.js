import paymentRoute from "./paymentRoute";
import userRoute from "./userRoute";

export default app => {
	app.use("/", userRoute);
	app.use("/", paymentRoute)
}
