import React from "react";
import { FlatList, ImageBackground, View } from "react-native";
import { IPage } from "../../../App";
import { ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) { 
    const slide2 = require("../../assets/slide2.png")
    const slide2Texts = [
        { id: '1', text: 'Contate um motorista' },
        { id: '2', text: 'Envie o seu destino' },
        { id: '3', text: 'Busque o melhor caminho com o mínimo de trânsito' },
    ]
    return (
        <ImageBackground source={slide2} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Sistema de corridas'/>
                <FlatList
                    data={slide2Texts}
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
                <ComponentButtonSlider onPressI={() => setPageI(5)} />
            </View>
        </ImageBackground>
    );
}
