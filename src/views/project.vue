<template>

    <section class="project-section">
      <div id="projects" class="section px-3 px-lg-4 pt-5">
        <div class="container-narrow">
          <div class="row justify-content-center">
                      <div class="col-lg-8 text-center">
                          <div class="text-center mb-5">
                              <h2 class="marker marker-center color-title-section">Proyectos</h2>
                          </div>
                          <p class="content ">
                            En esta sección, presento una colección de proyectos que destacan mi experiencia y habilidades en desarrollo. Cada proyecto incluye un video demostrativo reproducido en la misma pagina y enlace al repositorio en GitHub para explorar más detalles y contribuir.
                          </p>
                      </div>
                  </div>
  
  
                 
          <div class="row">
  
            <!-- ETPEL -->
  
            <div class="col-12 col-md-4 mb-4"  data-aos="fade-right" data-aos-delay="100">
              <div class="image-container">
                <img
                v-bind:src="require('@/assets/images/etpel-1.png')"
                class="img-fluid" alt="web design" />
                <div class="overlay">
                  <button class="btn custom-button color1 btn-primary mb-4" id="openModalButton" data-video="eLnMcYij1qE">
                  <i class="fas fa-play-circle mr-1"></i> Reproducir </button>
                      <a href="https://github.com/BecerraDev/ETPEL-Portal" class="btn color2 custom-button btn-primary">
                        <i class="fab fa-github mr-1"></i> Repositorio
                      </a>
                </div>
              </div>
              <div class="description">
                <h4> ETPEL <div class="text-muted text-small purple"> CIISA </div>
                </h4>
                <p> Proyecto web que conecta a docentes y estudiantes, con publicaciones filtradas, mensajería interna y herramientas de colaboración educativa.</p>
                <div class="icons project-icons">
                  <i class="fab fa-node-js mr-2" title="Node.js"></i>
                  <i class="fab fa-bootstrap mr-2" title="Bootstrap"></i>
                  <i class="fas fa-database mr-2" title="Database"></i>
                  <i class="fab fa-css3-alt mr-2" title="CSS"></i>
                  <i class="fab fa-js mr-2" title="JavaScript"></i>
                  <i class="fab fa-express mr-2" title="Express"></i>
                </div>
              </div>
            </div>
  
            <!-- LARERATASKER -->
  
            <div class="col-12 col-md-4"  data-aos="fade-up" data-aos-delay="100">
              <div class="image-container">
                <img 
                v-bind:src="require('@/assets/images/etpel-1.png')"
          
                
                class="img-fluid" alt="web design" />
                <div class="overlay">
                  <button class="btn custom-button color1 btn-primary mb-4" id="openModalButton" data-video="hGVHxFQF2ac">
                    <i class="fas fa-play-circle mr-1"></i> Reproducir </button>
                    <a href="https://github.com/BecerraDev/GrafiTareas" class="btn custom-button color2 btn-primary">
                      <i class="fab fa-github mr-1"></i> Repositorio
                    </a>
                </div>
              </div>
              <div class="description">
                <h4> GrafiTareas <div class="text-muted text-small"> Academia de Gestión Moderna </div>
                </h4>
                <p> Proyecto web para gestionar tareas administrativas diarias, permitiendo agregar, eliminar y actualizar actividades según su prioridad.</p>
                <div class="icons project-icons">
                  <i class="fab fa-node-js mr-2" title="Node.js"></i>
                  <i class="fab fa-bootstrap mr-2" title="Bootstrap"></i>
                  <i class="fas fa-database mr-2" title="Database"></i>
                  <i class="fab fa-css3-alt mr-2" title="CSS"></i>
                  <i class="fab fa-php mr-2" title="PHP"></i>
                  <i class="fas fa-code mr-2" title="Laravel"></i>
                </div>
              </div>
            </div>
  
  
  
            <!-- AGREGAR MAS PROYECTOS -->
  
  
  
  
  
            <!-- Finaliza Contenido-->
          </div>
        </div>
      </div>
  
  
  
  
  
  <!-- Modal -->
  <div id="myModal" class="modal">
      <div class="modal-content">
          <!-- Botón de cerrar -->
          <span class="close" id="closeModalButton">&times;</span>
          <!-- Contenedor del video -->
          <div class="video-container">
              <!-- Insertar el reproductor de YouTube -->
              <iframe id="videoPlayer" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
          </div>
      </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    </section>
  
  
  
  
  </template>
  
  <style scoped>
  .project-icons {
    margin-top: 10px;
    /* Ajusta el margen superior si es necesario */
  
  }
  
  .project-icons i {
    margin-right: 10px;
    /* Ajusta el margen derecho entre los iconos */
    font-size: 1.2rem;
    /* Tamaño personalizado */
    color: #002147;
    /* Color del texto */
  
  }
  
  .custom-button {
    color: white;
    /* Color del texto */
    /* Cambia el color de fondo al pasar el cursor */
    /* Color del borde */
  }
  
  .custom-button:hover {
    color: white;
    /* Cambia el color del texto al pasar el cursor */
  }
  
  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  a {
    font-family: 'Space Grotesk', sans-serif;
  
  }
  
  @media (max-width: 768px) {
    .project-icons {
      margin-top: 10px;
      /* Ajuste de margen para dispositivos medianos */
    }
  
    .custom-button {
      padding: 8px 20px;
      /* Ajuste de tamaño de botón */
      font-size: 14px;
      /* Ajuste de tamaño de fuente del botón */
    }
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
  }
  
  .image-container img {
    transition: transform 0.3s ease;
  }
  
  .image-container:hover img {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .image-container:hover .overlay {
    opacity: 1;
  }
  
  .description {
    max-height: 230px;
    /* Altura máxima para la descripción */
    overflow: hidden;
    padding: 20px;
    background-color: #f8f9fa;
    /* Color de fondo para la descripción */
    border: 1px solid #e9ecef;
    /* Borde ligero */
    border-top: none;
    /* Sin borde en la parte superior */
    border-bottom-left-radius: 8px;
    /* Bordes redondeados solo en la parte inferior izquierda */
    border-bottom-right-radius: 8px;
    /* Bordes redondeados solo en la parte inferior derecha */
    margin-top: -10px;
    /* Ajuste negativo para superponer ligeramente la descripción sobre la imagen */
    transition: max-height 0.3s ease;
    /* Transición suave para cambiar la altura máxima */
    font-family: "Ubuntu", sans-serif;
    font-size: 14px;
  }
  
  .description.expanded {
    max-height: none;
    /* Cuando se expande la descripción */
  
  }
  
  .letra {
    font-size: 14px;
  }
  
  .color1{
    background-color: red;
  }
  .color2{
    background-color: purple;
  }
  
  
  
  
  
  </style>
  
  
  
  
  <script>
  import { openModal, closeModal } from '../scripts/modal.js';
  import { scrollToTop } from '../scripts/scroll.js';
  
  export default {
    mounted() {
      // Lógica para el botón de scroll to top
      document.getElementById('scrollToTop').addEventListener('click', () => {
        scrollToTop();
      });
  
      // Lógica para abrir el modal
      const buttons = document.querySelectorAll('[data-video]');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const videoId = button.getAttribute('data-video');
          openModal(videoId);
        });
      });
  
      // Lógica para cerrar el modal
      document.getElementById('closeModalButton').addEventListener('click', () => {
        closeModal();
      });
    }
  }
  </script>
  