import React from "react"
import styles from "../../styles/admin/HomeAdmin.module.css"
import logo from "../../images/logo.png"
import mtcnn from "../../images/mtcnn.jpg"
import facenet from "../../images/facenet.webp"
import { Link } from "react-router-dom"

function HomeAdmin() {
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
                    <div>
                        <p>MTCNN</p>
                        <img src={mtcnn} alt="mtcnn" width={'500px'} />
                    </div>
                    <div>
                        <p>FACENET</p>
                        <img src={facenet} alt="facenet" width={'500px'} />
                    </div>
                </div>
            </div>
        </body>
    );
}

export default HomeAdmin;