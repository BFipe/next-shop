export type ServerResponse<T> = {
  status: number;
  info: string;
  data: T | null;
};
