import React from 'react'
import styles from './UserDetail.module.css'
import Carousel from '../../components/Carousel/Carousel'

function UserDetail() {
    return (
        <div className={styles.section}>
            <section className={styles.sectionleft}>
                <div className={styles.userdetail}>
                    <div className={styles['userdetail-header']}>
                        <img src='' alt='' />
                        <h1>Full Name</h1>
                        <a>Editar la informacion basica</a>
                    </div>
                    <div className={styles['userdetail-body']}>
                        <ul>
                            <li>Name <span>1</span></li>
                            <li>FullName<span>3</span></li>
                            <li>Telf<span>3</span></li>
                            <li>Email<span>4</span></li>
                            <li>Birthdate<span>5</span></li>
                            <li>Genre<span>6</span></li>
                        </ul>
                    </div>
                    <div className={styles['userdetail-bottom']}>
                        <a>Cerrar Sesion</a>
                    </div>
                </div>
            </section>

            <section className={styles.sectionrigth}>
                <div className={styles['rigth-directions']}>
                    <div className={styles['directions-header']}>
                        <h4>Mis direcciones</h4>
                    </div>
                    <div className={styles['directions-body']}>
                        <a href="">Añade una nueva direccion</a>
                    </div>
                </div>

                <div className={styles['rigth-paymentways']}>
                    <div className={styles['paymentways-header']}>
                        <h4>Mis métodos de pago</h4>
                        <p>Guarda los datos de tu tarjeta de forma segura y paga sin problemas.</p>
                    </div>
                    <div className={styles['paymentways-body']}>
                        <a href="">Añadir metodo de pago</a>
                    </div>
                </div>

                <div className={styles['rigth-socials']}>
                    <div className={styles['socials-header']}>
                        <h4>Mis conexiones con redes sociales</h4>
                        <p>Vincula los perfiles de tus redes sociales para facilitar el acceso a tu cuenta de Glamour Glow.</p>
                    </div>
                    <div className={styles['socials-body']}>
                        <a href="">Añade una nueva direccion</a>
                    </div>
                </div>

                <div className={styles['rigth-notifications']}>
                    <div className={styles['notifications-header']}>
                        <h4>Mis notificaciones</h4>
                        <p>Te enviaremos actualizaciones sobre tus citas, novedades y ofertas de marketing.</p>
                    </div>
                    <div className={styles['notifications-body']}>
                        <a href="">Añade una nueva direccion</a>
                    </div>
                </div>

                <div className={styles['rigth-favorites']}>
                    <div className={styles['favorites-header']}>
                        <h4>Mejores servicios</h4>
                        <p>Servicios a los cuales le diste me gusta</p>
                    </div>
                    <div className={styles['favorites-body']}>
                        <div>Carrousel</div>
                    </div>
                </div>

                <div className={styles['rigth-delete']}>
                    <div className={styles['delete-header']}>
                        <h4>Eliminar cuenta</h4>
                        <p>¿Estas seguro de que deseas eliminar esta cuenta?</p>
                    </div>
                    <div className={styles['delete-body']}>
                        <a href="">Eliminar cuenta</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserDetail