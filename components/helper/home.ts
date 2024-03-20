import { sorted } from "@/types/type";
export function sortbyfun(
  setsortby: React.Dispatch<React.SetStateAction<sorted>>,
  key: string
) {
  setsortby((prev: sorted) => {
    const newState: sorted = Object.keys(prev).reduce(
      (acc, currKey) => ({ ...acc, [currKey]: false }),
      {} as sorted
    );
    newState[key as keyof sorted] = true;
    return newState;
  });
}
