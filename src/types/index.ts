
export interface IPost {
  id: string,
  createdAt: string,
  title: string,
  preview: string,
  image: string,
  description: string,
}

export interface IImageProps {
  src?: string;
  alt?: string;
}

export type ButtonTheme = 'primary' | 'secondary' | 'transparent';

export interface IButtonProps {
  disabled?: boolean;
  title?: string;
  theme?: ButtonTheme;
  rounded?: boolean;
}

export interface IPaginationProps {
  maxPage: number;
  currentPage: number;
}

export interface ILink {
  href: string;
  title: string;
}

export interface ILocation {
  title: string;
  description: string[],
  link?: string;
}