export function verse(index: number): string {
  return index > 1
    ? `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index - 1} bottle${
        index > 2 ? 's' : ''
      } of beer on the wall.\n`
    : index === 1
    ? '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
    : 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
}

export function sing(initialBottlesCount?: number, takeDownCount?: number): string {
  let singingVerses = '';
  if (!initialBottlesCount) {
    initialBottlesCount = 99;
  }
  if (!takeDownCount) {
    takeDownCount = 0;
  }
  for (let count = initialBottlesCount; count >= takeDownCount; count--) {
    singingVerses = singingVerses + verse(count) + (count > takeDownCount ? '\n' : '');
  }
  return singingVerses;
}
