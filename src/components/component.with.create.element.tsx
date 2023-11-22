import { createElement } from 'react';

export const ComponentWithCreateElement = () => {
  /* 
  This TSX "<div style={{width: '100%'}}>
             <h1>Hello from Component With Create Element</h1>
             <br/>
             <p>Hello World</p>
            </div>"
  gets traspiled to below syntax. 
  */

  const title = 'Hello from Component With Create Element';
  const body = 'Hello World';

  return createElement('div', { style: { width: '100%' } }, [
    createElement('h1', null, title),
    createElement('br'),
    createElement('p', null, body),
  ]);
};
