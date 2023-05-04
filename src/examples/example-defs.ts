export type Example<T> = {
  [K in keyof T]: T[K] extends object ? Example<T[K]> : T[K];
} & {};
