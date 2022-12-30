import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/components/NotaEditor"
import { Nota } from './src/components/Nota'
import { criaTabela } from "./src/services/Notas";

export default function App() {
  const [notas, setNotas] = useState([])

  const mostraNotas = async () => {
    setNotas(todaNotas)
    console.log(todaNotas)
  }

  useEffect(() => {
    criaTabela()
  }, [])

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

