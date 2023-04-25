import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() { 

  const handlePress = () => {
    alert('El botón fue presionado');
  }

  return (
    <>
    <StatusBar backgroundColor="#fffccc" barStyle="dark-content" />
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
    </View>
    <View style={styles.container2}>
      <Text>Hola Mundo</Text>
      <TextInput placeholder='Prueba' style={styles.textInput}></TextInput>
      {/* <TouchableOpacity style={styles.btnAlerta} onPress={handlePress}> */}
      <TouchableOpacity style={styles.btnAlerta} onPress={()=> alert('El boton fue presionado2')}>
        <Text style={styles.btnText}>Alerta</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: "#FFF",
  },
  btnAlerta: {
    backgroundColor: '#0000FF',
    padding: 15,
    margin: 10,
    borderRadius: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  },
});
