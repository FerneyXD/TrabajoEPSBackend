# Descripción del proyecto
Este proyecto es un API REST que simula el funcionamiento básico de una EPS, en el cual se puedes crear doctores, pacientes y asignar citas.


**Caracteristicas**
               
1. CRUD Pacientes
2. CRUD Doctores
3. CRUD Cita

##  **Tabla de contenido**

[TOCM]

[TOC]

# Instalacion
Para instalar este repositorio, lo puedes hacer como cualquier otro haciendo un Git Clone, sin embargo te dejo un represetación visual paso a paso de como lo puedes hacer.
####Paso 1
Te ubicas en la carpeta donde vas a copiar el repositorio, das click derecho y eliges la opción Open Git Bash here (para acceder esta opción tienes que tener instalado Git Hub con anterioridad) ver la imagen de abajo.

![](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/ImagenesReadme/2proyecto.PNG)

#### Paso 2
Copias el código descrito en lineas abajo y lo pegas en la ventana del Git Bash.

`git clone https://github.com/FerneyXD/TrabajoEPSBackend.git`

![](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/ImagenesReadme/3proyecto.PNG)

#### Paso 3
Ya con el repositorio clonado, creas un archivo de .env en la raiz de la carpeta y agregas las siguientes variables de entorno.

    HOST='127.0.0.1'
    PORT=3000
    USERNAME="root"
    PASSWORD="Contraseña de la base de datos"
    DATABASE='Nombre de la base de datos'
![](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/ImagenesReadme/4proyecto.PNG)
**El puerto esta configurado por defecto, (3306) que es el de puerto MYSQL, en caso de que tengas otro puerto,  puedes modificarlo directamente desde el archivo config.ts que se encuentra en la carpeta "src/db" o tambien puedes crear un variable 
de entorno llamada puerto, abajo puedes ver un ejemplo.**

En el archivo .env.

    HOST='127.0.0.1'
    PORT=3000
    USERNAME="root"
    PASSWORD="Contraseña de la base de datos"
    DATABASE='Nombre de la base de datos'
	PUERTO=Tu número de puerto
o directamente en el archivo config.ts
![](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/ImagenesReadme/5proyecto.PNG)


# Modelo de datos utilizado
Para este proyecto se utilizo MYSQL y la libreria sequelize para el manejo de datos desde TypeScript, el modelo entidad relación (MER) utilizado es el siguiente.
![](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/ImagenesReadme/MER%20(1).png)

# Funcionalidades del proyecto
A continuación veremos cada una de las funcionalidades de la API.

Para iniciar el API solo necesitamos ejecutar el siguiente código `npm run dev` y esperar a que nos muestre el mensaje de Database Connected.
imagen aqui

**Todas la pruebas se hacen con POSTMAN**

### Pacientes
##### Crear Paciente
Para crear pacientes tenemos que enviar por medio de un post el body y un json tal y como se muestra en la imagen de abajo, todo con el siguiente END POINT `http://localhost:3000/api/pacientes/`.

![](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/ImagenesReadme/CrearPaciente.gif)
##### Traer Pacientes
Para traer todos los pacientes creados hacemos un get con el siguiente END POINT `http://localhost:3000/api/pacientes/`.

giiif

##### Traer Paciente
Para traer un unico paciente, hacemos un get con el siguiente END POINT `http://localhost:3000/api/pacientes/id_paciente`.

giiif

##### Eliminar Paciente
Para eliminar un paciente específico hacemos un delete con el siguiente END POINT `http://localhost:3000/api/pacientes/id_paciente`.

giiif
##### Actualizar Paciente
Para actualizar un paciente, solo enviamos por medio de un put con un json en el body con la información a actualizar y con el siguiente END POINT.
`http://localhost:3000/api/pacientes/id_paciente`.

giiif

### Doctores
##### Crear Doctor
Para crear un doctor hacemos un post y con un json en el body con la información del doctor a crear y con el siguiente END POINT: `http://localhost:3000/api/doctores/`

giiif

##### Traer Doctore
Para traer un doctor específico hacemos un GET con el siguiente END POINT. `http://localhost:3000/api/doctores/id_doctor`

giiif
##### Eliminar Doctor
Para eliminar un doctor hacemos un DELETE con el siguiente END POINT.
`http://localhost:3000/api/doctores/id_doctor`

giif

##### Actualizar Doctor
Para actualizar un doctor específico se debe hacer un PUT y tener en el body un JSON con la información a actualizar todo con el siguiente END POINT.
`http://localhost:3000/api/doctores/id_doctor`

giiif
