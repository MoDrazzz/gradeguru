import TextNormal from "./TextNormal";
import Tooltip from "./Tooltip";

interface Props {
  data: GradeType;
}

export default function GradeTypeTooltip({ data }: Props) {
  return (
    <Tooltip position="top-left">
      <li>
        Name: <TextNormal>{data.name}</TextNormal>
      </li>
      <li>
        Weight: <TextNormal>{data.weight}</TextNormal>
      </li>
      <li>
        Include in average:{" "}
        <TextNormal>{data.includeInAverage ? "Yes" : "No"}</TextNormal>
      </li>
    </Tooltip>
  );
}
