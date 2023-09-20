import { useSelector } from "react-redux";

interface detailsHooksProps {
    isLoading: boolean;
    detailsData: any;
}

export const useDetailsHooks = (): detailsHooksProps => {
    const postStore = useSelector((state: any) => state?.postList)
    const { isLoading, detailsData } = postStore

    return {
        isLoading,
        detailsData
    }
}