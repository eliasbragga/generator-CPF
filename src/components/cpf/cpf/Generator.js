import React, { useEffect, useState } from "react";
import "./Generator.css";

function GeneratorCPF({ cpfRadio }) {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setValue("");
  }, [cpfRadio]);

  function generateCnpj() {
    let n = 9;
    let n1 = Math.floor(Math.random() * n) + 1;
    let n2 = Math.floor(Math.random() * n) + 0;
    let n3 = Math.floor(Math.random() * n) + 0;
    let n4 = Math.floor(Math.random() * n) + 0;
    let n5 = Math.floor(Math.random() * n) + 0;
    let n6 = Math.floor(Math.random() * n) + 0;
    let n7 = Math.floor(Math.random() * n) + 0;
    let n8 = Math.floor(Math.random() * n) + 0;
    let n9 = 0;
    let n10 = 0;
    let n11 = 0;
    let n12 = 1;
    let d1 =
      n12 * 2 +
      n11 * 3 +
      n10 * 4 +
      n9 * 5 +
      n8 * 6 +
      n7 * 7 +
      n6 * 8 +
      n5 * 9 +
      n4 * 2 +
      n3 * 3 +
      n2 * 4 +
      n1 * 5;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    let d2 =
      d1 * 2 +
      n12 * 3 +
      n11 * 4 +
      n10 * 5 +
      n9 * 6 +
      n8 * 7 +
      n7 * 8 +
      n6 * 9 +
      n5 * 2 +
      n4 * 3 +
      n3 * 4 +
      n2 * 5 +
      n1 * 6;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;
    setValue(
      "" +
        n1 +
        n2 +
        "." +
        n3 +
        n4 +
        n5 +
        "." +
        n6 +
        n7 +
        n8 +
        "/" +
        n9 +
        n10 +
        n11 +
        n12 +
        "-" +
        d1 +
        d2
    );
  }

  function mod(dividendo, divisor) {
    return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
  }

  function generateCPF() {
    console.log(cpfRadio);
    let n = 9;
    let n1 = Math.floor(Math.random() * n);
    let n2 = Math.floor(Math.random() * n);
    let n3 = Math.floor(Math.random() * n);
    let n4 = Math.floor(Math.random() * n);
    let n5 = Math.floor(Math.random() * n);
    let n6 = Math.floor(Math.random() * n);
    let n7 = Math.floor(Math.random() * n);
    let n8 = Math.floor(Math.random() * n);
    let n9 = Math.floor(Math.random() * n);
    let d1 =
      n9 * 2 +
      n8 * 3 +
      n7 * 4 +
      n6 * 5 +
      n5 * 6 +
      n4 * 7 +
      n3 * 8 +
      n2 * 9 +
      n1 * 10;
    d1 = 11 - Math.floor(d1 % 11);
    if (d1 >= 10) d1 = 0;
    let d2 =
      d1 * 2 +
      n9 * 3 +
      n8 * 4 +
      n7 * 5 +
      n6 * 6 +
      n5 * 7 +
      n4 * 8 +
      n3 * 9 +
      n2 * 10 +
      n1 * 11;
    d2 = 11 - Math.floor(d2 % 11);
    if (d2 >= 10) d2 = 0;
    setValue(
      "" +
        n1 +
        n2 +
        n3 +
        "." +
        n4 +
        n5 +
        n6 +
        "." +
        n7 +
        n8 +
        n9 +
        "-" +
        d1 +
        d2
    );
  }

  const handleCopy = async () => {
    setShowMessage(!showMessage);
    try {
      await navigator.clipboard.writeText(value);
      setCopied("Texto copiado com sucesso!");
    } catch (err) {
      setCopied("Não foi possível copiar o texto");
      console.error(err);
    } finally {
      setTimeout(() => {
        setShowMessage(false);
      }, 1500);
    }
  };

  return (
    <div className="container-generator">
      <div>
        {showMessage && <span className="message">{copied}</span>}
        <h2>{cpfRadio ? "cpf" : "cnpj"} válido</h2>
        <input value={value} disabled type="text" />
        <button
          disabled={!value || showMessage}
          onClick={handleCopy}
          title="clicar para copiar"
          className="button-copied"
        >
          <span class="material-icons">content_copy</span>
        </button>
        <div>
          <button
            onClick={cpfRadio ? generateCPF : generateCnpj}
            disabled={showMessage}
            className="button-generator"
          >
            {cpfRadio ? "Gerar CPF" : "Gerar CNPJ"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeneratorCPF;
