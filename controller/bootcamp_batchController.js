var connection = require ('../db/conn');

var sqlGet = "SELECT * FROM bootcamp_batch";
var sqlGetById = "SELECT * FROM bootcamp_batch where batch_id = ?";
var sqlPost = "INSERT INTO bootcamp_batch set ?";
var sqlUpdate = "UPDATE bootcamp_batch SET description = ?, sequence = ?, start_date = ?, finish_date = ? WHERE batch_id = ?";
var sqlDelete = "DELETE FROM bootcamp_batch WHERE batch_id = ?"

exports.getAll = function(req, res){
    connection.query(sqlGet, function(err, data){
        if (err){
            return res.json({
                status : 06, message : "error", value : []
            });
        }else{
            return res.json({
                status : 00, message : "success", value : data
            });
        }
    });
}

exports.getId = function(req, res){
    connection.query(sqlGetById, req.params['batch_id'], function(err, data){
        if (err){
            return res.json({
                status : 06, message : "error", value :[]
            });
        }else{
            return res.json({
                status : 00, message : "success", value : data
            });
        }
    })
}

exports.post = function(req, res){
    connection.query(sqlPost, req.body, function(err, data){
        if (err){
            return res.json({
                status : 06, message : "error", value : []
            });
        }else{
            return res.json({
                status : 00, message : "success", value : data
            });
        }
    });
}

exports.update = function(req, res){
    connection.query(sqlUpdate, [req.body.description, req.body.sequence, req.body.start_date, req.body.finish_date, req.body.batch_id], function(err, data){
        if (err){
            return res.json({
                status : 06, message: "error", value: []
            });
        }else{
            return res.json({
                status : 00, message:"success", value: data
            });
        }
    });
}

exports.delete = function(req, res){
    connection.query(sqlDelete, req.params['batch_id'], function(err, data){
        if(err){
            return res.json({
                status: 06, message: "error", value :[]
            });
        }else{
            return res.json({
                status : 00, message: "success", value : data
            });
        }
    });
}