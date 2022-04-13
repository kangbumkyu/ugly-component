import React, { ReactElement } from "react";
import "./Column.css";

interface ColumnProps {
  children: ReactElement | Array<ReactElement>;
}

function Column({ children }: ColumnProps) {
  return <div className="column">{children}</div>;
}

export default Column;
