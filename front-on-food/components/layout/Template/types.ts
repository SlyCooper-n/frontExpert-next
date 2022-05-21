import { ReactNode } from "react";

export type TemplateProps = {
  type?: string;
  title?: string;
  children: ReactNode | ReactNode[];
};
