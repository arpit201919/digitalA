import { useNavigation, useIsFocused, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPostApi } from "../../store/slice";

interface addDataHooksProps {
    newDataText: string;
    onTextChange: (text: string) => void;
    onAddDataPress: () => void;
}

export const useAddDataHooks = (): addDataHooksProps => {
    const [newDataText, setNewDataText] = useState("")
    const params = useRoute().params
    const navigation = useNavigation<any>()

    const onTextChange = (text: string) => {
        setNewDataText(text)
    }

    const onAddDataPress = () => {
        const newObj = {
            "body": "dummy text",
            "id": 101,
            "title": newDataText,
            "userId": 1
        }

        params?.addDataToList(newObj)
        navigation.goBack()
    }

    return {
        newDataText,
        onTextChange,
        onAddDataPress
    }
}