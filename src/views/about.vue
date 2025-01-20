<template>
  <section >

      <div class="section pt-5 px-3 px-lg-4" id="about">
          <div class="container-narrow">
              <div class="row">
                  <div class="col-md-6 content">
                      <h2 class="my-2 color-title-section">Mi Trayectoria</h2>

                      <p>
                       
                        Soy Byron Becerra y me dedico a crear soluciones web completas, abarcando tanto el backend como el frontend, utilizando tecnologías como <strong> Java, PHP, Laravel, Spring Boot</strong> y <strong> SQL</strong>.
                      </p>
                      <p>
                        Me gradué en Ingeniería en Informática y, aunque mi experiencia profesional es corta, he enfrentado retos interesantes que me han permitido crecer. Siempre estoy en busca de nuevas tecnologías para mejorar y aportar más a los proyectos en los que participo.


</p>                    
                    
                    
                    
                    
                    
                          <p>
                            En mi tiempo de estudio, logré comprender cómo funciona la programación desde sus bases y cómo aplicarla para resolver problemas reales. Además, he adquirido experiencia trabajando con tecnologías en la nube, lo que me permite crear aplicaciones escalables y eficientes. Ahora, como desarrollador junior, disfruto enfrentándome a nuevos desafíos, aprendiendo y colaborando con otros para seguir creciendo en el mundo del desarrollo web.
                      </p>

                      <p>
                        Información adicional 

                        <ul>
                          <li> <strong>Recursos: </strong> <a target="_blank" href="https://drive.google.com/drive/folders/1mgqM7m7h4cqA-UoSHN4qKtiqr-oBaLqq?usp=sharing"> 
                           Ver Documentación </a>  </li>
                          <li><strong>GitHub:</strong> <a target="_blank" href="https://github.com/BecerraDev?tab=repositories"> Repositorio   </a> </li>
                          <li><strong>Linkedin:</strong>  <a target="_blank" href="https://www.linkedin.com/in/byron-becerra/"> byron-becerra </a></li>
                          <li><strong>Contacto:</strong> (+56) 9 5606 4816 (Móvil)         </li>
                          <li><strong>Correo:</strong> byron.becerra.aravena@gmail.com         </li>
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
