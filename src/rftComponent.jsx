import { RFT, PARAM, RFTSelected } from "./rft.js";
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
  CardContent
} from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

let res = {
  RELY: 1,
  DATA: 1,
  CPLX: 1,
  TIME: 1,
  STOR: 1,
  VIRT: 1,
  TURN: 1,
  ACAP: 1,
  AEXP: 1,
  PCAP: 1,
  VEXP: 1,
  LEXP: 1,
  MODR: 1,
  TOOL: 1,
  SCED: 1
};

export function RFTComponent() {
  this.res = res;
  this.sal = [];
  const [radioVisable, setRadioVisable] = React.useState(false);

  const handleChange = () => {
    setRadioVisable(!radioVisable);
  };

  return (
    <>
      {radioVisable ? (
        <>
          <Button
            variant="contained"
            color="info"
            id="calc"
            onClick={() => {
              handleChange();
            }}
          >
            Cкрыть вcе параметры
          </Button>
          <div>
            {RFT.map((i, index) => (
              <>
                <Stack justifyContent="center" alignItems="center" spacing={2}>
                  {i.name}
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <RFTSelect index={index} param={i} />
                </Stack>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <SelectOneParam />
          <SelectedList />
          <Box m={2}>
            <Button
              variant="contained"
              color="info"
              id="calc"
              onClick={() => {
                handleChange();
              }}
            >
              Показать вcе параметры
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

function RFTSelect(props) {
  let name = Object.keys(props.param)[0];
  let items = props.param[name];
  let { index } = props.index;
  return (
    <FormControl m={"auto"} key={index + " " + name} component="fieldset">
      <RadioGroup
        defaultValue={this.res[name]}
        variant="primary"
        key={name}
        aria-label={name}
        row
        onChange={(event) => {
          res[name] = Number(event.target.value);
          this.res = res;
          console.log(res);
        }}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((i, index) =>
          i === 0 ? <></> : <RFTmenu index={index} name={name} value={i} />
        )}
      </RadioGroup>
    </FormControl>
  );
}

function RFTmenu(props) {
  let { name, value, index } = props;

  return (
    <FormControlLabel
      spacing={2}
      key={name + value}
      label={PARAM[index]}
      control={<Radio />}
      value={value}
    ></FormControlLabel>
  );
}

class ParamList {
  res = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItem(item) {
    if (!this.res.includes(item)) this.res.push(item);
  }
}

export const paramsList = new ParamList();

export const ParamsListView = observer(({ list }) => (
  <>{console.log(list, "list")}</>
));

let nodeList = document.getElementById("list");

//ReactDOM.render(<ParamsListView list={paramsList} />, nodeList);

let paramList = new ParamList();

export function SelectOneParam() {
  this.resuting = [];
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Param</InputLabel>
        <Select
          value={""}
          label="Param"
          onChange={(event) => {
            paramList.addItem(event.target.value);
          }}
        >
          {RFT.map((item, index) => {
            return (
              <MenuItem
                value={Object.keys(item)[0]}
                name={Object.keys(item)[0]}
                key={index + Object.keys(item)[0]}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

const SelectedList = observer(() => {
  return (
    <>
      {paramList.res.map((i) => (
        <SelectComponent item={i} />
      ))}
    </>
  );
});

function SelectComponent(props) {
  console.log(props.item);
  let item = RFTSelected[props.item][props.item];
  console.log(item);
  return (
    <FormControl key={props.item} fullWidth>
      <InputLabel>{props.item}</InputLabel>
      <Select
        defaultValue={this.res[props.item]}
        label={props.item}
        onChange={(event) => {
          res[props.item] = event.target.value;
          console.log("res", res);
        }}
      >
        {item.map((i, index) =>
          i === 0 ? (
            <>&nbsp;</>
          ) : (
            <MenuItem key={props.item + i} value={i}>
              {PARAM[index]}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
}

// function SelectedItem(props){
//   return(
//     ;
//   )
// }
export const Card = (props) => (
  <CardContent>
    <Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Человеко-месяцев {document.sal[0]}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Месяцев {document.sal[1]}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Персонала {document.sal[2]}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Трудоемкость в человеко-месяцах {document.sal[3]}
      </Typography>
    </Box>
  </CardContent>
);
