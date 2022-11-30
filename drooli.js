const {PythonShell} = require('python-shell');

let options={
    scriptPath:"/Users/jeanatijerina", //heh
    //args:[""]
};

PythonShell.run("mlFile.py",options,(err,res)=>{
    if (err)console.log(err)
    if (res) console.log(res)
});