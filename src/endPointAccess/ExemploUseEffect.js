import React,{useState, useEffect} from 'react';
import {View,Text, FlatList, Alert} from 'react-native';

export default function Exemplo(props){

const [data, setData] = useState([])
useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
    .then((response) =>{ 
      if(!response.ok){
        Alert.alert("Ocorreu um erro " + response.status)
      }
      return response.json()
    })
    .then((json) => setData(json.movies))
    .catch((error) => console.error(error))
}, []);

return(
    <View style={{flex:1, padding: 24}}>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>Filmes Disponiveis:</Text>
      </View>
        <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
            <Text>Filme: {item.title} - Ano: {item.releaseYear}</Text>
            )}
        />
    </View>
);
}
