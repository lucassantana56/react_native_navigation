import React from 'react'
import {Image, View, TouchableOpacity, Text, Linking, TextInput} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native';


import style from "../style";
import logoImg from "../../../assets/login.png";

export default function App() {
    const navigation = useNavigation();
    const router = useRoute();

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    function navigateToHome() {
        navigation.navigate('Home');
    }


    return (

        <View style={style.container}>

            <Image source={logoImg} style={style.image}/>

            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Email"/>
            </View>

            <View style={style.inputView}>
                <TextInput
                    secureTextEntry={true}
                    style={style.inputText}
                    placeholder="Password"
                />
            </View>

            <TouchableOpacity style={style.loginBtn}
                              onPress={() => navigateToHome()}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.registerBtn}
                              onPress={() => navigateToRegister()}>
                <Text>Sign up</Text>
            </TouchableOpacity>

        </View>
    );
}

