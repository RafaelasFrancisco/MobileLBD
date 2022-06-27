import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native"


function App () {
  const [lista_pokemons, setListaPokemons] = useState()

  useEffect(() => {
    pegarPokemonsAPI()
  }, [])

  const pegarPokemonsAPI = async () => {
    const respostas = await fetch('https://pokeapi.co/api/v2/pokemon')
    const json_pokemons = await respostas.json()
    const resultados = json_pokemons.results
    setListaPokemons(resultados)
  }

  return (
    <View style={{
    }}>

      <FlatList
        data={lista_pokemons}
        renderItem = {(info) => {
          console.log(info)
          const { index, item } = info
          return (
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 24,
                color: 'white'
              }}>
                {index} -
                {item.name}
              </Text>
            </View>
          )
        }}
     />
    </View>
  )

}

export default App