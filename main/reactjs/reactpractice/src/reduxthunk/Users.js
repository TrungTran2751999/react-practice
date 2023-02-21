import {useSelector} from "react-redux";
function User(){
    let users= useSelector(state=>state.data);
    console.log(users);
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default User;