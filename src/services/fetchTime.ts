import axios from 'axios';
import type { TimeResponse } from '../types/timeResponse';

const fetchTime = async (zone: string): Promise<TimeResponse> => {
  const url = `https://time.now/developer/api/timezone/${zone}`;

  try {
    const { data } = await axios.get<TimeResponse>(url);

    return data;
  } catch (err) {
    console.error('Error fetching time:', err);
    throw err;
  }
};

const fetchTimeByIP = async (): Promise<TimeResponse> => {
  const url = 'https://time.now/developer/api/ip';

  try {
    const { data } = await axios.get<TimeResponse>(url);

    return data;
  } catch (err) {
    console.error('Error fetching time:', err);
    throw err;
  }
};

export default { fetchTime, fetchTimeByIP };
