import React from 'react'
import Landing from "../../Images/Description-images/landing1.png"
import Landing2 from "../../Images/Description-images/landing2.png"
import Landing3 from "../../Images/Description-images/landing3.png"
import Landing4 from "../../Images/Description-images/person.jpg"
import check from "../../assets/description-icons/check.svg"

import styles from "./Description.module.css"

const ecommerceFeatures = [
  {
    icon: 'icono-1.svg', 
    title: 'Gestión de productos',
    description: 'Administra y organiza tus productos de manera eficiente. Agrega, edita y elimina productos fácilmente. Categoriza y etiqueta tus productos para una búsqueda más precisa.',
  },
  {
    icon: 'icono-2.svg',
    title: 'Tienda en línea',
    description: 'Crea tu propia tienda en línea y llega a más clientes. Personaliza el diseño y la apariencia de tu tienda. Acepta pagos en línea de manera segura y ofrece opciones de envío flexibles.',
  },
  {
    icon: 'icono-3.svg',
    title: 'Reservas y citas',
    description: 'Permite a tus clientes programar citas y servicios. Ofrece un calendario de disponibilidad y opciones de reserva. Envía recordatorios automáticos para reducir las cancelaciones.',
  },
  {
    icon: 'icono-4.svg',
    title: 'Gestión de inventario',
    description: 'Lleva un control preciso de tu inventario y stock. Recibe alertas cuando los productos estén bajos en stock. Administra múltiples ubicaciones y variantes de productos.',
  },
  {
    icon: 'icono-5.svg',
    title: 'Seguimiento de ventas',
    description: 'Analiza las ventas y el rendimiento de tu negocio. Genera informes detallados sobre ventas, ingresos y tendencias. Identifica los productos más populares y las áreas de mejora.',
  },
  {
    icon: 'icono-6.svg',
    title: 'Herramientas de marketing',
    description: 'Promociona tus productos y servicios con estrategias efectivas. Crea campañas de correo electrónico y descuentos. Optimiza el SEO de tu tienda para un mayor alcance en línea.',
  },
];

function Description() {
return (
    <main>
        <section className={styles.boxHeader} id="header">
            <div className={styles.textosHeader}>
                <h1><b>Unlock Your Styling Journey</b></h1>
                <p>Elevate your styling business to new heights with our cutting-edge ecommerce platform. Connect with clients, gain reputation, and shine in the world of fashion.</p>
            </div>

            <div className={styles.imgHeader}>
                <img src={Landing} alt=""/>
            </div>
        </section>


      <section className={styles.boxFeatures} id="linkFeatures">
            <h3>Features</h3>
            <div className={styles.features}>
            {ecommerceFeatures.map((service) => (
            <div className={styles.cardFeatures}>
              <span className={styles.iconrefresh}>
                <img src={service.icon} alt={service.title} />
              </span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <a href="#">Learn More</a>
            </div>
            ))}
            </div>
        </section>
    </main>
  )
}

function Description2 (){
  return <main>

      <section className={styles.boxCallToActions}>
            <div className={styles.callToActions}>
                <div className={styles.imgCallToActions}>
                    <img src={Landing2} alt=""/>
                </div>

                <article className={styles.contenido}>
                    <h3>Unlock Your Stylist Potential</h3>
                    <p>Elevate your styling business to new heights. Gain reputation, connect directly with clients, and showcase your remarkable talent to a global audience. With our platform, you're not just a stylist; you're a trendsetter, a creator, and a fashion influencer.</p>

                    <ul>
                        <li> <img className={styles.iconcheck} src={check}/> Boost your credibility and visibility in the fashion world.
                        </li>
                        <li> <img className={styles.iconcheck} src={check}/> Establish direct communication and build lasting relationships.
                        </li>
                    </ul>

                    <div className={styles.boxCardCallToActions}>
                        <div className={styles.cardCallToActions}>
                            <div className={styles.boxProfesional}>
                                <div className={styles.imgProfesional}>
                                    <img src={Landing4} alt=""/>
                                </div>
                                <div className={styles.datosProfesional}>
                                    <h5>Lucas Cubile</h5>
                                    <h6>Co-Founder, Apple</h6>
                                </div>
                            </div>
                            <p>"Unlock endless opportunities in the fashion industry. Connect with clients, showcase your skills, and watch your styling business thrive."</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

    <section className={styles.boxAbout} id="linkAbout">
            <h3>About Us</h3>

            <div className={styles.about}>
                <div className={styles.imgAbout}>
                    <img src={Landing3} alt=""/>
                </div>

                <article className={styles.contenidoAbout}>
                    <h3>Your Styling Journey Starts Here</h3>
                    <p>Elevate your styling career to new heights with our innovative platform. Gain more clients, enhance your skills, and become a sought-after fashion influencer.</p>
                    <a className={styles.botonGetStarted} href="#">Learn More</a>
                </article>
            </div>
        </section>
  </main>
}

export  {Description,Description2}