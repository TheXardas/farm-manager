import { ReactNode } from 'react';

type PlaceholderProps = {
  children: ReactNode;
}

export default function Placeholder(props: PlaceholderProps) {
  return (
    <div>{props.children}</div>
  );
}