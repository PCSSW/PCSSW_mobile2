import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface, ComponentLoading } from '../../components';
import { LoginTypes } from '../../navigations/login.navigations';
import { IRegister } from '../../services/data/User';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';


export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Cadastrar({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleRegister() {
        try {
            setIsLoading(true)
            if (data?.name && data.email && data.password) {
                const response = await apiUser.register(data)
                Alert.alert('$(response.data.name) cadastrado com sucesso!')
                navigation.navigate('Login')
            } else {
                Alert.alert("Preencha todos os campos!")
            }
        } catch (error) {
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            let message = ""
            if (errData) {
                for (const iterator of errData.errors)
                    message = '${message} ${iterator.message} \n'
            }
        } finally {
            setIsLoading(false)
        }
    }

    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (
                <View style={styles.container}>
                    <KeyboardAvoidingView>
                        <Text style={styles.title}>Cadastre-se</Text>
                        <View style={styles.formRow}>
                            <FontAwesome5 name="user-alt" style={styles.icon} />
                            <TextInput
                                placeholder="Nome"
                                placeholderTextColor={colors.thirdLight}
                                autoCapitalize="none"
                                style={styles.input}
                                onChangeText={(i) => handleChange({ name: i })}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <MaterialIcons name="email" style={styles.icon} />
                            <TextInput
                                placeholder="E-mail"
                                placeholderTextColor={colors.thirdLight}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                style={styles.input}
                                onChangeText={(i) => handleChange({ email: i })}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <FontAwesome5 name="key" style={styles.icon} />
                            <TextInput
                                placeholder="Senha"
                                placeholderTextColor={colors.thirdLight}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                style={styles.input}
                                onChangeText={(i) => handleChange({ password: i })}
                            />
                        </View>
                        <ComponentButtonInterface
                         title="Salvar" 
                         type="secondary" 
                         onPressI={handleRegister} />
                        <ComponentButtonInterface title="Voltar" type="primary" onPressI={() => navigation.navigate('Login')} />
                    </KeyboardAvoidingView>
                </View>
            )}
        </>
    );
}