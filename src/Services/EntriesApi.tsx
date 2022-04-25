import { UseGetApi } from "./useApi";

export const getEntriesData = () => UseGetApi({ url: "/entries" });
