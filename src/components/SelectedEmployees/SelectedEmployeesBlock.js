const SelectedEmployeesBlock = ({ sortData }) => {
    return sortData.map((item) => (
        <div key={item.id}>
            <span>
                {item.lastName} {item.firstName}
            </span>
            &nbsp;
            <span>
                {new Date(item.dob).toDateString().slice(4, item.dob.length)}
            </span>
        </div>
    ))
}

export default SelectedEmployeesBlock
