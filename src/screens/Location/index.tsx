import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Region, Marker, Polyline } from "react-native-maps"
import { styles } from "./styles"
import { colors } from '../../styles/colors';

export function LocationScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [region, setRegion] = useState<Region>()
    const [marker, setMarker] = useState<Region[]>()
    const [coords, setCoords] = useState<ICoords[]>([])

    type ICoords = {
        latitude: number
        longitude: number
    }

    useEffect(() => {
        let subscription: Location.LocationSubscription
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar a localização foi negada');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
            })
            setMarker([{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
            subscription = await Location.watchPositionAsync({
                accuracy: Location.LocationAccuracy.High,
                timeInterval: 1000,
                distanceInterval: 1
            }, (location) => {
                setCoords((prevState) => [...prevState, location.coords])
            });
        })();

        return () => {
            if(subscription) {
                subscription.remove()
            }
        }
    }, []);
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            {region ? (
                <MapView region={region} style={styles.map} showsUserLocation={true} >
                    {marker && marker.map((i) => (
                    <Marker key = {i.latitude} coordinate = {i} />      
                    ))}
                    {coords && <Polyline
                        coordinates={coords}
                        strokeColor={colors.black}
                        strokeWidth={7}
                    />}
                </MapView>    
           ) : (
                <Text style={styles.paragraph}>{text}</Text>
            )}
        </View>
    );
}
