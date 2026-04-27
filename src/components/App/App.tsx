import Clock from '../Clock/Clock';
import Quote from '../Quote/Quote';
import CityTime from '../CityTime/CityTime';
import CitySelector from '../CitySelector/CitySelector';

import { useState } from 'react';

const App = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const handleSelect = (zone: string) => {
    setSelectedZone(zone);
  };

  return (
    <>
      <Quote />
      <Clock />
      {selectedZone && <CityTime zone={selectedZone} />}
      <CitySelector onSelect={handleSelect} />
    </>
  );
};

export default App;
