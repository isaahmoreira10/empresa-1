import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from './global';

// Importando componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [pagina, setPagina] = useState('home');

  // Função para renderizar a tela com base na página atual
  const renderPage = () => {
    switch (pagina) {
      case 'home':
        return <Home />;
      case 'sobre':
        return <About />;
      case 'servicos':
         return <Services />;
      case 'contato':
        return <Contact />;
        default:
          return <Home />;
    }
  };

return(
   <SafeAreaView style={globalStyles.container}>
     <Header pagina= {pagina}


)



}
