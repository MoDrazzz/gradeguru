"use client";

import {
  faEdit,
  faEnvelope,
  faWindowRestore,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faCheck,
  faPlus,
  faSearch,
  faSignOut,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  name: IconVariants;
}

const icons = {
  dashboard: faWindowRestore,
  messages: faEnvelope,
  grades: faEdit,
  arrowDown: faAngleDown,
  arrowUp: faAngleUp,
  check: faCheck,
  plus: faPlus,
  logout: faSignOut,
  search: faSearch,
  warning: faWarning,
};

export default function Icon({ name }: Props) {
  const icon = icons[name];

  return <FontAwesomeIcon icon={icon} />;
}
