export type TButton = {
  variant?: 'default' | 'gradient' | 'auth';
  subClass?: string;
  authIcon?: 'github';
  title: string;
  click: () => void;
};
