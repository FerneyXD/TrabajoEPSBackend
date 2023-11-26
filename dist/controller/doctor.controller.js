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
exports.DeleteDoctor = exports.UpdateDoctor = exports.CreateDoctor = exports.getDoctoresByID = exports.getDoctores = void 0;
const doctor_model_1 = require("../models/doctor.model");
//Me trae todos los pacientes
const getDoctores = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctores = yield doctor_model_1.Doctor.findAll();
        response.status(200).json({
            message: "Operacion Exitosa",
            pacientes: doctores
        });
    }
    catch (error) {
        const err = error;
        response.status(500).json({
            message: "Error al obtener los doctores",
            error: err.message
        });
    }
});
exports.getDoctores = getDoctores;
const getDoctoresByID = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DoctorByID = yield doctor_model_1.Doctor.findByPk(request.params.id);
        if (DoctorByID) {
            response.status(200).json({
                message: "Doctor traido con exito",
                paciente: DoctorByID
            });
        }
        else {
            response.status(404).json({
                message: "Doctor no encontrado"
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
exports.getDoctoresByID = getDoctoresByID;
const CreateDoctor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DoctorCreado = yield doctor_model_1.Doctor.create(request.body);
        response.status(201).json({
            message: "Doctor creado con éxito!",
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
exports.CreateDoctor = CreateDoctor;
const UpdateDoctor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctorBusqueda = yield doctor_model_1.Doctor.findByPk(request.params.id);
        if (!doctorBusqueda) {
            response.status(400).json({
                message: "El doctor no existe"
            });
        }
        else {
            const doctorUpdate = yield doctor_model_1.Doctor.update(request.body, { where: { id_numeroCedula: request.params.id } });
            response.status(200).json({
                Message: "Doctor actualizado con exito"
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
exports.UpdateDoctor = UpdateDoctor;
const DeleteDoctor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctorBusqueda = yield doctor_model_1.Doctor.findByPk(request.params.id);
        if (!doctorBusqueda) {
            response.status(400).json({
                message: "El Doctor no existe"
            });
        }
        else {
            const doctorDelete = yield doctor_model_1.Doctor.destroy({ where: { id_numeroCedula: request.params.id } });
            response.status(200).json({
                Message: "Doctor eliminado con exito"
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
exports.DeleteDoctor = DeleteDoctor;
