import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import LottieView from "lottie-react-native";
const SplashScreen = ({navigation}) => {

    const animacaoFinalizada = () => {
            navigation.reset({
                index: 0,
                    routes: [{name: "Onboarding"}]
                })

    }

    return ( 
        <View style={styles.container}>
            <LottieView 
                source={require("../../assets/splash-aluramed.json")}
                autoPlay
                loop={false}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#FFF',
                  }}
                onAnimationFinish={animacaoFinalizada}
            />
        </View>
     );
}
 
export default SplashScreen;