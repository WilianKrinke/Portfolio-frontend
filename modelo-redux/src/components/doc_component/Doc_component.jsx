import React from "react";
import "./doc.css"
import ProviderPrint from "../../assets/print-provider-wrapper.PNG"
import StorePrint from "../../assets/store.PNG"
import Features from "../../assets/features.PNG"
import FeaturesState from "../../assets/features-states.PNG"
import FeaturesCode from "../../assets/features-code.PNG"

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
          <img src={StorePrint} alt="store" loading="lazy"/>
          <li>Inserir em index.js, o wrapper provider, como segue o modelo:</li>
          <img src={ProviderPrint} alt="Wrapper Provider" loading="lazy"/>
          <li>Criar a pasta features, dentro dela crie pastas que represente algum estado, como no código fonte a seguir:</li>
          <img src={Features} alt="features" />
          <li>Dentro de cada pasta feature, crie seus respectivos arquivos de estado e insira o código de inicio de estado e manipulação de estado, como a seguir no código fonte: </li>
          <div className="div_img">
            <img src={FeaturesState} alt="features states" />
            <img src={FeaturesCode} alt="features code" />
          </div>
          
        </ol>
      </section>
    </>
  );
};

export default DocComponent;
