
const SelectedEmployeesBlock = ({sortData}) => {
    return(

        sortData.map(item => (
            <div>
                <span>{item.firstName}</span>
                <span> </span>
                <span>{item.lastName}</span>
                <span> </span>
                <span>{new Date(item.dob).toDateString().slice(4, item.dob.length)}</span>
            </div>
        ))
    )



}

export default SelectedEmployeesBlock
