import type { TimeResponse } from '../../types/timeResponse';

interface MoreInfoProps {
  data: TimeResponse | null;
  isVisible: boolean;
  onToggle: () => void;
}

const MoreInfo = ({ data, isVisible, onToggle }: MoreInfoProps) => {
  return (
    <div>
      <button onClick={onToggle}>
        {isVisible ? 'Hide more info' : 'Show more info'}
      </button>
      {isVisible && (
        <>
          <p>Day of year: {data?.day_of_year}</p>
          <p>Day of week: {data?.day_of_week}</p>
          <p>Week numbers: {data?.week_number}</p>
        </>
      )}
    </div>
  );
};

export default MoreInfo;
