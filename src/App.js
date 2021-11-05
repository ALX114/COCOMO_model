import "./styles.css";
import { Button, Input } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Input id="KLOC" /> &nbsp;
      <Button variant="contained" color="info" id="calc">
        Расчет
      </Button>
    </div>
  );
}
