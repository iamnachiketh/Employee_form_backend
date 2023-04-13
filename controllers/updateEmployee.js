const db = require('../db/connect');

updateemployee = (req,res)=>{

    try{
    const { email } = req.params;
    const employee = req.body;
    const contactDetails = employee.contactDetails;
    delete employee.contactDetails;
    
    db.query('UPDATE employees SET ? WHERE Email = ?', [employee,email],(error,result)=>{
        if (error) throw error;
        console.log('this is result of employees table!!',result);
        const contactDetail = [contactDetails];
         const contacts = contactDetail.map((contact) => ({ ...contact, employee_mail:email}));
        db.query('INSERT INTO contact_details (primarycontact,phone1,prelationship,secondarycontact,phone2,srelationship,employee_mail) VALUES ?', [contacts.map((contact) => Object.values(contact))],(err,r)=>{
            //if(err) throw err;
            console.log('this is result of insert query to contact details!!!',r);
            res.status(200).json({email, ...employee, contactDetails });
        });
    });

    // db.query('DELETE FROM contact_details WHERE employee_mail = ?', email,(err,r)=>{
    //     if(err) throw err;
    //         console.log('this is result of delete query!!!',r);
    // });
}catch(e){
    res.status(500).json({ error: error.message });
}

}
module.exports = {
    updateemployee
}