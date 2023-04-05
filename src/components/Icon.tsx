import {
  faEnvelope,
  faWindowRestore,
} from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  name: IconVariants;
}

const icons = {
  dashboard: faWindowRestore,
  messages: faEnvelope,
  grades: faEdit,
};

export default function Icon({ name }: Props) {
  const icon = icons[name];

  return <FontAwesomeIcon icon={icon} />;
}
