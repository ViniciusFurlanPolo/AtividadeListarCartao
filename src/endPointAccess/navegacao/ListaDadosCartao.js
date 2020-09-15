import React,{useState, useEffect} from 'react'
import {Text, View, Alert, Button} from 'react-native'

export default function Lista (props){
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cartao/cliente/'+id 
    useEffect(() => {
            fetch(string, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTYwMDEyNTY5MzQ2NiwiZXhwIjoxNjAwNzMwNDkzfQ.voq6hbTidgKDgOfOFyL0HRKgSmthpMIy04-h4-O4wXKuR-o8XXJ4zWSQwcjRoeAxs_1Wwv-nlLVe4oIYgkeWvQ'
            }
        })
            .then((response) => {   
                if(!response.ok){
                    if(response.status == 400){
                        Alert.alert("Cliente nao encontrado!");
                        props.navigation.goBack()
                    }
                }
                return response.json()
            })
            .then((json) => {
                    setData(json.dados)
                }
            )
            .catch((error) => {
                console.error(error)})
            }, []);





    function renderizacao (){
        if(data != null){
            return (
                data.map(cartao => <>
                    <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>
                        Cartao  
                    </Text>
                    <Text>
                        ID: {cartao.id}
                    </Text>
                    <Text>
                        Numero: {cartao.numero} 
                    </Text>
                    <Text>
                        Data-Validade: {cartao.dataValidade}
                    </Text>
                    <Text>
                        Bloqueado: {cartao.bloqueado}
                    </Text>
                </>)
            )
        }
    }

    return(
        <View style={{flex:1, padding: 24}}>
            {renderizacao()}
        </View>
    );

}