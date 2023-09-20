import React from "react";
import { View, Text } from "react-native";
import DetailsView from "./components/details.view";
import { useDetailsHooks } from "./details.hooks";

const DetailsScreen = () => {
    const { isLoading, detailsData } = useDetailsHooks()

    return <DetailsView
        isLoading={isLoading}
        detailsData={detailsData}
    />
}

export default DetailsScreen;