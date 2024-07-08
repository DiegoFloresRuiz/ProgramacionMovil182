import { Entypo, fontWeight } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Prueba() {
    const [modal, setModal] = useState(false);
    
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
                    <TouchableOpacity onPress={() => setModal(false)}>
                        <Text style={{ 
                        fontSize: width * 0.04,
                        fontWeight: "700",
                        color: "#fff", }}
                        >
                        Cerrar modal
                        </Text>
                    </TouchableOpacity>
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
