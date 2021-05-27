import DatePicker from 'react-datepicker'
import React, { useState } from "react"
import { setHours, setMinutes } from "date-fns"

export default function Time() {
    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9));
    return (
        <>
            <DatePicker
                // value={startDate}
                className="timepicker"
                popperPlacement="bottom-end"
                popperClassName="timepicker-popper"
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption=""
                dateFormat="H:mm"
                minTime={setHours(setMinutes(new Date(), 0), 9)}
                maxTime={setHours(setMinutes(new Date(), 30), 16)}
            />
        </>
    )
}