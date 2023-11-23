import { ListComponent } from './components/common/list.component';

function App() {
  const listItems: Array<{ id: string; name: string; url?: unknown }> = [
    { id: '1', name: 'Ram' },
    { id: '2', name: 'Sam' },
    { id: '3', name: 'Pam' },
  ];

  const cellStyle: React.CSSProperties = {
    textAlign: 'center',
    border: 'black',
    borderStyle: 'ridge',
  };
  return (
    <ListComponent
      style={{
        width: '100%',
        textAlign: 'center',
        border: 'black',
        borderStyle: 'groove',
      }}
      data={listItems}
      cols={[
        {
          key: 'id',
          label: 'EMP ID',
          style: cellStyle,
          headerStyle: cellStyle,
        },
        {
          key: 'name',
          label: 'NAME',
          style: cellStyle,
          headerStyle: cellStyle,
        },
        {
          key: 'url',
          label: 'PROFILE',
          render({ id, name }) {
            return (
              <a href="#">
                https://www.verizon.com/profiles/{id}-{name}
              </a>
            );
          },
          style: cellStyle,
          headerStyle: cellStyle,
        },
      ]}
      rowUniqueIdentifierColName="id"
    />
  );
}

export default App;
