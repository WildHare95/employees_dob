import styles from "./Employee.module.css"

const Employee = ({ data, active, onActivityChange }) => {
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
                    value=" "
                    checked={active}
                />
                active
                <input
                    type="radio"
                    name={data.id}
                    onChange={() => {
                        onActivityChange(false)
                    }}
                    value=" "
                    checked={!active}
                />
                not active
            </div>
        </div>
    )
}

export default Employee
