import useAxios from '../../hooks/useAxios'

const Users = () => {

  const { data, error, loading } = useAxios('/api/users')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
 
  return (
    <div>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                    
        {data.map(u =>
                    <tr>
                        <td key={u.first_name}>{u.first_name}</td>
                        <td key={u.last_name}>{u.last_name}</td>
                        <td key={u.user_name}>{u.user_name}</td>
                        <td key={u.email}>{u.email}</td>
                        <td key={u.phone}>{u.phone}</td>
                        <td key={u.department.short}>{u.department.short}</td>
                        <td key={u.title}>{u.title}</td>
                    </tr>
        )}

            </tbody>
        </table>
    </div>
  )
}

export default Users