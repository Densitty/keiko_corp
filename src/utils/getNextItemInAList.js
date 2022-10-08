export default function getNextItemInAList(iterable, action) {
  const currentItemIndex = iterable.indexOf(action);
  // console.log("current action index is " + currentItemIndex);

  const nextItemIndex =
    currentItemIndex < iterable.length - 1 ? currentItemIndex + 1 : 0;

  // console.log("Next action index is " + nextValueIndex);
  const nextItem = iterable[nextItemIndex];

  return nextItem;
}
