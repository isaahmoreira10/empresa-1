import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../global';
 
export default function Footer() {
    return (
        <View style={globalStyles.footer}>
            <Text style={globalStyles.footerText}>
             2025 Minha Empresa. Todos os direitos reservados.
            </Text>
        </View>
    );
}