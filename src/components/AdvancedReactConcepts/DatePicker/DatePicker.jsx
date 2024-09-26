import { useState } from "react"
import {
    format,
    addMonths,
    subMonths,
    eachDayOfInterval,
    startOfMonth,
    startOfWeek,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
    isToday
} from "date-fns"
import "./styles.css"

export default function DatePickerProject() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isOpen, setIsOpen] = useState(false)

    let currentFormattedDate = format(currentDate, "E. MMM. do, yyyy")

    function onChange(date) {
        setCurrentDate(date)
    }

    return (
        <div className="date-picker-container">
            <button
                className="date-picker-button"
                onClick={() => setIsOpen(t => !t)}
            >
                {`${currentFormattedDate}`}
            </button>
            {isOpen &&
                <DatePicker value={currentDate} onChange={onChange} />
            }
        </div>
    )
}

function DatePicker({ value, onChange }) {
    const [selectedMonth, setSelectedMonth] = useState(new Date())
    const visibleDays = eachDayOfInterval({
        start: startOfWeek(startOfMonth(selectedMonth)),
        end: endOfWeek(endOfMonth(selectedMonth))
    })

    function showPrevMonth() {
        setSelectedMonth(current => {
            return subMonths(current, 1)
        })
    }

    function showNextMonth() {
        setSelectedMonth(current => {
            return addMonths(current, 1)
        })
    }

    return (
        <div className="date-picker">
            <div className="date-picker-header">
                <button className="prev-month-button month-button" onClick={showPrevMonth}>&larr;</button>
                <div className="current-month">{format(selectedMonth, "MMMM-yyyy")}</div>
                <button className="next-month-button month-button" onClick={showNextMonth}>&rarr;</button>
            </div>
            <div className="date-picker-grid-header date-picker-grid">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className="date-picker-grid-dates date-picker-grid">
                {visibleDays.map(day => (
                    <button
                        onClick={() => onChange(day)}
                        className={`date ${!isSameMonth(day, selectedMonth) && "date-picker-other-month-date"
                            } ${isSameDay(day, value) &&
                            "selected"
                            } ${isToday(day) &&
                            "today"
                            }`}
                        key={day.toDateString()}
                    >
                        {day.getDate()}
                    </button>
                ))}
            </div>
        </div>
    )
}