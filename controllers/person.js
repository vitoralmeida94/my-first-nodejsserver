let persons = [
    {id: 1, name:'Vitor', age: 25, cpf: '14866452757', contact: 998512776},
    {id: 2, name:'Anna', age: 23, cpf: '5632562', contact: 12345678},
    {id: 3, name:'Francisco', age: 53, cpf: '9405639', contact: 53626},
    {id: 4, name:'Lucia', age: 54, cpf: '88756393', contact: 023642},
    {id: 5, name:'Diego', age: 15, cpf: '17171717', contact: 171717171},
];

exports.getPersons = (req,res,next) => {
    res.status(200).json({persons:persons});
};

exports.getPersonById = async (req,res,next) => {
    let id = req.params.id;
    try {
            let result = await persons.filter(p => p.id === parseInt(id));
            if(result.length === 0) {
                res.status(404).json({message:'Person not found'});
            }
            res.status(200).json({person: result});
        }
        catch (error) {
            if(!err.statusCode){
            err.statusCode = 500
            }
            next(err);
        }
   
};