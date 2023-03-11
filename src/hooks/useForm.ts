import { useState } from "react";

export function useForm<T = Record<string, any>>(initialValues: T) {
  const [formValue, setFormValue] = useState(initialValues);
  const handleChange = (value: T) => {
    setFormValue(value);
  };
  return { formValue, onChange: handleChange };
}
