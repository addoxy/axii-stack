import { useSession } from '@/lib/auth';

export const useUser = () => {
  const { data, error, isPending, isRefetching, refetch } = useSession();

  return {
    user: data?.user,
    isPending,
    error,
    isRefetching,
    refetch,
  };
};
