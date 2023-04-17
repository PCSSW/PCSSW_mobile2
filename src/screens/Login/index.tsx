import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import { ButtonInterface } from "../../components/ButtonInterface";
import {LoginTypes} from "../../navigations/login.navigations"
import { ComponentButtonInterface } from "../../components";

export function Login({navigation}:LoginTypes){
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" size={24} color="gold" />
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor={colors.thirdLight}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="vpn-key" size={24} color="gold" />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.thirdLight}
                        secureTextEntry = {true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="cadastre-se" type="primary" onPressI={() => { navigation.navigate('Cadastrar') }} />
            </KeyboardAvoidingView>   
        </View>
    )
}