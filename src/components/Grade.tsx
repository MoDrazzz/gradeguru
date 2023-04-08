"use client";

import { useState } from "react";
import classNames from "classnames";

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
            Date added: <span className="font-normal">{dateAdded}</span>
          </li>
          <li>
            Rating: <span className="font-normal">{data.rating}</span>
          </li>
          <li>
            Weight: <span className="font-normal">{data.type.weight}</span>
          </li>
          <li>
            Type: <span className="font-normal">{data.type.name}</span>
          </li>
          <li>
            Include in average:{" "}
            <span className="font-normal">
              {data.type.includeInAverage ? "Yes" : "No"}
            </span>
          </li>
          {data.comments && (
            <li>
              Comments: <span className="font-normal">{data.comments}</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
