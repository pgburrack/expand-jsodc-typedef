type User = {
  username: string;
}

type Props = {
  user: User
}

type Example<T> = {
  [K in keyof T]: T[K] extends object ? Example<T[K]> : T[K];
} & {};

export function Component(props: Props) {
  return <div>Hello {props.user.username}</div>;
}
