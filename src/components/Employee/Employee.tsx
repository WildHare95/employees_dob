import styles from "./Employee.module.css"
import { EmployeeType } from "../../redux/employees-reducer"
import { FC } from "react"

type PropsType = {
    data: EmployeeType
    active: boolean
    onActivityChange: (state: boolean) => void
}

const Employee: FC<PropsType> = ({ data, active, onActivityChange }) => {
    return (
        <div>
            <div className={styles.info}>
                <span className={active ? styles.employeesColor : undefined}>
                    {data.firstName} {data.lastName}
                </span>
            </div>
            <div>
                <input
                    type="radio"
                    name={data.id}
                    onChange={() => {
                        onActivityChange(true)
                    }}
                    value="active"
                    checked={active}
                />
                active
                <input
                    type="radio"
                    name={data.id}
                    onChange={() => {
                        onActivityChange(false)
                    }}
                    value="unactive"
                    checked={!active}
                />
                not active
            </div>
        </div>
    )
}

export default Employee
