import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../CardConsulta/styles";
import Icon from 'react-native-vector-icons/Feather';

import shimmerGif from "../../assets/shimmer.gif"

export function CardConsultaShemmerEffect() {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={shimmerGif} style={[styles.foto, { overlayColor: "#FFF" }]} />
        <View style={styles.informacoes}>
        <Image source={shimmerGif} style={{ width: 200, height: 25 }} />
          <View style={styles.consultaArea}>
            {/* <Icon name={icon} size={16} color="#A3A3A3" /> */}
            <Image source={shimmerGif} style={{ width: 130, height: 20, marginTop: 5 }} />

          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Image source={shimmerGif} style={{ width: 100, height: 15 }} />
        <View style={styles.botoesArea}>
        <Image source={shimmerGif} style={{ width: '100%', height: 50, overlayColor: "#FFF", borderRadius: 10 }} />
        </View>
      </View>
    </View>
  );
}