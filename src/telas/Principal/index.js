import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { CardConsulta } from "../../componentes/CardConsulta";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/sonia.png";
import pacientes from "./pacientes";
import styles from "./styles";
import { CardConsultaShemmerEffect } from "../../componentes/CardConsultaShimmerEfect";
import { AuthenticatorContext } from "../../context/contextAuthenticator";

export default function Principal({ navigation }) {

  const {user} = useContext(AuthenticatorContext)
  const [tempo, setTempo] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setTempo(true)
    }, 3000)

  }, [])

  return (
    <TelaDeFundo>
    <View style={styles.container}>
      <InformacoesUsuario 
        nome={`Olá ${user.name}`}
        detalhes="Mais 4 consultas hoje"
        foto={soniaFoto}
      />

      <Text style={styles.texto}>Hoje</Text>

      {
        tempo ?

        <FlatList
          data={pacientes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
            <CardConsulta {...item} />
          </TouchableOpacity>
          }
          showsVerticalScrollIndicator={false}
        />

        :
        <>
          <CardConsultaShemmerEffect/>
          <CardConsultaShemmerEffect/>
          <CardConsultaShemmerEffect/>
        </>

      }
    </View> 
    </TelaDeFundo>
  );
}