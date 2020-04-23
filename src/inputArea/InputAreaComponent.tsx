import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { getToday } from "../util/DateUtil";

import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { useDispatch } from "react-redux";
import { register } from "../actions";

registerLocale("ja", ja);

interface UserInput {
  date: Date;
  weight: number;
}

const InputAreaCompoenent = () => {
  const [date, setDate] = useState<Date>(getToday());
  const [weight, setWeight] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <label htmlFor="date">計測日</label>
        <DatePicker
          id="date"
          locale={ja}
          dateFormat="yyyy/MM/dd"
          selected={date}
          onChange={(v) => {
            const newDate = v ? v : getToday();
            setDate(newDate);
          }}
        />
      </div>
      <div>
        <label htmlFor="weight">体重(kg)</label>
        <input
          type="text"
          name="weight"
          id="weight"
          value={weight}
          onChange={(v) => {
            setWeight(v.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="button"
          value="登録"
          onClick={(e) => {
            const num = parseInt(weight);
            /* TODO 数値かどうかのチェック */
            dispatch(register({ date, weight: num }));
            /* TODO 登録処理 */ console.log(`date: ${date}, weight: ${weight}`);
          }}
        />
      </div>
    </div>
  );
};

export default InputAreaCompoenent;
