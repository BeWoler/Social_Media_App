export type TButton = {
  variant?: 'default' | 'gradient';
  subClass?: string;
  title: string;
  click: () => void;
};
