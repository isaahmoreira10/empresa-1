import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../global';

export default function Home() {
    return (
        <View style={globalStyles.section}>
            <Text style={globalStyles.title}>Bem-vindo á nossa empresa</Text>
            <Text>Somos líderes em soluções tecnológicas para o seu negócio.</Text>
        </View>
    );
}