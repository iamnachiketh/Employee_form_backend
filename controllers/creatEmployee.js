const  db = require('../db/connect');

createmployee = (req,res)=>{
    try{
     
    const employee = req.body;
    const contactDetails = employee.contactDetails;
    delete employee.contactDetails;
    const result = db.query('INSERT INTO employees SET ?', employee);
    //console.log('this is : ',result);
    const employeeMail = result.values.Email;
    const contactDetail = [contactDetails];
    //console.log('contact details!!: ',contactDetail);
    const contacts = contactDetail.map((contact) => ({ ...contact, employee_mail: employeeMail}));
    db.query('INSERT INTO contact_details (primarycontact,phone1,prelationship,secondarycontact,phone2,srelationship,employee_mail) VALUES ?', [contacts.map((contact) => Object.values(contact))]);
    //console.log(contacts);
    res.status(201).json({...employee, contactDetails});

    } catch(error){
        res.status(500).json({ error: error.message });
    }

}

module.exports = {
    createmployee
}