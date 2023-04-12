"use client";

import { useState } from "react";
import classNames from "classnames";
import Normal from "./Normal";

export default function Grade({ data }: { data: Grade }) {
  const [tooltipActive, setTooltipActive] = useState(false);
  const dateAdded = new Date(data.dateAdded).toLocaleString("en-gb");

  return (
    <div className="relative">
      <button
        className="h-8 w-8 rounded-md text-center text-slate-50"
        style={{
          backgroundColor: data.type.color,
        }}
        onMouseEnter={() => setTooltipActive(true)}
        onMouseLeave={() => setTooltipActive(false)}
      >
        {data.rating}
      </button>
      {tooltipActive && (
        <ul
          className={classNames(
            "absolute top-full z-10 ml-1 mt-1 w-max rounded-lg border-2 border-slate-400 bg-blue-50 p-3"
          )}
        >
          <li>
            Date added: <Normal>{dateAdded}</Normal>
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
      )}
    </div>
  );
}
