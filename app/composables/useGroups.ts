import axios from "axios";
import { API_BASE_URL } from "~/libs/app.constants";

export interface IGroup {
  id: string;
  name: string;
  studentsCount: number;
  faculty: string;
  specialization: string;
}

export async function getGroupsAsync(): Promise<IGroup[]> {
  try {
    const response = await axios.get<IGroup[]>(`${API_BASE_URL}/groups`);

    if (response.data) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error("getGroupsAsync Error:", error);
    return [];
  }
}
