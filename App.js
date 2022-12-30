import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/components/NotaEditor"

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor/>
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

