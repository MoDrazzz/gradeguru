import classNames from "classnames";
import Normal from "./Normal";

interface Data extends Omit<Grade, "dateAdded"> {
  dateAdded: string;
}

interface Props {
  data: Data;
}

export default function GradeTooltip({ data }: Props) {
  return (
    <ul
      className={classNames(
        "absolute top-full z-10 ml-1 mt-1 w-max rounded-lg border-2 border-slate-400 bg-blue-50 p-3"
      )}
    >
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
    </ul>
  );
}
