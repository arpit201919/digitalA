import React from "react";
import ListView from "./components/list.view";
import { useListHooks } from "./list.hooks";

const ListScreen = () => {
    const {
        isLoading,
        listData,
        searchText,
        onChangeSearchText,
        isRefreshed,
        getPostData,
        onIdFilterPress,
        onAddDataPress,
        onListItemPress
    } = useListHooks()

    return <ListView
        isLoading={isLoading}
        listData={listData}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
        isRefreshed={isRefreshed}
        onRefresh={getPostData}
        onIdFilterPress={onIdFilterPress}
        onAddDataPress={onAddDataPress}
        onListItemPress={onListItemPress}
    />
}

export default ListScreen;