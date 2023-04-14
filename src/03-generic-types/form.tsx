import { FC, useState } from "react";
import { LabeledInput } from "../components/labeled-input";


/*
TODO
- Update the type 'Props' to avoid using the any keyword
 */

type Props = {
  header: string;
  initialValues: any;
  onSubmit: (values: any) => void;
};

export const ExampleForm: FC<Props> = ({ header, initialValues, onSubmit }) => {
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
          <span>{key}:   </span>
        </LabeledInput>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
