import axios from "axios";
import { API_BASE_URL } from "~/libs/app.constants";

export interface ISession {
  id: string;
  date: string;
  time: string;
  status: string;
  name: string;
  type: string;
  room: string[];
  group: string;
}

export async function getSessionsAsync(): Promise<ISession[]> {
  try {
    const response = await axios.get<ISession[]>(`${API_BASE_URL}/sessions`);

    if (response.data) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error("getSessionsAsync Error:", error);
    return [];
  }
}
