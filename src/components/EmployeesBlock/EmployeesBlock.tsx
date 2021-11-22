import { FC, useEffect } from "react"
import { getEmployeesByAlphabet } from "../../common/helpers/employees-helper"
import EmployeesByLetter from "../EmployeesByLetter/EmployeesByLetter"
import { EMPLOYEES_ACTIVITY_LOCAL_STORAGE_KEY } from "../../common/constants"
import Preloader from "../../common/preloader/Preloader"
import { EmployeesBlockContainerProps } from "./EmployeesBlockContainer"

type PropsType = EmployeesBlockContainerProps

const EmployeesBlock: FC<PropsType> = ({
    employees,
    employeesActivity,

    getDataEmployees,
    setOneEmployeeActivity,
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
            {employees === undefined && <Preloader />}
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
