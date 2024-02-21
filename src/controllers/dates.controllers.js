// TO DO

import { SendMessage } from "../services/whatsappData";

/*
    Crear una recepcion de formuario de:
        Titulo.
        Contenido.
        Fecha de cita.
        Numero de telefono(para envio de mensajes por whatsapp).
        Mensaje cuando agendes.
        Mensaje cercano a la fecha.
        Mensaje si cancelaste la cita.
        Mensaje por si reprogramaste la cita.

*/

export const getDates = async ( req, res )  => {
    try {
        return res.status(200).json({
            ok:true, 
            msg:"All dates have been taken",
        });
    } catch ( error ) {
        console.error("There was an error on getting dates: ", error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on date",
            error,
        });
    };
};

export const getDate = async ( req, res ) => {
    try {
        return res.status(200).json({
            ok:true, 
            msg:"Date has been taken"
        });
    } catch (error) {
        console.error("There was an error on getting date: ",error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on getting date",
            error,
        });
    };
} 

export const postDate = async ( req, res ) => {
    try {
        const response = await SendMessage( "524494604761" );
        return res.status(201).json({
            ok:true, 
            msg:"Date created",
            data:{
                response,
            },
        });
    } catch ( error ) {
        console.error("There was an error on posting date: ",error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on posting date",
            error,
        });
    };
};

export const patchDate = async ( req, res ) => {
    try {
        return res.status(200).json({
            ok:true, 
            msg:"Date updated"
        });
    } catch ( error ) {
        console.error("There was an error on date: ",error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on updating date",
            error,
        });
    };
};

export const deleteDate = async ( req, res ) => {
    try {
        return res.status(200).json({
            ok:true, 
            msg:"Date Deleted"
        });
    } catch ( error ) {
        console.error("There was an error on date: ",error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on deleting date",
            error,
        });
    };
};