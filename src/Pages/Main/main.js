import React, {useEffect, useState} from 'react'
import {
    Image,
    View,
    TouchableOpacity,
    Text,
    Linking,
    TextInput,
    ScrollView,
    SafeAreaView,
    FlatList,
    ImageBackground
} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import api from "../../services/api";

import style from "../style";

export default function App() {
    const [restaurant, setRestaurant] = useState([]);

    function navigateToDetail(restaurant) {
        return undefined;
    }

    async function loadRestaurant() {
        const response = await api.post('search?lat=38.764069&lon=-9.155356&radius=1000&category=1,5,7,9,10').then(res => {
            console.log(res.data.restaurants);
            setRestaurant(res.data.restaurants);
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        loadRestaurant();
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <View style={style.defaultView}>
                <TextInput
                    style={style.inputText}
                />
            </View>

            <ScrollView
                horizontal={true}>
                <TouchableOpacity>
                    <FontAwesome5 name="hamburger" size={80} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="pizza-slice" size={80} color="orange"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="drink" size={80} color="green"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="fish" size={80} color="violet"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="cookie" size={80} color="brown"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="carrot" size={80} color="blue"/>
                </TouchableOpacity>
            </ScrollView>

            <FlatList
                style={style.restaurantList}
                data={restaurant}
                showsVerticalScrollIndicator={false}
                renderItem={({item: restaurant}) => (
                    <View style={style.restaurant}>
                        <ImageBackground imageStyle={{borderRadius: 20}}
                                         source={{uri: restaurant.restaurant.featured_image}}
                                         style={{
                                             flex: 1,
                                             resizeMode: "cover",
                                             justifyContent: "flex-start", alignItems: "center"
                                         }}>
                            <Text style={{color: "#fafafa", fontSize: 40}}>{restaurant.restaurant.name}</Text>
                        </ImageBackground>
                    </View>
                )}
            />

        </SafeAreaView>
    );
}

