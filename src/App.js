import { useState } from "react";
import "./App.css";
import Generator from "./components/cpf/cpf/Generator";

function App() {
  const [cpfRadio, SetCpfRadio] = useState(true);
  const [cnpjRadio, SetCnpjRadio] = useState(false);

  const handleCheckbox1Change = (event) => {
    if (!cpfRadio) {
      SetCpfRadio(event.target.checked);
      SetCnpjRadio(false);
      return;
    }
  };
  const handleCheckbox2Change = (event) => {
    if (!cnpjRadio) {
      SetCnpjRadio(event.target.checked);
      SetCpfRadio(false);
      return;
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="component">
             <Generator cpfRadio={cpfRadio} />
          
        </div>
      </div>
      <div className="container-radio">
        <div className="input-checkbox">
          <input
            type="checkbox"
            checked={cpfRadio}
            onChange={handleCheckbox1Change}
          />
          <label>CPF</label>
        </div>
        <div className="input-checkbox">
          <input
            type="checkbox"
            checked={cnpjRadio}
            onChange={handleCheckbox2Change}
          />
          <label>CNPJ</label>
        </div>
      </div>
    </div>
  );
}

export default App;
