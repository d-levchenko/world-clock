import { useEffect, useState } from 'react';
import times from '../../services/fetchTime';
import type { TimeResponse } from '../../types/timeResponse';

const Clock = () => {
  const [time, setTime] = useState<TimeResponse | null>(null);

  useEffect(() => {
    const fetchClock = async () => {
      try {
        const response = await times.fetchTimeByIP();
        setTime(response);
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    fetchClock();
  }, []);

  const parseDate = (datetime: string) => {
    const fixed = datetime.replace(/(\.\d{3})\d+/, '$1');
    return new Date(fixed);
  };

  const date = parseDate(time?.datetime || '');

  const timeStr = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const day = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="clock">
      <h1>{time ? timeStr : 'Loading...'}</h1>
      <h2>{time ? day : 'Loading...'}</h2>
      <h2>{time ? time.timezone : 'Loading...'}</h2>
    </div>
  );
};

export default Clock;
