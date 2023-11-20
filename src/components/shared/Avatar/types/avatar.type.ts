import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TAvatar = {
  url?: string | StaticImport;
  name: string;
  email: string;
};
