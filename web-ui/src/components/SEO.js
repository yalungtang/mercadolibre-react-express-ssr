import React from 'react';
import Helmet from 'react-helmet';
import logoImg from '../assets/logo.png';

const SEO = (props) => {
  const baseRoute = 'http://localhost:3000/';
  const { title, content, ogImg, canonicalUrl } = props;
  const defaultContent = "Wrapper de la API de Mercado Libre con interfaz grafica en React.js, SSR con node y express.js, SEO con React Helmet";
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={content || defaultContent} />
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl ? `${baseRoute}${canonicalUrl}` : baseRoute} />
      <meta property="og:image" content={ogImg || logoImg} />
    </Helmet>
  );
};

export default SEO;
