const Sidebar= ()=>{
    return(
        <div className="bg-primary text-white p-3" style={{width:'250px'}}>
            <h5>Receptionist</h5>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Dashboard</a></li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Appointments</a></li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Patient</a>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;