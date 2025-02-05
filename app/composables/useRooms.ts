import axios from "axios";
import { API_BASE_URL } from "~/libs/app.constants";

export interface IRoom {
  id: string;
  name: string;
}

let roomsCache: IRoom[] = [];

export async function getRoomsAsync(): Promise<IRoom[]> {
  if (roomsCache.length > 0) return roomsCache;

  try {
    const response = await axios.get<IRoom[]>(`${API_BASE_URL}/rooms`);
    roomsCache = response.data || [];
    return roomsCache;
  } catch (error) {
    console.error("getRoomsAsync Error:", error);
    return [];
  }
}
