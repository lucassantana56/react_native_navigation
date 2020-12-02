import MapView from "react-native-maps";
import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {AxiosInstance as axios} from "axios";

const App = ({route}) => {
    const navigation = useNavigation();
    const restaurant = route.params.res;
    const userData = route.params.userLocation;
    const [data, setData] = useState([]);

    useEffect(() => {
        navigation.addListener(global.socket.on("driver_position", (data) => {
            //console.log("Log: socket postions");
            console.log(data);
            setData(data);
            updateMap();
        }));
    }, []);

    useEffect(() => {
        updateMap();
    }, []);

    async function updateMap() {
        console.log(restaurant);
        const uri = 'https://router.hereapi.com/v8/routes?transportMode=car&origin='
            + parseFloat(data.location.latitude) + ',' + parseFloat(data.location.longitude)
            + '&destination='
            + parseFloat(userData.latitude)
            + ',' + parseFloat(userData.longitude)
            + '&via=' + parseFloat(restaurant.latitude)
            + ',' + parseFloat(restaurant.longitude)
            + '&return=polyline&apiKey=zMtGeU15ojh5rJijjC_PCvBK8peeHzVbfAW90FOSnrw';
        axios.get(uri)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <MapView
            style={{flex: 1}}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}
        />
    );
};

export default App;
