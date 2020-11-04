import MapView from "react-native-maps";
import React from "react";


const App = () => {
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
