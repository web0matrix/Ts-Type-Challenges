type MyPick<T, K extends keyof T> = {
  [U in K]: T[U];
}

type MyPick2<T, K> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}
