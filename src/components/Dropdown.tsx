import { useSelect } from "downshift";
import Icon from "./Icon";
import classNames from "classnames";

interface Props {
  items: string[];
  stateSetter: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

export default function Dropdown({ items, stateSetter }: Props) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    defaultSelectedItem: items[0],
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      stateSetter(newSelectedItem);
    },
  });

  return (
    <>
      <button
        className="flex w-fit items-center justify-between rounded-lg border-2 border-slate-300 px-3 py-2"
        {...getToggleButtonProps()}
      >
        <p className="mr-5">{selectedItem ?? "Elements"}</p>
        {isOpen ? <Icon name="arrowUp" /> : <Icon name="arrowDown" />}
      </button>
      <ul
        className={classNames(
          "mt-1 w-fit rounded-lg border-2 border-slate-300",
          {
            hidden: !isOpen,
          }
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={classNames(
                "cursor-pointer border-b-2 border-slate-300 px-3 py-2 last:border-b-0",
                {
                  "bg-blue-100": highlightedIndex === index,
                }
              )}
              key={`${item}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}
