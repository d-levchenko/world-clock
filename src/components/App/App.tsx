import Clock from '../Clock/Clock';
import Quote from '../Quote/Quote';
import MoreInfo from '../MoreInfo/MoreInfo';

import fetchTime from '../../services/fetchTime';
import type { TimeResponse } from '../../types/timeResponse';

import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<TimeResponse | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetchTime.fetchTimeByIP().then(setData);
  }, []);

  return (
    <>
      <Quote />
      <Clock realTime={data} />
      <MoreInfo
        data={data}
        isVisible={showMore}
        onToggle={() => setShowMore(prev => !prev)}
      />
    </>
  );
};

export default App;
