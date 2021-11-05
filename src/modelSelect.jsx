import { RFT } from "./rft.js";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";
import * as React from "react";
import ReactDOM from "react-dom";

export function MenuComponent() {
  this.model = 0;
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Model</InputLabel>
      <Select
        defaultValue={0}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={this.model}
        label="model"
        onChange={(event) => {
          this.model = event.target.value;
          console.log(this.model);
        }}
      >
        <MenuItem value={"0"}>organic</MenuItem>
        <MenuItem value={"1"}>semidetach</MenuItem>
        <MenuItem value={"2"}>embidded</MenuItem>
      </Select>
    </FormControl>
  );
}
