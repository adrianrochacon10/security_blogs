document.addEventListener('DOMContentLoaded', function () {
  // Obtenemos la sección actual del atributo data-section
  const section = document.body.getAttribute('data-section')

  // Definimos un objeto que asocia secciones con sus respectivos archivos JSON
  const jsonFiles = {
    seccion1: '../data/seccion1.json',
    seccion2: '../data/seccion2.json',
    seccion3: '../data/seccion3.json'
  }

  // Verificamos si existe un archivo JSON para la sección actual
  if (jsonFiles[section]) {
    fetch(jsonFiles[section])
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        const cardSection = document.getElementById('cardSection')

        // Recorremos cada elemento del JSON para generar una tarjeta
        data.forEach((item) => {
          // Creamos el contenedor de la tarjeta
          const card = document.createElement('div')
          card.classList.add('card')

          // Creamos la imagen
          const img = document.createElement('img')
          img.src = item.imageUrl
          img.alt = item.title
          img.classList.add('card-image')

          // Creamos el título
          const title = document.createElement('h3')
          title.innerText = item.title

          // Creamos la descripción
          const description = document.createElement('p')
          description.innerText = item.description

          // Agregamos todos los elementos a la tarjeta
          card.appendChild(img)
          card.appendChild(title)
          card.appendChild(description)

          // Finalmente agregamos la tarjeta a la sección
          cardSection.appendChild(card)
        })
      })
      .catch((error) => console.error('Error al cargar el JSON:', error))
  } else {
    console.error('Sección no válida o archivo JSON no encontrado')
  }
})
