import { useSelect, resetIdCounter } from "downshift";
import Icon from "./Icon";
import classNames from "classnames";

interface Props {
  items: string[];
  state: DropdownItem;
  stateSetter: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export default function Dropdown({ items, state, stateSetter }: Props) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getLabelProps,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: state,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      stateSetter(newSelectedItem);
    },
  });

  // For SSR generation purposes.
  resetIdCounter();

  return (
    <div className="relative text-base">
      <button
        className={classNames(
          "flex w-fit min-w-[6rem] items-center justify-between rounded-lg border-2 border-slate-300 px-3 py-2",
          {
            "border-primary": isOpen,
          }
        )}
        {...getToggleButtonProps()}
      >
        <p {...getLabelProps()} className="mr-5">
          {selectedItem ?? "Elements"}
        </p>
        {isOpen ? <Icon name="arrowUp" /> : <Icon name="arrowDown" />}
      </button>
      <ul
        className={classNames(
          "absolute top-full z-20 mt-1 w-fit min-w-[6rem] rounded-lg border-2 border-slate-300 bg-slate-50",
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
    </div>
  );
}
