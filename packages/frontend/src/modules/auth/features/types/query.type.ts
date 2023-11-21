import { AxiosError } from 'axios';

export interface AuthMutation<T, G> {
  mutationFn: (data: T) => Promise<G>;
  onSuccessMessage: string;
  onSuccessRedirect: string;
  onSuccess?: (data: G, message: string, redirect: string) => void;
  onError?: (error: AxiosError, message: string, redirect: string) => void;
}
