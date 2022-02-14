const myFun = () => {   
    
    let find = document.getElementById('myInput').value.toUpperCase();
    
    let  myTable =document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i <tr.length; i++){
        let td =tr[i].getElementsByTagName('td')[0];
      


        if(td){
            let textvalue = td.textContent || text.innerHTML;

            if(textvalue.toUpperCase().indexOf(find)> -1){
                tr[i].style.display ="";
            }else{
                tr[i].style.display ="none";    
            }

        }
    }
}



    
