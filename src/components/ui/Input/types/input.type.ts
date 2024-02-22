export type TInput = {
  placeholder: string;
  type: string;
  name: string;
  required: boolean;
  inputSubClass?: string;
  labelSubClass?: string;
  label?: string;
  onChange?: () => void;
};
