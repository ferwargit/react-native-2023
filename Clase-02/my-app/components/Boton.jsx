import { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

// Recibe la funcion onpress
export default function Boton({apretame, text="Botón"}){

  useEffect(()=> {
    console.log("Se renderizó el componente Boton")
  })

  return(
    <>
      <TouchableOpacity style={styles.btn} onPress={apretame}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  btnText: {
    color: "#FFF",
  },
  btn: {
    backgroundColor: '#0000FF',
    padding: 15,
    margin: 10,
    borderRadius: 10
  },
});