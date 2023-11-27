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
exports.DeleteCita = exports.UpdateCita = exports.CreateCita = exports.getOneCita = exports.getCitas = void 0;
const cita_model_1 = require("../models/cita.model");
const getCitas = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cita_model_1.Cita.findAll();
        response.status(200).json({
            message: "Citas traidas con éxito"
        });
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error en traer la cita",
            error: err
        });
    }
});
exports.getCitas = getCitas;
const getOneCita = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = request.query;
        const citaEncontrar = yield cita_model_1.Cita.findOne({ where: {
                //aqui dice fehca porque si me quedo mal en el model :(
                fehca_hora: fecha,
                id_paciente: paciente,
                id_profesional: profesional
            } });
        if (!citaEncontrar) {
            response.status(404).json({
                message: "la cita especifica no existe, sea serio hombre"
            });
        }
        else {
            response.status(200).json({
                message: "Cita encontrada con éxito",
                cita: citaEncontrar
            });
        }
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error en traer la cita, disculpara los incovenientes",
            error: err
        });
    }
});
exports.getOneCita = getOneCita;
const CreateCita = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cita_model_1.Cita.create(request.body);
        response.status(201).json({
            message: "Cita creada con éxito, buena esa!"
        });
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al crear la cita, sorry",
            error: err
        });
    }
});
exports.CreateCita = CreateCita;
const UpdateCita = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = request.query;
        const citaEncontrar = yield cita_model_1.Cita.findOne({ where: {
                //aqui dice fehca porque si me quedo mal en el model :(
                fehca_hora: fecha,
                id_paciente: paciente,
                id_profesional: profesional
            } });
        if (!citaEncontrar) {
            response.status(404).json({
                message: "la cita especifica no existe, sea serio hombre"
            });
        }
        else {
            yield cita_model_1.Cita.update(request.body, { where: {
                    fehca_hora: fecha,
                    id_paciente: paciente,
                    id_profesional: profesional
                } });
            response.status(200).json({
                message: "Cita actualizada con exito, buena",
                DatosCita: "Hagase un get para traer la cita que me dio pereza poner más código aquí"
            });
        }
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al actualizar la cita, sorry!",
            error: err
        });
    }
});
exports.UpdateCita = UpdateCita;
const DeleteCita = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = request.query;
        const citaEncontrar = yield cita_model_1.Cita.findOne({ where: {
                //aqui dice fehca porque si me quedo mal en el model :(
                fehca_hora: fecha,
                id_paciente: paciente,
                id_profesional: profesional
            } });
        if (!citaEncontrar) {
            response.status(404).json({
                message: "la cita especifica no existe, sea serio hombre"
            });
        }
        else {
            yield cita_model_1.Cita.destroy({ where: {
                    fehca_hora: fecha,
                    id_paciente: paciente,
                    id_profesional: profesional
                } });
            response.status(200).json({
                message: "Cita eliminada con éxito, no las elimine que le avanza la enfermedad",
            });
        }
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al eliminar la cita, ni idea que paso mano!",
            error: err
        });
    }
});
exports.DeleteCita = DeleteCita;
