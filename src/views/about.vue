<template>
  <section >

      <div class="section pt-5 px-3 px-lg-4" id="about">
          <div class="container-narrow">
              <div class="row">
                  <div class="col-md-6 content">
                      <h2 class="my-2 color-title-section">Mi Trayectoria</h2>

                      <p>
                        ¡Hola! Soy Byron Becerra, ingeniero en Informática y me encanta el desarrollo web full stack. Disfruto trabajando tanto en el frontend como en el backend, utilizando herramientas como JavaScript, Vue.js, Express, PHP, Laravel, SQL, CSS y Bootstrap para crear soluciones efectivas. Además, manejo GitHub para la gestión de versiones y colaboración en proyectos.                      </p>
                      <p>
                          Aunque mi experiencia laboral se centra en mis estudios, estoy muy motivado por resolver problemas técnicos y enfrentar desafíos en el desarrollo web.

                      </p>
                      <p>
                        Antes de esto, trabajé 4 años en un centro de llamadas, donde aprendí mucho sobre atención al cliente y resolución de problemas. Ahora estoy en la etapa junior de mi carrera, siempre buscando mejorar mis habilidades y contribuir a proyectos innovadores.
                      </p>

                      <p>
                        Información adicional

                        <ul>
                          <li> <strong>Recursos: </strong> <a target="_blank" href="https://drive.google.com/drive/folders/1mgqM7m7h4cqA-UoSHN4qKtiqr-oBaLqq?usp=sharing"> 
                           Ver Documentación </a>  </li>
                          <li><strong>GitHub:</strong> <a target="_blank" href="https://github.com/BecerraDev?tab=repositories"> Repositorio   </a> </li>
                          <li><strong>Linkedin:</strong>  <a target="_blank" href="https://www.linkedin.com/in/byron-becerra-aravena-406845308/"> Byron Becerra </a></li>
                          <li><strong>Contacto:</strong> (+56) 9 5606 4816 (Móvil)         </li>
                        </ul>

                      </p>


                  </div>
                  <div
                      class="col-md-5 offset-md-1"
                      data-aos="fade-right" data-aos-delay="100"
                  >
                      <img
                          class="avatar img-fluid mt-2"
                           v-bind:src="require('@/assets/images/my-photo.jpg')"
                          width="400"
                          height="400"
                          alt="Byron Becerra"
                      />
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about {
  background-color: white;
}
.ia-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

</style>
