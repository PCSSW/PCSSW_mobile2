import { FlatList, ImageBackground, View } from "react-native";
import { IPage } from "../../../App";
import { ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) { 
    const slide1 = require("../../assets/slide2.png")
    const slide1Texts = [
        { id: '1', text: 'Localize um veículo disponível' },
        { id: '2', text: 'Verifique se está a caminho' },
        { id: '3', text: 'Veja todo o trajeto' },
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Sistema de mapeamento'/>
                <FlatList
                    data={slide1Texts}
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
