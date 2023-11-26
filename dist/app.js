"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const paciente_route_1 = __importDefault(require("./routes/paciente.route"));
const doctor_route_1 = __importDefault(require("./routes/doctor.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
app.use((0, body_parser_1.urlencoded)());
app.get('./', (request, response) => {
    response.send('Bienvenido a mi API!');
});
//Las rutas del paciente
app.use('/api/pacientes/', paciente_route_1.default);
//Las rutas del doctor
app.use('/api/doctores/', doctor_route_1.default);
//Error de rutas
app.use((request, response) => {
    response.status(404).send('404: page no found');
});
//Error de servidor
app.use((request, response) => {
    response.status(500).send('500: internal server error');
});
//Sincronizacion con base de datos y promesa, es como un try catch
config_1.default.sync().then((() => {
    console.log('Database Connected');
})).catch((error) => {
    console.log(`error ${error} trying to connect to the database`);
});
app.listen(process.env.PORT, () => {
    console.log(`servidor iniciado en: http://${process.env.HOST}:${process.env.PORT}/`);
});
