"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
}

export default function Icon({ icon }: Props) {
  return <FontAwesomeIcon icon={icon} />;
}
