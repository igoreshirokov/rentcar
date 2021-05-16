
import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import et from 'date-fns/locale/et'
registerLocale('et', et)
export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    return (

        <DatePicker
            popperPlacement="bottom-start"
            locale="et"
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            className="calendar"
        />
    )
}