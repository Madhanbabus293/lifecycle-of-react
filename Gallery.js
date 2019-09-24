var count=1;
Details = () =>{
    if(count==1){
    document.getElementById("Menu").style.display="block";
    count=0;
    }
    else{
        count=1;
        document.getElementById("Menu").style.display="none";
    }
}