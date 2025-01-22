import { publicApi } from "./client";
import { Cafe, CafeDetail } from "src/types/search";

export const searchApi = {
  getCafes: async (query?: string, userId?: number, like?: boolean) => {
    let url = `/api/v1/cafe?`;
    // 검색어 params
    if (query && query.trim() !== "") {
      url += `search=${encodeURIComponent(query)}&`;
    }
    // 좋아요 params
    if (like !== undefined) {
      url += `like=${like}`;
    }

    const response = await publicApi.get<Cafe[]>(
      `/api/v1/cafe?search=${query}&like=${like}`
    );
    return response.result;
  },

  getCafeDetail: async (cafeId: number) => {
    const response = await publicApi.get<CafeDetail>(`api/v1/cafe/${cafeId}`);
    return response.result;
  },
};
