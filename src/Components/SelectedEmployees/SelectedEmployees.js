import sortHelper from "../../common/sorting/SortingHelper";
import SelectedEmployeesBlock from "./SelectedEmployeesBlock";
import styles from "./SelectedEmploees.module.css"

const SelectedEmployees = ({localStorageData, removeAllElementsLocalStorage}) => {

    return (
        <div className={styles.container}>
            <h3>Employees birthday</h3>
            {
                localStorageData !== null && localStorageData.length !== 0 ?
                    sortHelper.sortSelectedEmployees(localStorageData).map(item => {
                                if (item.arr.length !== 0)
                                {
                                    return (
                                    <div>
                                        <h5>{item.month}</h5>
                                        <SelectedEmployeesBlock sortData={item.arr}/>
                                    </div>
                                    )
                                }


                        }
                    ) :
                    <div>Employees List is empty</div>
            }
            <button disabled={localStorageData === null || localStorageData.length === 0} onClick={() => {
                removeAllElementsLocalStorage()
            }}>Remove all
            </button>
        </div>
    )
}

export default SelectedEmployees