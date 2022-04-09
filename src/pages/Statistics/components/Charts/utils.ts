
export function increaser(arr: number[]): number[] {
  const last: number[] = [];
  arr.reduce((acc, cur) => {
    acc += cur;
    last.push(acc);
    return acc;
  }, 0);

  return last;
}

