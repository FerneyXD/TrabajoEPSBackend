import express from "express";
import { Response, request } from "express";
import connection from "./db/config";
import { urlencoded, json } from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import pacientesRoutes from './routes/paciente.route'
import doctoresRoutes from './routes/doctor.route'
import citasRoutes from './routes/citas.routes'

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded());

app.get('./',(request,response)=>{
    response.send('Bienvenido a mi API!')
})


//Las rutas del paciente
app.use('/api/pacientes/',pacientesRoutes)

//Las rutas del doctor
app.use('/api/doctores/',doctoresRoutes)

//Las rutas del doctor
app.use('/api/citas/',citasRoutes)

//Error de rutas
app.use( (request, response)=>{
    response.status(404).send('404: page no found')
})


//Error de servidor
app.use( (request, response)=>{
    response.status(500).send('500: internal server error')
})

//Sincronizacion con base de datos y promesa, es como un try catch
connection.sync().then((()=>{
    console.log('Database Connected')
})).catch((error)=>{
    console.log(`error ${error} trying to connect to the database`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`servidor iniciado en: http://${process.env.HOST}:${process.env.PORT}/`)
})

