import SelectedEmployeesBlock from "./SelectedEmployeesBlock"
import styles from "./SelectedEmploees.module.css"
import { getEmployeesByMonth } from "../../common/helpers/employees-helper"
import { FC } from "react"
import { SelectedEmployeesContainerProps } from "./SelectedEmployeesContainer"

type PropsType = SelectedEmployeesContainerProps

const SelectedEmployees: FC<PropsType> = ({
    employees,
    employeesActivity,
    setAllEmployeesUnActive,
}) => {
    return (
        <div className={styles.container}>
            <h3>Employees birthday</h3>
            {(employees &&
                employees.filter((a) => employeesActivity[a.id]).length !== 0 &&
                getEmployeesByMonth(
                    employees.filter((a) => employeesActivity[a.id])
                ).map((item) => {
                    if (item.arr.length !== 0) {
                        return (
                            <div key={item.month}>
                                <h5>{item.month}</h5>
                                <SelectedEmployeesBlock sortData={item.arr} />
                            </div>
                        )
                    }
                    return undefined
                })) || <div>Employees List is empty</div>}
            <button
                disabled={
                    employees
                        ? employees.filter((a) => employeesActivity[a.id])
                              .length === 0
                        : false
                }
                onClick={setAllEmployeesUnActive}
            >
                Remove all
            </button>
        </div>
    )
}

export default SelectedEmployees
