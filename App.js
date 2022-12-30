import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotaEditor from "./src/components/NotaEditor"

export default function App() {
  const [notas, setNotas] = useState([])

  const mostraNotas = async () => {
    try {
      const todasChaves = await AsyncStorage.getAllKeys()
      const todaNotas = await AsyncStorage.multiGet(todasChaves)
      setNotas(todaNotas)
      console.log(todaNotas)
    } catch (error) {
      this.setState({errorMessage: error.message})
    }
  }

  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor mostraNotas={mostraNotas}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

