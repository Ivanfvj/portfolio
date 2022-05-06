export interface Technology {
  text: string;
}

export type ProjectInfo = {
  title: string;
  id: string;
  headline?: string;
  description?: string;
  image?: string;
  stack?: Technology[];
  tags?: string[];
  categories?: Technology[];
  link?: string;
  to?: string;
  featured?: boolean;
};
