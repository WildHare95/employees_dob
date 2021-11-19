import {compose} from "redux";
import {connect} from "react-redux";
import SelectedEmployees from "./SelectedEmployees";
import {removeAllElementsLocalStorage} from "../../redux/employees-reducer";


const mapStateToProps = (state) => {
    return{
        localStorageData: state.dataState.localStorage,
        isLoaded: state.dataState.isLoaded
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            removeAllElementsLocalStorage
        }
    )
)(SelectedEmployees)
