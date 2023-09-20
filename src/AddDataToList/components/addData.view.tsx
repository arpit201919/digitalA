import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./addData.styles";

interface addDataProps {
    newDataText: string;
    onTextChange: (text: string) => void;
    onAddDataPress: () => void
}

const AddDataView = (props: addDataProps) => {
    const { newDataText, onTextChange, onAddDataPress } = props

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Add New Data"
                value={newDataText}
                onChangeText={(text: string) => onTextChange(text)}
            />
            <TouchableOpacity onPress={() => onAddDataPress()} style={styles.buttonCont}>
                <Text style={styles.buttonTitle}>Add Data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddDataView;