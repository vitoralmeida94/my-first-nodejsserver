let persons = [
    {name:'Vitor', age: 25, cpf: '14866452757', contact: 998512776},
    {name:'Anna', age: 23, cpf: '5632562', contact: 12345678},
    {name:'Francisco', age: 53, cpf: '9405639', contact: 53626},
    {name:'Lucia', age: 54, cpf: '88756393', contact: 023642},
    {name:'Diego', age: 15, cpf: '17171717', contact: 171717171},
];

exports.getPersons = (req,res,next) => {
    res.status(200).json({persons:persons});
};