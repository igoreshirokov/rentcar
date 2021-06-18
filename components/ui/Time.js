import DatePicker from 'react-datepicker'
import React, { useState, useRef, useContext, useEffect } from "react"
import { setHours, setMinutes } from "date-fns"
import { FormContext } from '../../store/formContext'

export default function Time({type}) {
    // const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9));
    const [startDate, setStartDate] = useState('');
    const formContext = useContext(FormContext)
    const { setForm } = formContext
    const timeRef = useRef()

    useEffect(() => {
        setForm(type, timeRef.current.input.value)
    }, [startDate])

    return (
        <>
            <DatePicker
                value={startDate}
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
                ref={timeRef}
            />
        </>
    )
}