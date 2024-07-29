import { View, FlatList, Image } from "react-native"

import styles from "./styles"
import { useEffect, useRef, useState } from "react"

const Carossel = ({ data }) => {

    const carrossel = useRef()
    const [indice, setIndice] = useState(0)

    const AttIndice = () => {
      if(indice < data.length - 1){
        setIndice(indice + 1)
      }
      else{
        setIndice(0)
      }
    }

    useEffect(() => {

      carrossel.current.scrollToIndex({ index: indice })

      const intervalo = setInterval(() => {
        AttIndice()
      }, 2000)

      return () => clearInterval(intervalo)

    }, [indice])

    return(
        <View style={styles.container}>
            
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <Image
                  source={item.imagem}
                  style={
                    [styles.image,
                    index == data.length-1 && {marginRight: 200} 
                    ]
                  }
                  resizeMode="contain"
                />
              )}
              ref={carrossel}
            />

        </View>
    )
}

export default Carossel