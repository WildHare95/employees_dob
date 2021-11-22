import styles from "./EmployeesByLetter.module.css"
import Employee from "../Employee/Employee"
import {
    EmployeesActivityType,
    EmployeeType,
} from "../../redux/employees-reducer"
import { FC } from "react"

type PropsType = {
    data: {
        letter: string
        arr: EmployeeType[]
    }
    employeesActivity: EmployeesActivityType
    setOneEmployeeActivity: (id: string, state: boolean) => void
}

const EmployeesByLetter: FC<PropsType> = ({
    data,
    employeesActivity,
    setOneEmployeeActivity,
}) => {
    return (
        <div className={styles.listContainer}>
            <h3 className={styles.letter}>{data.letter}</h3>
            {data.arr.length !== 0 ? (
                <div>
                    {data.arr.map((employee) => {
                        const id = employee.id
                        const active = employeesActivity[id] || false

                        return (
                            <Employee
                                key={id}
                                data={employee}
                                active={active}
                                onActivityChange={(state) =>
                                    setOneEmployeeActivity(id, state)
                                }
                            />
                        )
                    })}
                </div>
            ) : (
                <div>No employees</div>
            )}
        </div>
    )
}

export default EmployeesByLetter
