
import React, { useContext, useEffect, useRef, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { et, enGB, ru } from 'date-fns/locale'
import { FormContext } from '../../store/formContext'

registerLocale('et', et)
registerLocale('en', enGB)
registerLocale('ru', ru)

export default function Calendar({ lang, type }) {
    const calendarRef = useRef()
    const [startDate, setDate] = useState('');
    const formContext = useContext(FormContext)
    const { setForm } = formContext

    useEffect(() => {

        setForm(type, calendarRef.current.input.value)

    }, [startDate])
    return (

        <DatePicker
            popperPlacement="bottom-start"
            locale={lang}
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onSelect={date => setDate(date)}
            className="calendar"
            ref={calendarRef}
        />
    )
}