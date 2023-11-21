import { Spinner } from '@/components/shared';

const loading = () => {
  return (
    <div className="flex flex-col mt-auto h-screen justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
