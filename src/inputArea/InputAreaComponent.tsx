import React, { useState } from "react";

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
        <input type="text" name="date" id="date" value={date.toString()} />
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
