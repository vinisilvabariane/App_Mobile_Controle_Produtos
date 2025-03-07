// Imports de componentes
import { View, Text, Modal, StyleSheet, Alert, TextInput, ScrollView } from "react-native";
import { colors } from "@/styles/colors";
import Header from "@/components/header";
import { Button } from "@rneui/base";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import CardBlank from "@/components/cardBlank";

export default function Saida() {

    // Renderização dos componentes
    return (
        <View style={style.mainContainer}>
            <Header />
            <ScrollView style={style.container}>
                <Text style={style.title}>Formulário de Entrada</Text>
                <View style={style.formContainer}>
                    <Text style={style.label}>Código do Produto</Text>
                    <TextInput style={style.input} placeholder="Informe o código"/>
                    <Text style={style.label}>Requisitante</Text>
                    <TextInput style={style.input} placeholder="Informe o Requisitante"/>
                    <Text style={style.label}>Destino</Text>
                    <TextInput style={style.input} placeholder="Informe o Destino"/>
                    <Text style={style.label}>Localização</Text>
                    <TextInput style={style.input} placeholder="Informe a Localização"/>
                    <Text style={style.label}>Quantidade</Text>
                    <TextInput style={style.input} placeholder="Informe a Quantidade"/>
                    <Text style={style.label}>Observação</Text>
                    <TextInput style={style.input} placeholder="Deixe uma Observação"/>
                </View>
            </ScrollView>
        </View>
    );
}

// Estilos únicos para a página de saída
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white[600],
    },
    container: {
        padding: 20,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.blue[800],
        marginBottom: 20,
        textAlign: "center",
    },
    formContainer: {
        backgroundColor: colors.white[800],
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        color: colors.blue[800],
        marginTop: 10,
        alignSelf: "flex-start",
    },
    input: {
        height: 40,
        borderColor: colors.blue[800],
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 10,
        marginTop: 10,
        width: "100%",
    },
    button: {
        backgroundColor: colors.blue[800],
        borderRadius: 12,
        marginTop: 20,
    },
    footer: {
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
    },
    cancelButton: {
        backgroundColor: colors.blue[600],
        borderRadius: 12,
    },
});