import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function RegisterVideo() {
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: 'MEJ',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={(event) =>{
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}>
        <FormField
            label="Título"
            value={values.titulo}
            onChange={handleChange}
            name="titulo"
        />

        <FormField
            label="URL"
            value={values.url}
            onChange={handleChange}
            name="url"
        />

        <FormField
            label="Categoria"
            value={values.categoria}
            onChange={handleChange}
            name="categoria"
            suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>
      <Link to="/category/register">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
