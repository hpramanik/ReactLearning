import { createElement } from 'react';

export const ComponentWithCreateElement = () => {
  /* 
  Below is what JSX internally gets converted to. 
  This JSX "<h1>Hello from Component With Create Element</h1>" gets converted to below syntax. 
  */
  return createElement('h1', null, 'Hello from Component With Create Element');
};
