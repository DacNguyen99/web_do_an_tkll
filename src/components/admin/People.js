import React from "react"
import styles from "../../styles/admin/People.module.css"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function People() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/getPeople')
        .then(people => setPeople(people.data))
        .catch(e => console.log(e))
    }, [])

    return(
        <body>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logoLabel}>
                        <img src={logo} alt="logoLabel" width={'50px'} />
                        <p>Face RecogNition</p>
                    </div>
                    <div><i class="fa-solid fa-user-tie"></i><p style={{fontWeight: 'bold'}}>Welcome</p></div>
                    <div><i class="fa-solid fa-house"></i><Link to="/homeadmin" style={{color: "#000000"}}>Home</Link></div>
                    <div><i class="fa-solid fa-people-group"></i><Link to="/people" style={{color: "#000000"}}>People</Link></div>
                    <div><i class="fa-solid fa-users"></i><Link to="/admin" style={{color: "#000000"}}>Admin</Link></div>
                    <div><i class="fa-solid fa-clock-rotate-left"></i><Link style={{color: "#000000"}}>History</Link></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.tbl}>
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Số lần nhận diện</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        people.map(person => {
                                            return <tr>
                                                    <td>{person.id_person}</td>
                                                    <td>{person.name}</td>
                                                    <td>{person.recog}</td>
                                                </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </body>
    );
}

export default People;