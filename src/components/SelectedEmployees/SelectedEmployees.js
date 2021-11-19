import SelectedEmployeesBlock from "./SelectedEmployeesBlock"
import styles from "./SelectedEmploees.module.css"
import { getEmployeesByMonth } from "../../common/helpers/employees-helper"

const SelectedEmployees = ({
    employees,
    employeesActivity,
    setAllEmployeesUnActive,
}) => {
    return (
        <div className={styles.container}>
            <h3>Employees birthday</h3>
            {employees && employees.length !== 0 ? (
                getEmployeesByMonth(
                    employees.filter((a) => employeesActivity[a.id])
                ).map((item) => {
                    if (item.arr.length !== 0) {
                        return (
                            <div>
                                <h5>{item.month}</h5>
                                <SelectedEmployeesBlock sortData={item.arr} />
                            </div>
                        )
                    }
                })
            ) : (
                <div>Employees List is empty</div>
            )}
            <button
                disabled={!employees || employees.length === 0}
                onClick={setAllEmployeesUnActive}
            >
                Remove all
            </button>
        </div>
    )
}

export default SelectedEmployees
