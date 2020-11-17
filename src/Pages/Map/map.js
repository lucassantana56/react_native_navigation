import MapView from "react-native-maps";
import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";


const App = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.addListener(global.socket.on("driver_position", (data) => {
            //console.log("Log: socket postions");
            console.log(data);
        }));
    }, []);

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
