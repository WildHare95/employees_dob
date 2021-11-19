import { compose } from "redux"
import { connect } from "react-redux"
import SelectedEmployees from "./SelectedEmployees"
import {
    removeAllElementsLocalStorage,
    setAllEmployeesUnActive,
} from "../../redux/employees-reducer"

const mapStateToProps = (state) => {
    return {
        employees: state.dataState.employees,
        employeesActivity: state.dataState.employeesActivity,
        isLoaded: state.dataState.isLoaded,
    }
}

export default compose(
    connect(mapStateToProps, {
        removeAllElementsLocalStorage,
        setAllEmployeesUnActive,
    })
)(SelectedEmployees)
