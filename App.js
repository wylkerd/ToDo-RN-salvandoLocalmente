import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/components/NotaEditor"
import { Nota } from './src/components/Nota'
import { buscaNotas, criaTabela } from "./src/services/Notas";

export default function App() {
  useEffect(() => {
    criaTabela()
    mostraNotas()
  }, [])

  const [notas, setNotas] = useState([])

  async function mostraNotas() {
    const todasNotas = await buscaNotas()
    setNotas(todasNotas)
    console.log(todasNotas)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />} // passando todas informacoes da nota para o componente Nota
        keyExtractor={nota => nota.id} // Pegando o id da nota
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

