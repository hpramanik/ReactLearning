import { useState } from 'react';
import { Increment } from './increment';

export const IncrementApp = () => {
  const [counter, setCounter] = useState<number>(0);

  return <Increment value={counter} setValue={setCounter} />;
};
