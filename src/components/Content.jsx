const Content = () => {

    return (

        <section className="nosotros">
            <h2>Nosotros</h2>
            <p>Bienvenidos a nuestra tienda de belleza, donde nos dedicamos a ofrecer
                los mejores productos y servicios para el cuidado personal. Contamos con una amplia variedad de cosméticos, productos para el cuidado de la piel, herramientas de belleza y mucho más. Nuestro equipo de expertos está siempre dispuesto a ayudarte a encontrar lo que necesitas para verte y sentirte increíble.</p>

            <div className="content">
                <div className="aside">
                    <h2>Productos de Belleza</h2>
                    <h3>Cosméticos</h3>
                    <ul>
                        <li>Base de Maquillaje: Para un acabado perfecto.</li>
                        <li>Sombras de Ojos: Variedad de colores y texturas.</li>
                        <li>Labiales: Amplia gama de tonos.</li>
                    </ul>
                    <h3>Cuidado de la Piel</h3>
                    <ul>
                        <li>Limpiadores Faciales: Para todo tipo de piel.</li>
                        <li>Hidratantes: Cremas y lociones.</li>
                        <li>Tratamientos: Sérums y mascarillas.</li>
                    </ul>
                    <h3>Herramientas de Belleza</h3>
                    <ul>
                        <li>Brochas y Pinceles: Para un maquillaje profesional.</li>
                        <li>Secadores y Planchas: Herramientas de estilizado.</li>
                        <li>Espejos: Con aumento y luz.</li>
                    </ul>
                    <h3>Productos de Higiene</h3>
                    <ul>
                        <li>Desodorantes: Variedad de fragancias.</li>
                        <li>Jabones: Para una limpieza profunda.</li>
                        <li>Productos de Higiene Dental: Cepillos y pastas dentales.</li>
                    </ul>
                </div>
                <div className="gallery">
                    <h2>Galería de Imágenes</h2>
                    <img src="./public/img1.jpg" alt="" />
                    <img src="./public/img2.jpg" alt="" />
                    <img src="./public/img3.jpg" alt="" />
                </div>
            </div>
        </section>

    )

}

export default Content