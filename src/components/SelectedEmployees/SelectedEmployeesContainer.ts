import { compose } from "redux"
import { connect, ConnectedProps } from "react-redux"
import SelectedEmployees from "./SelectedEmployees"
import { setAllEmployeesUnActive } from "../../redux/employees-reducer"
import { AppStateType } from "../../redux/redux-store"

const mapStateToProps = (state: AppStateType) => {
    return {
        employees: state.dataState.employees,
        employeesActivity: state.dataState.employeesActivity,
    }
}

const connector = connect(mapStateToProps, {
    setAllEmployeesUnActive,
})

export type SelectedEmployeesContainerProps = ConnectedProps<typeof connector>

export default compose(connector)(SelectedEmployees)
