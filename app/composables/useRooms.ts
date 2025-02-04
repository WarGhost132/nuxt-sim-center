import axios from "axios";
import { API_BASE_URL } from "~/libs/app.constants";

export interface IRoom {
  id: string;
  name: string;
}

export async function getRoomsAsync(): Promise<IRoom[]> {
  try {
    const response = await axios.get<IRoom[]>(`${API_BASE_URL}/rooms`);

    if (response.data) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error("getRoomsAsync Error:", error);
    return [];
  }
}
