export interface IncrementProps {
  value: Readonly<number>;
  setValue: (newValue: number) => void;
}

export const Increment = ({
  value,
  setValue: setNumber,
}: Readonly<IncrementProps>) => {
  return (
    <div>
      <span>{value}</span>
      <br />
      <button
        onClick={() => {
          setNumber(value + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
