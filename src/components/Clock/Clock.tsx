import { useEffect, useState } from 'react';
import times from '../../services/fetchTime';
import type { TimeResponse } from '../../types/timeResponse';

const Clock = () => {
  const [timezone, setTimezone] = useState<string | undefined>(undefined);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    times
      .fetchTimeByIP()
      .then((data: TimeResponse) => setTimezone(data.timezone));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <p>
        {time.toLocaleString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: timezone,
        })}
      </p>
      <p>
        {time.toLocaleString(undefined, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          timeZone: timezone,
        })}
      </p>
      <p>{timezone?.replace('/', ' - ')}</p>
    </div>
  );
};

export default Clock;
