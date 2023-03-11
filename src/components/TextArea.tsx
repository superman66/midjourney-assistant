"use client";
import React from "react";
import { Input, InputProps } from "rsuite";

const Textarea = (props: InputProps & { rows: number }) => (
  <Input {...props} as="textarea" />
);

Textarea.displayName = "Textarea";
export default Textarea;
