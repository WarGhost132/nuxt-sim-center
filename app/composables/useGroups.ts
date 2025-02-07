import axios from "axios";
import { API_BASE_URL } from "~/libs/app.constants";

export interface IGroup {
  id: string;
  name: string;
  studentsCount: number;
  faculty: string;
  specialization: string;
}

let groupsCache: IGroup[] = [];

export async function getGroupsAsync(): Promise<IGroup[]> {
  if (groupsCache.length > 0) return groupsCache;

  try {
    const response = await axios.get<IGroup[]>(`${API_BASE_URL}/groups`);
    groupsCache = response.data || [];
    return groupsCache;
  } catch (error) {
    console.error("getGroupsAsync Error:", error);
    return [];
  }
}
