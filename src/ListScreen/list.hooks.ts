import { useNavigation, useIsFocused } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPostApi, addNewDataToList, callAddDetails } from "../../store/slice";

interface itemType {
    body: string;
    id: number;
    title: string;
    userId: number;
}

interface listHooks {
    isLoading: boolean;
    listData: any[];
    searchText: string;
    onChangeSearchText: (text: string) => void;
    isRefreshed: boolean;
    getPostData: () => void;
    onIdFilterPress: () => void;
    onListItemPress: (item: itemType, index: number) => void;
    onAddDataPress: () => void;
}

export const useListHooks = (): listHooks => {
    const [listData, setListData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [tempData, setTempData] = useState([]);
    const [isRefreshed, setIsRefresed] = useState(false)
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const postStore = useSelector((state: any) => state?.postList)
    const { isLoading, postList } = postStore

    useEffect(() => {
        getPostData()
    }, [])

    useEffect(() => {
        if (postList) {
            setListData(postList)
            setTempData(postList)
            setIsRefresed(false)
        }
    }, [postList])

    const getPostData = () => {
        setIsRefresed(true)
        dispatch(callGetPostApi())
    }

    const onChangeSearchText = (text: string) => {
        if (text) {
            const newData = tempData.filter(
                (item: any) => {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setListData(newData);
            setSearchText(text)
        } else {
            setListData(tempData);
            setSearchText(text)
        }
    }

    const onIdFilterPress = () => {
        const newData = tempData.filter(
            (item: any) => {
                return item.userId === 5;
            });
        setListData(newData);
    }

    const onAddDataPress = () => {
        navigation.navigate("AddData", { addDataToList: (data: any) => addDataToList(data) })
    }

    const addDataToList = (data: itemType) => {
        const tempArr: any = [...tempData]
        tempArr.unshift(data)
        dispatch(addNewDataToList(tempArr))
    }

    const onListItemPress = (item: itemType, index: number) => {
        dispatch(callAddDetails(item))
        navigation.navigate("Details")
    }

    return {
        isLoading,
        listData,
        searchText,
        onChangeSearchText,
        isRefreshed,
        getPostData,
        onIdFilterPress,
        onListItemPress,
        onAddDataPress
    }
}