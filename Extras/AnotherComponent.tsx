import React, { useEffect, useState } from 'react';
import getApiData from './api';

const AnotherComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const result = await getApiData('https://api.example.com/data');
      setData(result);
    }

    loadData();
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default AnotherComponent;
