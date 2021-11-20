import { compose } from "redux"
import { connect } from "react-redux"
import SelectedEmployees from "./SelectedEmployees"
import { setAllEmployeesUnActive } from "../../redux/employees-reducer"

const mapStateToProps = (state) => {
    return {
        employees: state.dataState.employees,
        employeesActivity: state.dataState.employeesActivity,
    }
}

export default compose(
    connect(mapStateToProps, {
        setAllEmployeesUnActive,
    })
)(SelectedEmployees)
