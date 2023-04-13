const  db = require('../db/connect');

listEmployee = async (req,res)=>{
    let employees,total;
        try{
    const { page,size} = req.query;
    const offset = (page - 1) * size;
    db.query(`SELECT * FROM employees LIMIT ${size} OFFSET  ${offset}`,(error,result)=>{
        if (error) throw error
        console.log('this is result!!!',result);
        employees = result;
        console.log('employees',employees);
        db.query('SELECT COUNT(*) as total FROM employees',(error,count)=>{
            if (error) throw error
            console.log('this is count',count);
            total = count[0].total;
            res.status(200).json({offset, size,total,employees});
        });
    });
    //console.log('this is result',result);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
}

module.exports = {
    listEmployee
}