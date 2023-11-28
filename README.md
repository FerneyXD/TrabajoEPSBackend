#API REST EPS 🏥

# Descripción del proyecto 
Este proyecto es un API REST que simula el funcionamiento básico de una EPS, en el cual se puedes crear doctores, pacientes y asignar citas.


**Caracteristicas**
               
1. CRUD Pacientes
2. CRUD Doctores
3. CRUD Cita


# Instalación
Para instalar este repositorio, lo puedes hacer como cualquier otro haciendo un Git Clone, sin embargo te dejo un represetación visual paso a paso de como lo puedes hacer.
####Paso 1
Te ubicas en la carpeta donde vas a copiar el repositorio, das click derecho y eliges la opción Open Git Bash here (para acceder esta opción tienes que tener instalado Git Hub con anterioridad) ver la imagen de abajo.

![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/2proyecto.PNG)

#### Paso 2
Copias el código descrito en lineas abajo y lo pegas en la ventana del Git Bash.

`git clone https://github.com/FerneyXD/TrabajoEPSBackend.git`

![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/3proyecto.PNG)

#### Paso 3
Ya con el repositorio clonado, creas un archivo de .env en la raiz de la carpeta y agregas las siguientes variables de entorno.

    HOST='127.0.0.1'
    PORT=3000
    USERNAME="root"
    PASSWORD="Contraseña de la base de datos"
    DATABASE='Nombre de la base de datos'
	
![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/4proyecto.PNG)

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

![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/5proyecto.PNG)


# Modelo de datos utilizado
Para este proyecto se utilizo MYSQL y la libreria sequelize para el manejo de datos desde TypeScript, el modelo entidad relación (MER) utilizado es el siguiente.
![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/MER%20(1).png)

# Funcionalidades del proyecto
A continuación veremos cada una de las funcionalidades de la API.

Para iniciar el API solo necesitamos ejecutar el siguiente código `npm run dev` y esperar a que nos muestre el mensaje de Database Connected.

![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/DatabaseConnected.PNG)

**Todas la pruebas se hacen con POSTMAN**

## Pacientes
##### Crear Paciente
Para crear pacientes tenemos que enviar por medio de un POST el body y un JSON tal y como se muestra en la imagen de abajo, todo con el siguiente END POINT. `http://localhost:3000/api/pacientes/`

![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/CrearPaciente.gif)

##### Traer Pacientes
Para traer todos los pacientes creados hacemos un GET con el siguiente END POINT. `http://localhost:3000/api/pacientes/`

![a](https://github.com/FerneyXD/ImagenesProyecto/blob/main/TraerPacientes.gif)

##### Traer Paciente
Para traer un unico paciente, hacemos un GET con el siguiente END POINT. `http://localhost:3000/api/pacientes/id_paciente`

![](https://github.com/FerneyXD/ImagenesProyecto/blob/main/TraerPaciente.gif)


##### Eliminar Paciente
Para eliminar un paciente específico hacemos un DELETE con el siguiente END POINT. `http://localhost:3000/api/pacientes/id_paciente`

![a](https://github.com/FerneyXD/ImagenesProyecto/blob/main/EliminarPaciente.gif)

##### Actualizar Paciente
Para actualizar un paciente, solo enviamos por medio de un PUT con un JSON en el body con la información a actualizar y con el siguiente END POINT.
`http://localhost:3000/api/pacientes/id_paciente`

![a](https://github.com/FerneyXD/ImagenesProyecto/blob/main/ActualizarPaciente.gif)

## Doctores
##### Crear Doctor
Para crear un doctor hacemos un POST y con un JSON en el body con la información del doctor a crear y con el siguiente END POINT.
`http://localhost:3000/api/doctores/`

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

## Citas
##### Crear cita
Para crear una cita se debe hacer un POST con un JSON en el body y el siguiente END POINT.
`http://localhost:3000/api/citas/`

giiif

##### Traer citas
Para traer las citas se debe hacer un GET con el siguiente END POINT.
`http://localhost:3000/api/citas/`

giiif

##### Traer cita específica
Para traer una cita específica se debe hacer un GET con un query en el siguiente END POINT.
`http://localhost:3000/api/citas/one-cita?profesional=id_doctor&paciente=id_paciente&fecha=2023-11-24T00:00:00:000Z`

giiif

##### Actualizar cita
Para actualizar una cita específica se debe hacer un PUT con un JSON en el body y un query en el siguiente END POINT.
`http://localhost:3000/api/citas/one-cita?profesional=id_doctor&paciente=id_paciente&fecha=2023-11-24T00:00:00:000Z`

giiif
##### Eliminar Cita
Para eliminar una cita específica se debe hacer un DELETE con un JSON en el body y un query en el siguiente END POINT.
`http://localhost:3000/api/citas/one-cita?profesional=id_doctor&paciente=id_paciente&fecha=2023-11-24T00:00:00:000Z`

giiff

##### Traer cita por paciente
Para traer las citas que tiene un paciente específico, se debe hacer un GET con el siguiente END POINT.
`http://localhost:3000/api/citas/id_paciente/paciente`

giiif
##### Traer cita por doctor
Para traer las citas que tiene un doctor específico, se debe hacer un GET con el siguiente END POINT.
`http://localhost:3000/api/citas/id_paciente/paciente`

giiif
##### Traer citas con especialidad
Para traer las citas que tiene un doctor específico, se debe hacer un GET con el siguiente END POINT.
`http://localhost:3000/api/citas/doctor/especialidad`

giiif

# Distribucion de proyecto
El proyecto tiene diferentes carpetas y archivos, en las cuales puedes encontrar [SRC](https://github.com/FerneyXD/TrabajoEPSBackend/tree/main/src "SRC"), donde tenemos otras subcarpetas las cuales son:

- [Controller](https://github.com/FerneyXD/TrabajoEPSBackend/tree/main/src/controller "Controller") en esta carpeta estan los metodos con la lógica de el POST, GET, PUT y DELETE de las diferentes entidades.
- [db](https://github.com/FerneyXD/TrabajoEPSBackend/tree/main/src/db "db") aquí se encuentra el archivo de configuracion de la base de datos.
- [models](https://github.com/FerneyXD/TrabajoEPSBackend/tree/main/src/models "models") en esta carpeta estan los modelos de las tablas según el MER.
- [routes](https://github.com/FerneyXD/TrabajoEPSBackend/tree/main/src/routes "routes") aquí puedes encontrar archivos con la configuración de las rutas de cada entidad.
- El archivo [app.ts](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/src/app.ts "app.ts")es el archivo TypeScrip principal del app.

**Los archivos que estan fuera de la carpeta [SRC](https://github.com/FerneyXD/TrabajoEPSBackend/tree/main/src "SRC") son archivos de configuración del `NPM INIT` donde estan las dependencias y demás.**


# Tecnologias utilizadas
Las tecnologias utilizadas son Node.js, TypeScript, MYSQL y las siguientes dependencias, las cuales puedes consultar también, en el archivo [package.json](https://github.com/FerneyXD/TrabajoEPSBackend/blob/main/package.json "package.json").

screenShot

# Desarolladores
Este proyecto fue creado por Ferney David Guillen Alvarez :smile: , tomando de referencia el MER(modelo entidad relación) visto y código visto en clase.

