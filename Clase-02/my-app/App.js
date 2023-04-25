import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Boton from "./components/Boton";

export default function App() {
  const [contador, setContador] = useState(0);
  // const [contador2, setContador2] = useState(0);
  console.log(contador);
  // var contador2 = 0;

  const aumentarContador = () => {
    const nuevoValor = contador + 1;
    // contador2 = nuevoValor;
    // console.log(contador2);
    setContador(nuevoValor);
  };

  // useEffect es un hook que se ejecuta cada vez que se renderiza el componente
  // Dentro de useEffect estoy llamando a una funcion
  useEffect(() => {
    // console.log("Se ejecuto el useEffect");
    // Aqui tengo una lista de dependencias. Cada vez que cambie la variable
    // contador se ejecutara el useEffect, en consecuencia se ejecuta el console.log()
    // }, [contador2]);
  }, [contador]);

  return (
    <>
      <StatusBar backgroundColor="#fffccc" barStyle="dark-content" />

      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
        <View style={styles.container2}>
          <Text style={styles.textoHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textoContador}>{contador}</Text>
          {/* Aqui no renderiza por que no es un state ni un props, el valor de contador2
      cambia pero no lo renderiza */}
          {/* <Text style={styles.textoContador}>
        {contador2}
      </Text> */}
          {/* <TouchableOpacity style={styles.btnAlerta} onPress={aumentarContador}>
        <Text style={styles.btnText}>Aumentar en 1</Text>
      </TouchableOpacity> */}
          <Boton apretame={aumentarContador} text="Aumentar" />
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textoContador: {
    fontSize: 50,
  },
  textoHolaMundo: {},
  btnText: {
    color: "#FFF",
  },
  btnAlerta: {
    backgroundColor: "#0000FF",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
