import React, { useEffect, useRef, useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return {
    value,
    ref,
    onChange,
  };
};
