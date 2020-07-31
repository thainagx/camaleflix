import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'

function RegisterCategory() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };
  
  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    const URL_BACKEND = window.location.hostname.includes('localhost') ? 'https://localhost:8080/categorias' : 'https://camaleflix.herokuapp.com/categorias';
    fetch(URL_BACKEND)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {values.titulo}
      </h1>
      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();


        clearForm();
      }}
      >

        <FormField
          label="Nome"
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
