import { RequestHandler, response } from "express";
import { Cita } from "../models/cita.model";
import { json } from "body-parser";
import { get, request } from "http";
import { where } from "sequelize";
import { Doctor } from "../models/doctor.model";
import { Sequelize } from "sequelize-typescript";

export const getCitas:RequestHandler=async(request, response)=>{
    try {
        
        const citasTraidas=await Cita.findAll()
        response.status(200).json({
            message:"Citas traidas con éxito",
            citas:citasTraidas
        })
    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error en traer la cita",
            error:err
        })
    }

}

export const getOneCita:RequestHandler=async(request, response)=>{
    try {
        const {profesional,paciente,fecha} = request.query
        const citaEncontrar = await Cita.findOne({where:{
            //aqui dice fehca porque si me quedo mal en el model :(
            fehca_hora:fecha,
            id_paciente:paciente,
            id_profesional:profesional
        }})

        if(!citaEncontrar){
            response.status(404).json({
                message:"la cita especifica no existe, sea serio hombre"
            })
        }else{
            response.status(200).json({
                message:"Cita encontrada con éxito",
                cita:citaEncontrar
            })

        }


    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error en traer la cita, disculpara los incovenientes",
            error:err
        })
    }
}

export const CreateCita:RequestHandler=async(request, response)=>{
    try {
        await Cita.create(request.body)
        response.status(201).json({
            message:"Cita creada con éxito, buena esa!"
        })
        
    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error al crear la cita, sorry",
            error:err
        })
        
    }
}

export const UpdateCita:RequestHandler=async(request, response)=>{
    try {
        const {profesional,paciente,fecha} = request.query
        const citaEncontrar = await Cita.findOne({where:{
            //aqui dice fehca porque si me quedo mal en el model :(
            fehca_hora:fecha,
            id_paciente:paciente,
            id_profesional:profesional
        }})

        if(!citaEncontrar){
            response.status(404).json({
                message:"la cita especifica no existe, sea serio hombre"
            })
        }else{
            await Cita.update(request.body,{where:{
                fehca_hora:fecha,
                id_paciente:paciente,
                id_profesional:profesional
            }})
            response.status(200).json({
                message:"Cita actualizada con exito, buena",
                DatosCita:"Hagase un get para traer la cita que me dio pereza poner más código aquí"
            })
           

        }
        
    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error al actualizar la cita, sorry!",
            error:err
        })
    }

}

export const DeleteCita:RequestHandler=async(request, response)=>{
    try {
        const {profesional,paciente,fecha} = request.query
        const citaEncontrar = await Cita.findOne({where:{
            //aqui dice fehca porque si me quedo mal en el model :(
            fehca_hora:fecha,
            id_paciente:paciente,
            id_profesional:profesional
        }})

        if(!citaEncontrar){
            response.status(404).json({
                message:"la cita especifica no existe, sea serio hombre"
            })
        }else{
            await Cita.destroy({where:{
                fehca_hora:fecha,
                id_paciente:paciente,
                id_profesional:profesional
            }})
            response.status(200).json({
                message:"Cita eliminada con éxito, no las elimine que le avanza la enfermedad",
            })
           

        }
    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error al eliminar la cita, ni idea que paso mano!",
            error:err
        })
        
    }
}

export const getCitasByPaciente:RequestHandler=async(request, response)=>{
    try {
        
        const citasPaciente= await Cita.findAll({where:{id_paciente:request.params.idpaciente}})
        if(citasPaciente.length===0){
            response.status(200).json({
                message: "El paciente no tiene citas asignadas"
            })
        }else{
            response.status(200).json({
                message:"Citas del paciente traidas con éxito",
                Citas_Paciente:citasPaciente
            })
        }


    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error al traer las citas!",
            error:err
        })
        
    }
}

export const getCitasByDoctor:RequestHandler=async(request, response)=>{
    try {
        
        const citasPaciente= await Cita.findAll({where:{id_profesional:request.params.iddoctor}})
        if(citasPaciente.length===0){
            response.status(200).json({
                message: "El doctor no tiene citas asignadas"
            })
        }else{
            response.status(200).json({
                message:"Citas del doctor traidas con éxito",
                Citas_Paciente:citasPaciente
            })
        }


    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error al traer las citas!",
            error:err
        })
        
    }
}

export const getEspecialidadDoctor:RequestHandler=async(request, response)=>{
    try {
        const citaEspecialidad=await Cita.findAll({
            include:{
                model:Doctor,
                attributes:["especialidad"]
            }
        })
        if(citaEspecialidad.length===0){
            response.status(200).json({
                message:"No hay citas asignadas para esa especialidad"
            })

        }else{
            response.status(200).json({
                message:"Doctor por especialidad traido con éxito",
                Datos:citaEspecialidad
                
            })
    
                 
        }
        
        
    } catch (error) {
        const err=error as Error
        response.status(500).json({
            message:"Error al traer las citas!",
            error:err
        })
        
        
    }
}