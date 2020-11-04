import React from 'react'
import {Image, View, TouchableOpacity, Text, Linking, TextInput} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native';


import style from "../style";
import logoImg from "../../../assets/login.png";

export default function App() {
    const navigation = useNavigation();
    const router = useRoute();

    function navigatioBack() {
        navigation.goBack();
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
                    style={style.inputText}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor=""/>
            </View>

            <TouchableOpacity style={style.registerBtn}
            >
                <Text>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.backBtn}
                              onPress={() => navigatioBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

        </View>
    );
}

