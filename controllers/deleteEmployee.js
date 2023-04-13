const db = require('../db/connect');

deleteemployee = (req,res)=>{
    try{
    const {email} = req.params;
    db.query('DELETE FROM contact_details WHERE employee_mail = ?',email,(err,result)=>{
        if(err) throw err;
        console.log('this is deletion result!!! : ',result);
        db.query('DELETE FROM employees WHERE Email = ?', email,(error,r)=>{
             if(error) throw error;
            console.log('this deletion for employees table!!',r);
            res.status(204).json({message:"successfully deleted!!!"});
        });
    });
}catch(e){
    res.status(500).json({ error: e.message });
}
    
}

module.exports = {
    deleteemployee
}