import React from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { styles } from "./list.styles";

interface itemType {
    body: string;
    id: number;
    title: string;
    userId: number;
}

interface listViewProps {
    isLoading: boolean;
    listData: any[];
    searchText: string;
    onChangeSearchText: (text: string) => void;
    onListItemPress: (item: itemType, index: number) => void;
    isRefreshed: boolean;
    onRefresh: () => void;
    onIdFilterPress: () => void;
    onAddDataPress: () => void;
}

const ListView = (props: listViewProps) => {
    const {
        isLoading,
        listData,
        searchText,
        onChangeSearchText,
        onListItemPress,
        isRefreshed,
        onRefresh,
        onIdFilterPress,
        onAddDataPress,
    } = props

    const renderItem = (item, index) => {
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => onListItemPress(item, index)}>
                <Text numberOfLines={2} style={styles.titleText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder={"Search"}
                value={searchText}
                onChangeText={(text: string) => onChangeSearchText(text)}
            />
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => onIdFilterPress()} style={styles.buttonCont}>
                    <Text style={styles.buttonTitle}>Filter By Id:- 5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddDataPress()} style={styles.buttonCont}>
                    <Text style={styles.buttonTitle}>Add Data</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                {isLoading ?
                    <View style={styles.loader}>
                        <ActivityIndicator
                            size={"large"}
                            color={"black"}
                            animating={isLoading}
                        />
                    </View> :
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={listData}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => renderItem(item, index)}
                            maxToRenderPerBatch={10}
                            onEndReachedThreshold={1}
                            removeClippedSubviews={true}
                            extraData={listData}
                            refreshing={isRefreshed}
                            onRefresh={() => onRefresh()}
                        />
                    </View>

                }
            </View>
        </View>
    )
}

export default ListView;