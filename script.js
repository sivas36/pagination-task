
    var num=0;
    
    function cli(num){
          
          num = document.getElementsByTagName('a')[num].innerText;
          console.log(num)
    }


//1.Create a XMLHTTPREQUEST object
var req = new XMLHttpRequest();
//2.open a connection
//true is use bcz that should not affect the rest part of the exection of the prgrm

req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json ',true);
//3.send the connection
//send the request
req.send();
//4.once the data received successfully
//data receiveing fromthe server will be of string format
//to conver it into a js object we use .parse.


let data;
req.onload=function()
{
    
    data = JSON.parse(this.response);
    tables();
    


}
var table=document.createElement('table');

var thead= document.createElement('thead');
let tables=()=>{
    
table.className ="table";

table.style.border='2px solid black';
table.style.textAlign='center';
table.style.marginTop="3%";
table.style.marginLeft="7%";
table.style.width="90%";


thead.className="thead-dark";


var tr=document.createElement('tr');

var th1=createth('th','Name');
var th2=createth('th','ID');
var th3=createth('th',' mail id')



tr.append(th1,th2,th3);
thead.append(tr);


function createth(elementname,value=" "){
    var td=document.createElement(elementname);
    td.innerHTML=value;
    return td;
}
    for(let i=0;i<10;i++){
    var tbody=document.createElement('tbody');
    
    var tr=document.createElement('tr');
    var td1=createth('td',data[i].name);
    var td2=createth('td',data[i].id);
    var td3=createth('td',data[i].email);
 
    tr.append(td1,td2,td3);
    tbody.append(tr);
    table.append(thead,tbody);
    document.body.append(table);
   
    
    
    /*https://docs.google.com/document/d/1O8yVCwB_GaY5rZK1_mNkZ9GeYJLeom_dYmcVN3Mb2ws/edit
    https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json
    https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md*/
  
    }
}

var num;

    
let cd = (n) => {
        
    tableers(n);
    num=n;
}


let currenpage=num;

let cdn= () => {
    
    if(num<=9){
    tableers(num);
    
    num++;
    }
}

 
let cdp=()=>{
    if(num>0){
      num--;
      tableers(num);
    }
}




  



 
let tableers =(num) =>{
    
table.innerHTML=document.createElement('table');
    
table.className ="table";

table.style.border='2px solid black';
table.style.textAlign='center';
table.style.marginTop="3%";
table.style.marginLeft="7%";
table.style.width="90%";


thead= document.createElement('thead');
thead.className="thead-dark";


var tr=document.createElement('tr');

var th1=createth('th','Name');
var th2=createth('th','ID');
var th3=createth('th',' mail id')



tr.append(th1,th2,th3);
thead.append(tr);


function createth(elementname,value=" "){
    var td=document.createElement(elementname);
    td.innerHTML=value;
    return td;
}
   
    var tc=num*10+10;
    for(let i=num*10;i<tc;i++){
    var tbody=document.createElement('tbody');
    
    var tr=document.createElement('tr');
    var td1=createth('td',data[i].name);
    var td2=createth('td',data[i].id);
    var td3=createth('td',data[i].email);
 
    tr.append(td1,td2,td3);
    tbody.append(tr);
    table.append(thead,tbody);
    document.body.append(table);
   
    
    
    /*https://docs.google.com/document/d/1O8yVCwB_GaY5rZK1_mNkZ9GeYJLeom_dYmcVN3Mb2ws/edit
    https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json
    https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md*/
  
    
    
   
    }
    
}








    
   
  

    

