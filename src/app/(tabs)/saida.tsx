// Imports de componentes
import { View, Text, Modal, StyleSheet, Alert, TextInput, ScrollView } from "react-native";
import { colors } from "@/styles/colors";
import Header from "@/components/header";
import { Button } from "@rneui/base";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import CardBlank from "@/components/cardBlank";

export default function Saida() {
    // Constantes
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [qrCodeValue, setQrCodeValue] = useState<string>(""); // Tipando como string
    const qrCodeLock = useRef(false);

    // Função para abrir o modal da câmera
    async function handleOpenCamera() {
        try {
            const { granted } = await requestPermission();
            if (!granted) {
                return Alert.alert("Camera", "Você precisa habilitar a permissção da câmera!");
            }
            setModalIsVisible(true);
            qrCodeLock.current = false;
        } catch (error) {
            console.log(error);
        }
    }

    // Função de leitura do QR code
    function handleQRCodeRead(data: string) {
        setQrCodeValue(data);
        setModalIsVisible(false);
        Alert.alert("QrCode lido com sucesso!", `Texto: ${data}`);
    }

    // Renderização dos componentes
    return (
        <View style={style.mainContainer}>
            <Header />
            <ScrollView style={style.container}>
                <Text style={style.title}>Formulário de Saída</Text>

                <View style={style.formContainer}>
                    <Button
                        buttonStyle={style.button}
                        titleStyle={{ textAlign: "center", width: "100%" }}
                        title="Ler QrCode"
                        onPress={handleOpenCamera}
                    />
                    <Text style={style.label}>Código do Produto</Text>
                    <TextInput style={style.input} value={qrCodeValue} onChangeText={(text) => setQrCodeValue(text)} placeholder="Digite o valor ou leia o QrCode" />
                    <Text style={style.label}>Matrícula</Text>
                    <TextInput style={style.input} placeholder="Informe a matrícula" />
                    <Text style={style.label}>Quantidade</Text>
                    <TextInput style={style.input} placeholder="Informe a quantidade" />
                    <Text style={style.label}>Destino</Text>
                    <TextInput style={style.input} placeholder="Informe o Destino" />
                </View>

                <Modal visible={modalIsVisible} style={{ flex: 1 }}>
                    <CameraView
                        style={{ flex: 1 }}
                        facing="back"
                        onBarcodeScanned={({ data }) => {
                            if (data && !qrCodeLock.current) {
                                qrCodeLock.current = true;
                                setTimeout(() => handleQRCodeRead(data), 900);
                            }
                        }} />
                    <View style={style.footer}>
                        <Button
                            buttonStyle={style.cancelButton}
                            title="Cancelar"
                            onPress={() => setModalIsVisible(false)} />
                    </View>
                </Modal>
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
        padding: 10,
        marginTop: 20,
        borderRadius: 12,
        alignItems: "center", // Centraliza o conteúdo (texto)
        justifyContent: "center", // Centraliza o conteúdo (texto)
        width: "80%",
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