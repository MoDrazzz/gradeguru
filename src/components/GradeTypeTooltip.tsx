import Normal from "./Normal";
import Tooltip from "./Tooltip";

interface Props {
  data: GradeType;
}

export default function GradeTypeTooltip({ data }: Props) {
  return (
    <Tooltip position="top-left">
      <li>
        Name: <Normal>{data.name}</Normal>
      </li>
      <li>
        Weight: <Normal>{data.weight}</Normal>
      </li>
      <li>
        Include in average:{" "}
        <Normal>{data.includeInAverage ? "Yes" : "No"}</Normal>
      </li>
    </Tooltip>
  );
}
