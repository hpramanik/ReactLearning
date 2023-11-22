export interface IncrementProps {
  value: number;
  setValue: (newValue: number) => void;
}

export const Increment = ({ value, setValue: setNumber }: IncrementProps) => {
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
