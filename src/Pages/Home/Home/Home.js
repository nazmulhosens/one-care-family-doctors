import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import bg from "../../../images/bg.png";
import Services from "../Services/Services";
import ExceptionalDental from "../ExceptionalDental/ExceptionalDental";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Testemonial from "../Testemonial/Testemonial";
import Blog from "../Blog/Blog";

const BannerBg = {
	background: `url(${bg}) center`,
	backgrounSize: "cover",
	height: "85vh",
};
const Home = () => {
	return (
		<>
			<Box style={BannerBg}>
				<Banner />
			</Box>
			<Services />
			<ExceptionalDental />
			<AppointmentBanner />
			<Testemonial />
			<Blog />
		</>
	);
};

export default Home;
