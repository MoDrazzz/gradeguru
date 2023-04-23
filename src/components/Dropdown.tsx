import classNames from "classnames";
import { UseSelectStateChange, resetIdCounter, useSelect } from "downshift";
import Icon from "./Icon";

interface Props {
  items: (string | null)[];
  state: DropdownItem;
  stateSetter?: React.Dispatch<React.SetStateAction<DropdownItem>>;
  onSelectedItemChange?: (changes: UseSelectStateChange<string | null>) => void;
}

export default function Dropdown({
  items,
  state,
  stateSetter,
  onSelectedItemChange,
}: RequireAtLeastOne<Props, "stateSetter" | "onSelectedItemChange">) {
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
    onSelectedItemChange: onSelectedItemChange
      ? onSelectedItemChange
      : ({ selectedItem: newSelectedItem }) => {
          stateSetter && stateSetter(newSelectedItem);
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
          {selectedItem ?? "-"}
        </p>
        {isOpen ? <Icon name="arrowUp" /> : <Icon name="arrowDown" />}
      </button>
      <ul
        className={classNames(
          "absolute top-full z-20 mt-1 max-h-44 w-fit min-w-[6rem] overflow-auto rounded-lg border-2 border-slate-300 bg-slate-50",
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
              {item ?? "-"}
            </li>
          ))}
      </ul>
    </div>
  );
}
