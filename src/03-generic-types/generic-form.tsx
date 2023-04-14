import { useState } from "react";
import { LabeledInput } from "../components/labeled-input";

type Props<TValues> = {
  header: string;
  initialValues: TValues;
  onSubmit: (values: TValues) => void;
};


// Record<Keys, Type> is an object type whose keys is of type 'Keys' and values are of type 'Type'.

export const GenericForm = <TValues extends Record<string, any>>({
  header,
  initialValues,
  onSubmit,
}: Props<TValues>) => {
  const [values, setValues] = useState(initialValues);

  return (
    <form onSubmit={() => onSubmit(values)}>
      <h3>{header}</h3>

      {Object.keys(values).map((key) => (
        <LabeledInput
          key={key}
          value={values[key]}
          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
        >
          <span>{key}:</span>
        </LabeledInput>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
