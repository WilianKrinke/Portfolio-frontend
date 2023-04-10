import React from "react";
import "./doc.css"
import ProviderPrint from "../../assets/print-provider-wrapper.PNG"
import StorePrint from "../../assets/store.PNG"

const DocComponent = () => {
  return (
    <>
      <section className="section_doc_class">
        <h2>Tutorial para implementação de Redux</h2>
        <br />
        <p>Escrito em 09-04-2023 para ReactJs</p>
        <br />
        <ol>
          <li>Instalar as seguintes dependências: react-redux, redux </li>
          <li>Criar a pastas store em src, criar arquivo store.js com o modelo que segue neste código fonte</li>
          <img src={StorePrint} alt="store"/>
          <li>Inserir em index.js, o wrapper provider, como segue o modelo:</li>
          <img src={ProviderPrint} alt="Wrapper Provider"/>
        </ol>
      </section>
    </>
  );
};

export default DocComponent;
