"use client";

import {
  faEdit,
  faEnvelope,
  faStar,
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
  faStar as faStarFilled,
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
  star: faStar,
  starFilled: faStarFilled,
};

export default function Icon({ name }: Props) {
  const icon = icons[name];

  return <FontAwesomeIcon icon={icon} />;
}
