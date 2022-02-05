import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = (toReset = undefined) => {
    setValue(toReset);
  };

  return [{ value, onChange }, resetValue];
}
