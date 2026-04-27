import times from '../../services/fetchTime';
import type { TimeResponse } from '../../types/timeResponse';
import { useEffect, useState } from 'react';

interface CityTimeProps {
  zone: string;
}

const CityTime = ({ zone }: CityTimeProps) => {
  const [timezone, setTimezone] = useState<string | undefined>(undefined);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    times
      .fetchTime(zone)
      .then((data: TimeResponse) => setTimezone(data.timezone));
  }, [zone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col py-10">
      <p className="text-white md:text-3xl xl:text-5xl">
        {time.toLocaleString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: timezone,
        })}
      </p>
      <p className="text-white text-4xl">
        IN {timezone?.replace('/', ' - ').replace('_', ' ')}
      </p>
    </div>
  );
};

export default CityTime;
