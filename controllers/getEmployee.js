const db = require('../db/connect');

getemployee = (req,res)=> {

    const { email } = req.params;
    db.query('SELECT Ename,Ejob,Ephonenumber, Email,adress,city,state,id,primarycontact,phone1,prelationship,secondarycontact,phone2,srelationship FROM employees e, contact_details d WHERE e.Email = d.employee_mail and e.Email = ?', email,(error,result)=>{
        if(error){
            res.send(401).json({error:error})
        }
        console.log('this the result of employee',result);
        // const employee = result[0][0];
        res.status(200).send({...result});
        if (!result){
            res.status(404).json({ error: 'Employee not found' });
            return;
          }
    });
    
}

module.exports = {
    getemployee
}