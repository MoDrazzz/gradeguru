import TextNormal from "./TextNormal";
import Tooltip from "./Tooltip";

interface Data extends Omit<Grade, "dateAdded"> {
  dateAdded: string;
}

interface Props {
  data: Data;
}

export default function GradeTooltip({ data }: Props) {
  return (
    <Tooltip position="bottom-left">
      <li>
        Date added: <TextNormal>{data.dateAdded}</TextNormal>
      </li>
      <li>
        Rating: <TextNormal>{data.rating}</TextNormal>
      </li>
      <li>
        Weight: <TextNormal>{data.type.weight}</TextNormal>
      </li>
      <li>
        Type: <TextNormal>{data.type.name}</TextNormal>
      </li>
      <li>
        Include in average:{" "}
        <TextNormal>{data.type.includeInAverage ? "Yes" : "No"}</TextNormal>
      </li>
      {data.comments && (
        <li>
          Comments: <TextNormal>{data.comments}</TextNormal>
        </li>
      )}
    </Tooltip>
  );
}
