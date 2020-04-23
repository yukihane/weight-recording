import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { weightRecordsSelector } from "../selectors";

const DisplayAreaCompoenent = () => {
  const state = useSelector(weightRecordsSelector);
  const records = state.map((v, index) => (
    <tr key={v.date.toString()}>
      <td>{moment(v.date).format("YYYY-MM-DD")}</td>
      <td>{v.weight}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>計測日</th>
          <th>体重(kg)</th>
        </tr>
      </thead>
      <tbody>{records}</tbody>
    </table>
  );
};

export default DisplayAreaCompoenent;
