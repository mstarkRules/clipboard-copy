import React from "react";

interface ButtonProps {
  text: string;
  clipboard?: string;
}

export function CopyButton(props: ButtonProps) {
  return <div>{props.text}</div>;
}
