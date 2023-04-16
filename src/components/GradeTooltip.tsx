import Normal from "./Normal";
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
        Date added: <Normal>{data.dateAdded}</Normal>
      </li>
      <li>
        Rating: <Normal>{data.rating}</Normal>
      </li>
      <li>
        Weight: <Normal>{data.type.weight}</Normal>
      </li>
      <li>
        Type: <Normal>{data.type.name}</Normal>
      </li>
      <li>
        Include in average:{" "}
        <Normal>{data.type.includeInAverage ? "Yes" : "No"}</Normal>
      </li>
      {data.comments && (
        <li>
          Comments: <Normal>{data.comments}</Normal>
        </li>
      )}
    </Tooltip>
  );
}
