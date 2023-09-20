import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#17077C",
        padding: 20
    },
    inputStyle: {
        backgroundColor: "#F8B19A",
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 18
    },
    listContainer: {
        backgroundColor: "#f9f8f9",
        marginTop: 20,
        borderRadius: 8,
        flex: 1
    },
    loader: {
        flex: 1
    },
    titleText: {
        color: "black",
        fontSize: 15
    },
    listItem: {
        marginHorizontal: 10,
        borderWidth: 1,
        marginVertical: 6,
        padding: 10,
        height: 65,
        justifyContent: "center",
        borderRadius: 8
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    buttonCont: {
        backgroundColor: "#848463",
        width: "45%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    buttonTitle: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontStyle: "italic"
    }
})