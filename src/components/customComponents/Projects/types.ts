// types.ts
export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    priority: boolean;
  };
  content: string[];
  registerLink: string;
  originalPrice: string;
  price: string;
  projectCode?: string;
}