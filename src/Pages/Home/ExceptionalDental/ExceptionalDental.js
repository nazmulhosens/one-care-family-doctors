import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";

const ExceptionalDental = () => {
	return (
		<Container>
			<Grid
				container
				spacing="4"
				sx={{
					mt: 16,
					alignItems: "center",
				}}
			>
				<Grid item xs="5">
					<img src={treatment} width="450" alt="" />
				</Grid>
				<Grid item xs="7">
					<Typography
						variant="h3"
						sx={{ fontWeight: "bold", color: "text.secondary" }}
					>
						Exceptional Dental <br />
						Care, on Your Terms
					</Typography>
					<Typography sx={{ color: "#909497", my: 6 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptas ipsum possimus, ipsam maxime ullam, soluta earum in
						esse consequuntur architecto animi vel voluptatibus provident
						cum error exercitationem voluptatum quae reprehenderit.
					</Typography>
					<button className="btn-all">LEARN MORE</button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ExceptionalDental;
