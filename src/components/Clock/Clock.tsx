import { useEffect, useState } from 'react';

import type { TimeResponse } from '../../types/timeResponse';

import { BsSun } from 'react-icons/bs';
import { IoMoon } from 'react-icons/io5';

interface ClockProps {
  realTime: TimeResponse | null;
}

const Clock = ({ realTime }: ClockProps) => {
  const [time, setTime] = useState(new Date());

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
      <p className="text-white md:text-3xl xl:text-5xl text-2xl flex gap-3">
        <span className="flex justify-center items-center">
          {time.getHours() > 12 ? <IoMoon size={30} /> : <BsSun size={25} />}
        </span>
        {time.getHours() > 12
          ? `Good afternoon it's currently`
          : `Good morning it's currently`}
      </p>

      <p className="text-white text-4xl xl:text-7xl md:text-5xl">
        {time.toLocaleString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: realTime?.timezone,
        })}
      </p>
      <p className="text-white text-3xl md:text-4xl">
        IN {realTime?.timezone?.replace('/', ' - ').replace('_', ' ')}
      </p>
    </div>
  );
};

export default Clock;
