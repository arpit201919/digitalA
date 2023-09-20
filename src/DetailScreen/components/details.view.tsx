import React from "react";
import { View, Text } from "react-native";
import { styles } from "./details.styles";

interface detailViewProps {
    isLoading: boolean;
    detailsData: any;
}

const DetailsView = (props: detailViewProps) => {
    const { isLoading, detailsData } = props

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Title: {detailsData?.title}</Text>
            <Text style={styles.textStyle}>Body: {detailsData?.body}</Text>
        </View>
    )
}

export default DetailsView;