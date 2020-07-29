import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function RegisterCategory(){
  const valoresIniciais = {
    nome:'',
    descricao: '',
    cor: '#000'
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    // chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvent){
    setValue(
        infoEvent.target.getAttribute('name'), 
        infoEvent.target.value
    );
  }
    
    return(
      <PageDefault>
        <h1> Cadastro de Categoria: {values.nome} </h1>
        <form onSubmit={function handleSubmit(infoDoEvento){
          infoDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>
          
          <FormField 
            label="Nome:"
            value={values.nome}
            onChange={handleChange}
            type="text"
            name="nome"

          />

          <FormField 
            label="Descrição:"
            value={values.descricao}
            onChange={handleChange}
            type="text"
            name="descricao"

          />

          <FormField 
            label="Cor:"
            value={values.cor}
            onChange={handleChange}
            type="color"
            name="cor"

          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            );
          })}
        </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    );
}

export default RegisterCategory;