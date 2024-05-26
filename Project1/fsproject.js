
// Create ana pplication with following features:
// 1)You need to write in file using fsmodule and forevery write operation you need to create a newfile.(DONE)
// 2)You must take input from the user as filename and keep saving filenames in one array ,in one separate textfile
// 3)Next time when user again executes the code.Check if file already exists,If not create one.
// Write simpletext ‘You are awesome’ in every new file.



const fs=require("fs");
const yargs=require('yargs')


//------------------------------------------------Seperate file for storing filenames----------------------------------------
fs.writeFile('Created_File_names.txt','File names:-',function(err){
    if(err){
        console.log("filenames area error")
    }
    else{
        console.log("created successfully");
    }
})
//-----------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------CODE FOR CHECKING,CREATING,STORING FILES-------------
var filenamesarray=[];
yargs.command({
    command:'awesome.txt',
    describe:'Add a new file',
    handler:function(argv){
        const filearray=argv._;
       
        filenamesarray=[...filearray];
     
        for(let i=0;i<filearray.length;i++){
            fs.readFile(filearray[i],'utf-8',(err,data)=>{
                if(err){
                    console.log("file is not created",i,filearray[i]);
                    console.log('Please wait file is creating............')
                    fs.writeFile(filearray[i],'You are awesome',(err)=>{
                        if(err){
                            console.log("There is an error in creating file")
                        }
                        else{
                            console.log("File created successfully....File name:-",filearray[i])
                        }
                    })
                    var names=filenamesarray+","
                    fs.appendFile('./Created_File_names.txt',names,(err)=>{
                        if(err){
                            console.log("append error");
                        }
                    })

                }
                else{
                    console.log('file already created');
                }
            
            })
        }
        
    }
})

yargs.argv;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

