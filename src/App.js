import styles from "./App.module.css";
import EmployeesBlockContainer from "./Components/EmployeesBlock/EmployeesBlockContainer";
import SelectedEmployeesContainer from "./Components/SelectedEmployees/SelectedEmployeesContainer";

function App() {
    return (
        <div>
            <h1>EMPLOYEES</h1>
            <div className={styles.App}>
                <div className={styles.tableContainer}>
                    <EmployeesBlockContainer/>
                </div>
                <SelectedEmployeesContainer/>
            </div>
        </div>
    )
}

export default App;
