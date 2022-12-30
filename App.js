import { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotaEditor from "./src/components/NotaEditor"
import { Nota } from './src/components/Nota'

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
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />} // passando todas informacoes da nota para o componente Nota
        keyExtractor={nota => nota[0]} // Pegando o id da nota
      />
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

