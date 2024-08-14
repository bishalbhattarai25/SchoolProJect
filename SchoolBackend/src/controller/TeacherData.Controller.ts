import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TeacherData } from "../entity/TeacherData";
import { AppError } from "../Utils/AppError";
import { error } from "console";

const TeacherDataRepo = AppDataSource.getRepository(TeacherData)

export const getTeacherData=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await TeacherDataRepo.find().then(result=>{
            res.status(200).json({
                message:"Data fetched",
                data:result
            })
        }).catch(err=>{
            next(new AppError(400, err))
        })
    } 
    catch (error) {
        next(new AppError(500, error))
    }
}

export const postTeacherData= async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await TeacherDataRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"Data Posted",
                data:result
            })
        })
    } 
    catch (error) {
        next(new AppError(500, error))
        
    }
}