"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePaciente = exports.UpdatePacientes = exports.CreatePacientes = exports.getPacientesByID = exports.getPacientes = void 0;
const paciente_model_1 = require("../models/paciente.model");
//Me trae todos los pacientes
const getPacientes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield paciente_model_1.Paciente.findAll();
        response.status(200).json({
            message: "Operacion Exitosa",
            pacientes: pacientes
        });
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al obtener los pacientes",
            error: err.message
        });
    }
});
exports.getPacientes = getPacientes;
const getPacientesByID = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacienteByID = yield paciente_model_1.Paciente.findByPk(request.params.id);
        if (pacienteByID) {
            response.status(200).json({
                message: "Paciente traido con exito",
                paciente: pacienteByID
            });
        }
        else {
            response.status(404).json({
                message: "Paciente no encontrado"
            });
        }
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al obtener los pacientes",
            error: err
        });
    }
});
exports.getPacientesByID = getPacientesByID;
const CreatePacientes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacienteCreado = yield paciente_model_1.Paciente.create(request.body);
        response.status(201).json({
            message: "Paciente creado con éxito!",
        });
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al crear el paciente",
            error: err
        });
    }
});
exports.CreatePacientes = CreatePacientes;
const UpdatePacientes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacienteBusqueda = yield paciente_model_1.Paciente.findByPk(request.params.id);
        if (!pacienteBusqueda) {
            response.status(400).json({
                message: "El paciente no existe"
            });
        }
        else {
            const pacienteUpdate = yield paciente_model_1.Paciente.update(request.body, { where: { id_numeroCedula: request.params.id } });
            response.status(200).json({
                Message: "Paciente actualizado con exito"
            });
        }
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            error: err
        });
    }
});
exports.UpdatePacientes = UpdatePacientes;
const DeletePaciente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacienteBusqueda = yield paciente_model_1.Paciente.findByPk(request.params.id);
        if (!pacienteBusqueda) {
            response.status(400).json({
                message: "El paciente no existe"
            });
        }
        else {
            const pacienteDelete = yield paciente_model_1.Paciente.destroy({ where: { id_numeroCedula: request.params.id } });
            response.status(200).json({
                Message: "Paciente eliminado con exito"
            });
        }
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            error: err
        });
    }
});
exports.DeletePaciente = DeletePaciente;
