
import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { et, enGB, ru } from 'date-fns/locale'


registerLocale('et', et)
registerLocale('en', enGB)
registerLocale('ru', ru)

export default function Calendar({lang}) {
    const [startDate, setStartDate] = useState(new Date());
    return (

        <DatePicker
            popperPlacement="bottom-start"
            locale={lang}
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            className="calendar"
        />
    )
}