import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";

registerLocale("ja", ja);

interface UserInput {
  date: Date;
  weight: number;
}

const InputAreaCompoenent = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [weight, setWeight] = useState("");
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
            const newDate = v ? v : new Date();
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
          onClick={(e) =>
            /* TODO 登録処理 */ console.log(`date: ${date}, weight: ${weight}`)
          }
        />
      </div>
    </div>
  );
};

export default InputAreaCompoenent;
