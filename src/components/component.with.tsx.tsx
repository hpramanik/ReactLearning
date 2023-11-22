export const ComponentWithTSX = () => {
  /* 
  Below TSX in return statement
  gets traspiled to below:
          "createElement('div', { style: { width: '100%' } }, [
            createElement('h1', null, title),
            createElement('br'),
            createElement('p', null, body),
          ])"
  */

  const title = 'Hello from Component With TSX Element';
  const body = 'Hello World';

  return (
    <div style={{ width: '100%' }}>
      <h1>{title}</h1>
      <br />
      <p>{body}</p>
    </div>
  );
};
