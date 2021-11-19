import { useEffect } from "react"
import RadioButton from "../RadioButton/RadioButton"
import sortHelper from "../../common/sorting/SortingHelper"
import styles from "./Employees.module.css"

const EmployeesBlock = ({
    employees,
    getDataEmployees,

    setLocalStorageData,
    deleteLocalStorageData,
}) => {
    useEffect(() => {
        getDataEmployees()
    }, [getDataEmployees])

    console.log(employees)

    return (
        <>
            {employees === undefined && "loader"}
            {employees === null && <div>There is an error</div>}
            {employees &&
                employees.map((item) => {
                    return (
                        <div className={styles.listContainer} key={item.letter}>
                            <h3>{item.letter}</h3>
                            {item.arr.length !== 0 ? (
                                <div>
                                    <RadioButton
                                        item={item.arr}
                                        setLocalStorageData={
                                            setLocalStorageData
                                        }
                                        deleteLocalStorageData={
                                            deleteLocalStorageData
                                        }
                                    />
                                </div>
                            ) : (
                                <div>No employees</div>
                            )}
                        </div>
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
