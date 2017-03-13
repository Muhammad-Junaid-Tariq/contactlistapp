/**
 * Created by Muhammad Junaid on 1/23/2017.
 */
var person = require("./model");

module.exports = {
    create:function(req,res){
        var per = new person(req.body);
        per.save(function(err,result){
            if(err) throwError();
            res.json(result);
        });
    },
    read:function(req,res){
        person.find({},function(req,result){
            res.json(result);
        });
    },
    delete:function(req,res){
        console.log("i am in delete");
        var id = req.params._id;
        console.log(id);
        person.findByIdAndRemove(id,function(err,doc){
            if(err) throw (err.stack);
            res.json(doc);
        });
    },
    edit:function(req,res){
        var id = req.params.id;
        console.log(id);
        console.log("in edit");
        person.findById(id,function(err,result){
           if(err) throw(err.stack);
            res.json(result);
        });
    },
    update:function(req,res){
        var id = req.params.id;
        console.log(id);
        console.log("in update");
        person.findByIdAndUpdate(id,{name:req.body.name,email:req.body.email,number:req.body.number},function(err,result){
            if(err) throw(err.stack);
            res.json(result);
        });
    }

}