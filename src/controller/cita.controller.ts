import { RequestHandler, response } from "express";
import { Cita } from "../models/cita.model";
import { json } from "body-parser";
import { get, request } from "http";
import { where } from "sequelize";

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