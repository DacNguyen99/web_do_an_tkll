import React from "react"
import styles from "../../styles/admin/InsertAdmin.module.css"
import logo from "../../images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function DeleteAdmin() {
    const history = useNavigate()
    const [username, setUsername] = React.useState('')

    async function submit(e) {
        e.preventDefault()
        try {
            console.log(username)
            await axios.post("http://localhost:4000/delete", {
                username: username
            })
            .then(req => {
                if (req.data === "Deleted") {
                    alert("Deleted")
                    history("/admin")
                }
            })
            .catch(e => {
                alert("wrong info")
                console.log(e)
            })
        }
        catch(e) {
            console.log(e)
        }
    }

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
                    <div><i class="fa-solid fa-clock-rotate-left"></i><Link to="/history" style={{color: "#000000"}}>History</Link></div>
                </div>
                <div className={styles.right}>  
                    <div className={styles.form}>
                        <form action="POST" className={styles.form}>
                        <div><label>Nhập tên cần xóa</label></div>
                        <div><input type="text" name="username" onChange={(e) => {setUsername(e.target.value)}}></input></div>
                        <div><input id="submit" type="submit" name="submit" value="Xóa" onClick={submit}></input></div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default DeleteAdmin;