import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, FlatList, LayoutAnimation } from 'react-native';
import FundoOndulado from '../../componentes/FundoOndulado';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { Formulario } from '../../componentes/Formulario';
import itens from './cards';
import style from './styles';

import Carrossel from "../../componentes/Carossel"
import { ThemeContext } from '../../context/contextTheme';
import { AuthenticatorContext } from '../../context/contextAuthenticator';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  const { theme, alterarTema } = useContext(ThemeContext)
  const { login } = useContext(AuthenticatorContext)

  const styles = style(theme)

  const animationCustomizada = {
    duration: 1500,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }
  }

  function avancar() {
    if (fazerLogin) {
      login("teste@gmail.com", "123")
      navigation.navigate('Principal');
    } else {
      setAltura(400);
      LayoutAnimation.linear()
      setFazerLogin(true);
    }
  }

  LayoutAnimation.configureNext(animationCustomizada)

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <Text onPress={alterarTema}>
          tema
        </Text>

        <View style={styles.carrosselArea}>
          {!fazerLogin && (
              <Carrossel data={itens} />
            )}
        </View>
        <Image
          source={require('../../assets/medica.png')}
          style={styles.medicaImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ?
              <Formulario
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações. Senão tiver uma conta ainda crie uma agora"
              />
              :
              <View>
                <Text style={styles.titulo}>Gerencie as suas consultas</Text>
                <Text style={styles.texto}>
                  Você consegue gerenciar todas suas consultas e ver o tempo médio de cada, e a quantidade de consultas realizadas.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>{fazerLogin ? 'Entrar' : 'Começar'}</Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}