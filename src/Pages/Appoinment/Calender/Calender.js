import React from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Calender = ({ value, setValue }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StaticDatePicker
				displayStaticWrapperAs="desktop"
				openTo="day"
				value={value}
				shouldDisableDate={isWeekend}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
};

export default Calender;
