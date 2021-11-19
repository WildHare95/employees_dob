import { useEffect } from "react"
import { getEmployeesByAlphabet } from "../../common/helpers/employees-helper"
import EmployeesByLetter from "../EmployeesByLetter/EmployeesByLetter"
import { EMPLOYEES_ACTIVITY_LOCAL_STORAGE_KEY } from "../../common/constants"

const EmployeesBlock = ({
    employees,
    employeesActivity,

    getDataEmployees,
    setOneEmployeeActivity,
    setLocalStorageData,
    deleteLocalStorageData,
}) => {
    useEffect(() => {
        getDataEmployees()
    }, [getDataEmployees])

    useEffect(() => {
        if (Object.keys(employeesActivity).length) {
            localStorage.setItem(
                EMPLOYEES_ACTIVITY_LOCAL_STORAGE_KEY,
                JSON.stringify(employeesActivity)
            )
        }
    }, [employeesActivity])

    return (
        <>
            {employees === undefined && "loader"}
            {employees === null && <div>There is an error</div>}
            {employees &&
                getEmployeesByAlphabet(employees).map((item) => {
                    return (
                        <EmployeesByLetter
                            key={item.letter}
                            data={item}
                            employeesActivity={employeesActivity}
                            setOneEmployeeActivity={setOneEmployeeActivity}
                        />
                    )
                })}
        </>
    )
}

export default EmployeesBlock

/*
<div>
    <div>{item.letter}</div>
    <span>
                                    <span>{item.firstName}</span>
                                    <span> </span>
                                    <span>{item.lastName}</span>
                                    <input type="radio"/>
                                    <label htmlFor="">active</label>
                                    <input type="radio"/>
                                    <label htmlFor="">no active</label>
                                </span>
</div>
*/

/*                    if (Array.isArray(item) && item.length > 0)
{
    return item.map(person => (
        <div>
                                <span>
                                    <span>{person.firstName}</span>
                                    <span> </span>
                                    <span>{person.lastName}</span>
                                    <input type="radio"/>
                                    <label htmlFor="">active</label>
                                    <input type="radio"/>
                                    <label htmlFor="">no active</label>
                                </span>

        </div>
    ))
}
*/
