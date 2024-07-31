import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Prueba() {
    const [modal, setModal] = useState(false);
    const [inputText, setInputText] = useState("");
    
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Modal visible={modal} animationType="slide" transparent={true}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.5)"
                }}>
                    <View style={{
                        width: width * 0.8,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        padding: 20,
                        alignItems: "center",
                    }}>
                        <TouchableOpacity 
                            onPress={() => setModal(false)} 
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                            }}
                        >
                            <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: width * 0.05, fontWeight: "700", marginBottom: 20 }}>
                            Ingrese Datos
                        </Text>
                        <TextInput
                            style={{
                                width: '100%',
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 5,
                                paddingLeft: 10,
                                marginBottom: 20,
                            }}
                            placeholder="Escriba aquí"
                            onChangeText={setInputText}
                            value={inputText}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setModal(false);
                                console.log(inputText); // Puedes manejar el texto ingresado aquí
                            }}
                            style={{
                                width: width * 0.5,
                                height: height * 0.06,
                                backgroundColor: "black",
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Text style={{
                                fontSize: width * 0.04,
                                fontWeight: "700",
                                color: "#fff",
                            }}>
                                Guardar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => setModal(true)}
                style={{
                    width: width * 0.9,
                    height: height * 0.07,
                    backgroundColor: "black",
                    borderRadius: width * 0.9,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: width * 0.04,
                        fontWeight: "700",
                        color: "#fff",
                    }}
                >
                    Abrir modal
                </Text>
            </TouchableOpacity>
        </View>
    );
}

