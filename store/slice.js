import { Alert } from 'react-native'
import { createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../utils/axios"


const initialState = {
    isLoading: false,
    postList: [],
    detailsData: null
}

export const postListSlice = createSlice({
    name: "postList",
    initialState: initialState,
    reducers: {
        addPostList: (state, action) => {
            state.postList = action.payload
            state.isLoading = false
        },
        loading: (state) => {
            state.isLoading = true
        },
        addNewDataToList: (state, action) => {
            state.postList = action.payload
            state.isLoading = false
        },
        detailsData: (state, action) => {
            state.detailsData = action.payload
            state.isLoading = false
        },
    }
})

export const {
    loading,
    addPostList,
    addNewDataToList,
    detailsData
} = postListSlice.actions

export const callGetPostApi = () => async (dispatch) => {
    dispatch(loading())
    try {
        const response = await axiosInstance.get("/posts")
        dispatch(addPostList(response.data))
    } catch (error) {
        Alert.alert(error)
    }
}

export const callAddDetails = (data) => (dispatch) => {
    dispatch(loading())
    try {
        dispatch(detailsData(data))
    } catch (error) {
        Alert.alert(error)
    }
}

export default postListSlice.reducer