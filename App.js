import { StatusBar } from 'expo-status-bar'
import Slider from '@react-native-community/slider'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda Infantil</Text>
      <Image
        source={require("./src/assets/logo-200.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>20 caracteres</Text>


      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#0000ff"
          thumbTintColor='#392de9'
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14
  },
  button: {
    backgroundColor: "#2AB0BF",
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    elevation: 10,
  }
});

