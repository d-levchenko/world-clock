import axios from 'axios';
import type { TimeResponse } from '../types/timeResponse';

const BASE_URL = `https://time.now/developer/api`;

const fetchTime = async (zone: string): Promise<TimeResponse> => {
  try {
    const { data } = await axios.get<TimeResponse>(
      `${BASE_URL}/timezone/${zone}`,
    );

    return data;
  } catch (err) {
    console.error('Error fetching time:', err);
    throw err;
  }
};

const fetchTimeByIP = async (): Promise<TimeResponse> => {
  try {
    const { data } = await axios.get<TimeResponse>(`${BASE_URL}/ip`);

    return data;
  } catch (err) {
    console.error('Error fetching time:', err);
    throw err;
  }
};

const fetchTimezones = async (): Promise<string[]> => {
  try {
    const { data } = await axios.get<string[]>(`${BASE_URL}/timezone`);

    return data;
  } catch (err) {
    console.error('Error fetching timezones:', err);
    throw err;
  }
};

export default { fetchTime, fetchTimeByIP, fetchTimezones };
