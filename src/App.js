import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';
function App() {
  return (
    <div style={{ background: "#141414" }} >
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Então você quer saber mais sobre o que realmente são Empresas Juniores. O que é uma Empresa Júnior? Empresa Júnior, ou EJ é uma instituição localizada dentro de uma faculdade, a qual é administrada somente por alunos universitários, verdadeiros jovens empreendedores, dessa própria universidade."}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer />

    </div>
  );
}

export default App;
