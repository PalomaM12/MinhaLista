import React, { useState } from "react";


import {
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   Alert,
   ActivityIndicator
   

} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons,Octicons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import {Input} from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login() {
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setloading] = useState(false);

    
    async function getlogin(){
        setloading(true)
        try {
            if (!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }

            setTimeout(()=>{ 
                if (email == 'caio.nerd.0@gmail.com' && password== '123456'){
                   Alert.alert('Logado com sucesso!')
                }else {
                   Alert.alert('Usuário não encontrado!')
                }
                setloading (false)
            },3000)
           
  
        } catch (error) {
            console.log (error)
    
        } 
            
        
    }
    
    return (
    <View style = {style.container}>

       <View style = {style.boxTop}>
        <Image 
           source={Logo}
           style={style.logo}
           resizeMode="contain"

        />
        <Text style={style.text}>Bem vindo de volta!</Text>
       </View>

       <View style = {style.boxMid}>
         <Input
             value= {email}
             onChangeText={setEmail}
             title = "ENDEREÇO E-MAIL"
             IconRight = {MaterialIcons}
             iconRightName = "email"
          
          />
           <Input
             onChangeText= {setPassword}
              value={password}
              title = "senha"
              IconRight = {Octicons}
              iconRightName = {showPassword?"eye-closed": "eye"}
              secureTextEntry= {showPassword}
              onIconRigthtPress = {()=>setShowPassword(!showPassword)}
          />
   
       </View>
       
       <View style = {style.boxButtom}>
           <Button  text ="ENTRAR" loading={loading} onPress={()=>getlogin()} />
       </View>
       <Text style={style.textButton}>Não tem conta?<Text style={{color:themas.colors.blue}}> Crie agora!</Text></Text>

    </View>
    
    )
}