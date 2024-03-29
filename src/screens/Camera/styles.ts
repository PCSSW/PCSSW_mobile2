import {StyleSheet, Dimensions} from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    img: {
      width: Dimensions.get('window').width * 0.7,
      height: Dimensions.get('window').width * 0.7, 

    },
    sorriso: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  });