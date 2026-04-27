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

  const bgImage =
    time.getHours() > 12
      ? 'bg-[url(./images/night-bg.jpg)] bg-cover bg-center bg-no-repeat'
      : 'bg-[url(./images/day-bg.avif)] bg-cover bg-center bg-no-repeat';

  useEffect(() => {
    document.body.className = bgImage;
  }, [bgImage]);

  return (
    <div className="flex flex-col py-10">
      <p className="text-white text-5xl">
        {time.getHours() > 12
          ? `Good afternoon it's currently`
          : `Good morning it's currently`}
      </p>

      <p className="text-white text-7xl">
        {time.toLocaleString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: timezone,
        })}
      </p>
      <p className="text-white text-4xl">IN {timezone?.replace('/', ' - ')}</p>
    </div>
  );
};

export default Clock;
