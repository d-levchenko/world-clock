import { useState, useEffect } from 'react';
import fetchTime from '../../services/fetchTime';

interface CitySelectorProps {
  onSelect: (zone: string) => void;
}

const CitySelector = ({ onSelect }: CitySelectorProps) => {
  const [zones, setZones] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetchTime.fetchTimezones().then(setZones);
  }, []);

  const filtered =
    query.length > 2
      ? zones.filter(zone => zone.toLowerCase().includes(query.toLowerCase()))
      : [];

  return (
    <div className="flex flex-col py-10">
      <input
        className="block w-2/5 md:w-1/4 rounded-md border-0 py-1.5 px-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.map(zone => (
        <p
          key={zone}
          className="text-white text-5xl cursor-pointer"
          onClick={() => onSelect(zone)}>
          {zone}
        </p>
      ))}
    </div>
  );
};

export default CitySelector;
