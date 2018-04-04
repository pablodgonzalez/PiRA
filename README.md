# PiRA

PiRA es una idea original de Adrian Alvarez, Asistente de Medios Gabinete de Informática de Caleta Olivia, Santa Cruz, Argentina.

El objetivo pedagógico de PiRA es fomentar a través de la ludificación de las clases la comprensión de los temas explicados o proyectados, la colaboración y recompensas en pos de lograr objetivos.

Dichos ojetivos se logran superando de manera correcta los desafios planteados en la aplicación.

A su vez el Maestro controla el ritmo de amprendizaje de los alumnos obteniendo métricas detalladas de las actividades y respuestas obtenidas indivualmente y como grupo.
Es así que el Maestro puede elegir qué actividades ofrecer a cada alumno regulando el avance de estudio para explotar las habilidades individuales de cada alumno sin descuidar los objetivos generales del grupo. 

El uso de PiRA esta pensado para ser usado de manera individual por cada maestro, ya que es imposible controlar la calidad de las conexiones en cada escuela. Sin embargo es posible armar redes privadas pequeñas para el aula, pudiendo el maestro con un simple comando brindar el servidor para el trabajo en el aula.

## Getting Started

//TODO: add docker-compose

### Prerequisites
- [Docker](https://docs.docker.com/install/)
Usamos docker para evitar la instalación del resto de las dependencias. Si deseas utilizar PiRA manualmente sigue a la sección de [Collaborate](#Colaborate)

#Collaborate
Puedes modificar PiRA a tu antojo y por supuesto proponer y enviar mejoras para compartilas con la comunidad.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
We recommend run mongo over docker -> [Read more](https://hub.docker.com/_/mongo/)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running or
docker run --name PiRAdb -p 27017:27017 -v ./data:/data/db -d mongo

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

###Credits
This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 5.0.0-beta.3.
