import React from "react";
import AddDataView from "./components/addData.view";
import { useAddDataHooks } from "./addData.hooks";

const AddDataScreen = () => {
    const {
        newDataText,
        onTextChange,
        onAddDataPress
    } = useAddDataHooks()

    return <AddDataView
        newDataText={newDataText}
        onTextChange={onTextChange}
        onAddDataPress={onAddDataPress}
    />
}

export default AddDataScreen;