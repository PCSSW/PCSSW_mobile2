import React from "react";
import { FlatList, ImageBackground, View } from "react-native";
import { IPage } from "../../../App";
import { ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage) { 
    const slide3 = require("../../assets/slide3.png")
    const slide3Texts = [
        { id: '1', text: 'Garantia de eficiência nas corridas' },
        { id: '2', text: 'Veículos de qualidade' },
        { id: '3', text: 'Motoristas experientes na área' },
    ]
    return (
        <ImageBackground source={slide3} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Sistema de satisfação'/>
                <FlatList
                    data={slide3Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker= {item.text} /> 
                    }
                    keyExtractor= {(item) => item.id}
                />
            </View>    
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} />
            </View>
        </ImageBackground>
    );
}
