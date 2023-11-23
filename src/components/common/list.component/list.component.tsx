import { ListRow, ListRowProps, RowColProps } from '.';

export interface ListColProps<T extends object> extends RowColProps<T> {
  label?: string;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
}

export interface ListComponentProps<T extends object> {
  cols: Array<ListColProps<T>>;
  data: Array<T>;
  rowUniqueIdentifierColName: keyof T;
  style?: React.CSSProperties;
  className?: string;
  emptyListRender?: () => React.ReactNode;
}

export const ListComponent = <T extends object>({
  cols,
  data,
  style,
  className,
  rowUniqueIdentifierColName,
  emptyListRender,
}: ListComponentProps<T>) => {
  const renderTableHeaders = () => {
    return (
      <tr>
        {cols.map(col => {
          const label = col.label ?? String(col.key);
          return (
            <th
              className={col.headerClassName}
              style={col.headerStyle}
              key={String(col.key)}
            >
              {label}
            </th>
          );
        })}
      </tr>
    );
  };

  const renderTableData = () => {
    return data.map(row => {
      const listRowProps: ListRowProps<T> = {
        rowItem: row,
        cols: cols,
        rowUniqueIdentifierColName: rowUniqueIdentifierColName,
      };

      return (
        <ListRow key={`${row[rowUniqueIdentifierColName]}`} {...listRowProps} />
      );
    });
  };

  if (!data.length) {
    return emptyListRender ? (
      emptyListRender()
    ) : (
      <div style={style} className={className}>
        No content found
      </div>
    );
  }

  return (
    <table style={style} className={className}>
      {renderTableHeaders()}
      {renderTableData()}
    </table>
  );
};
