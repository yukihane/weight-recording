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
  const [date, setDate] = useState(new Date());
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
            if (v) setDate(v);
          }}
        />
      </div>
      <div>
        <label htmlFor="weight">体重</label>
        <input type="text" name="weight" id="weight" />
      </div>
      <div>
        <input type="button" value="登録" />
      </div>
    </div>
  );
};

export default InputAreaCompoenent;
