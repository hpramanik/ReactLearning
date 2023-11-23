export interface RowColProps<T extends object> {
  key: keyof T;
  render?: (data: T) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ListRowProps<T extends object> {
  rowItem: T;
  rowUniqueIdentifierColName: keyof T;
  cols: Array<RowColProps<T>>;
  className?: string;
  style?: React.CSSProperties;
}

export const ListRow = <T extends object>({
  rowItem,
  rowUniqueIdentifierColName,
  cols,
  className,
  style,
}: ListRowProps<T>) => {
  const renderTableData = () => {
    return cols.map(col => {
      return (
        <td
          className={col.className}
          style={col.style}
          key={`${String(col.key)}${rowItem[rowUniqueIdentifierColName]}`}
        >
          {col.render ? col.render(rowItem) : String(rowItem[col.key])}
        </td>
      );
    });
  };

  return (
    <tr className={className} style={style}>
      {renderTableData()}
    </tr>
  );
};
