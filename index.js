var con=require("./conn");
con.connect(function(error){
    if(error )throw error;
    con.query("select * from book",function(error,result){
        if(error) throw error;
        else
        console.log("true")
        console.log(result);
    })
})