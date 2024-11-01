import React from 'react'

const Users = () => {
  return (
    <div className="users">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Mail</th>
                    <th>Birthday</th>
                </tr>
            </thead>
           <tbody>
            <tr>
                <td>1</td>
                <td>Rahib</td>
                <td>Qasımlı</td>
                <td><a href="mailto:rahibqasimli1@gmail.com">rahibqasimli1@gmail.com</a></td>
                <td>18.12.2005</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Rahib</td>
                <td>Qasımlı</td>
                <td><a href="mailto:rahibqasimli1@gmail.com">rahibqasimli1@gmail.com</a></td>
                <td>18.12.2005</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Users