import React, {useState, useEffect} from 'react'
import {Text, View, Button, FlatList} from 'react-native'

export default function Usuarios (props){
    const [usuarios, setUsuario] = useState([])
    const [count, setCount] = useState(0)

    function marcarUsuario(id){
        const novosUsuarios = usuarios.map(user => {
            return user.id == id ? { ... user, marcado: !user.marcado} : user
        })
        setUsuario(novosUsuarios);
    }

    useEffect(() => {
        const marcados = usuarios.filter (user => user.marcado);
        setCount(marcados.length)

    }, [usuarios])

    useEffect( () => {
        const data = [
            {id:1, nome: 'Joao'},
            {id:2, nome: 'Maria'},
            {id:3, nome: 'Luiza'},
            {id:4, nome: 'Jose'},
            {id:5, nome: 'Ana'},
            {id:6, nome: 'Marco'},
            {id:7, nome: 'George'},
            {id:8, nome: 'Camila'},
            {id:9, nome: 'Rodrigo'},
            {id:10, nome: 'Mirian'},
            {id:11, nome: 'Pedro'},
            {id:12, nome: 'Augusto'},
            {id:13, nome: 'Denise'},
            {id:14, nome: 'Eduardo'},
            {id:15, nome: 'Guilherme'},
            {id:16, nome: 'Maria Paula'},
            {id:17, nome: 'Alessandra'},
            {id:18, nome: 'Bianca'},
            {id:19, nome: 'Jorge'},
            {id:20, nome: 'Mariana'},
            {id:21, nome: 'Paulo'},
            {id:22, nome: 'Samara'}

        ]
        setUsuario(data)
    }, [])

    return(
        <View style={{backgroundColor:'black', flex:1}}>
            <Text style={{fontSize:24, color:'white'}}> Total de usuarios marcados: {count} </Text>
            <FlatList 
                data={usuarios}
                renderItem={ ({item}) => (
                    <View>
                        <Text style={{fontSize:24, color:'white'}}>
                            {item.nome} {item.marcado && <Text> *** </Text>}
                        </Text>
                        <Button title="Marcar" onPress={() => marcarUsuario(item.id)}/>
                    </View>
                )}
                keyExtractor={index => `${index.id}`}
            />
        </View>
    )
}

