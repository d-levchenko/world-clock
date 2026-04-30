import type { TimeResponse } from '../../types/timeResponse';

import { FaArrowDown } from 'react-icons/fa';

interface MoreInfoProps {
  data: TimeResponse | null;
  isVisible: boolean;
  onToggle: () => void;
}

const MoreInfo = ({ data, isVisible, onToggle }: MoreInfoProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="cursor-pointer bg-gray-300 rounded-md text-gray-600 py-2 px-4 flex gap-2 justify-center items-center mb-3">
        {isVisible ? 'Hide more info' : 'Show more info'}
        <FaArrowDown
          className={`transition-transform duration-300 ease-in-out ${isVisible ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-wrap gap-2
          ${isVisible ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-2 pointer-events-none'}
        `}>
        <p className="text-white basis-1/3">Day of year: {data?.day_of_year}</p>
        <p className="text-white basis-1/3">Day of week: {data?.day_of_week}</p>
        <p className="text-white basis-1/3">
          Week numbers: {data?.week_number}
        </p>
        <p className="text-white basis-1/3">Timezone: {data?.timezone}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
