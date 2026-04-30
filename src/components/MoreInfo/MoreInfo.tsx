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
        className={`overflow-hidden transition-all duration-300 ease-in-out grid grid-cols-2 grid-rows-2 gap-3 rounded-md md:w-1/2 w-64 py-1 backdrop-blur-md
          ${isVisible ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-2 pointer-events-none'}
        `}>
        <p className="text-white">Day of year: {data?.day_of_year}</p>
        <p className="text-white">Day of week: {data?.day_of_week}</p>
        <p className="text-white">Week numbers: {data?.week_number}</p>
        <p className="text-white">
          Timezone: {data?.timezone.replaceAll('_', ' ').replaceAll('/', ' - ')}
        </p>
      </div>
    </div>
  );
};

export default MoreInfo;
