var data = [
    {
        id: 0,
        name: "Janu",
        English: 50,
        Maths: 86,
        Science: 77,
        SocialScience: 88
    },
    {
        id: 1,
        name: "Thanu",
        English: 75,
        Maths: 96,
        Science: 67,
        SocialScience: 91
    },
    {
        id: 2,
        name: "Tara",
        English: 90,
        Maths: 35,
        Science: 86,
        SocialScience: 100
    },
    {
        id: 3,
        name: "Glen",
        English: 79,
        Maths: 68,
        Science: 77,
        SocialScience: 78
    },
    {
        id: 4,
        name: "Zara",
        English: 80,
        Maths: 85,
        Science: 96,
        SocialScience: 68
    }
]
document.getElementById('filter').addEventListener('click',(e)=>{
    e.preventDefault();
})
function onPageLoad() {
    // code goes here to display table on page loads
    var tbody=document.getElementById('studentData');
    tbody.innerHTML="";
    let result=data;
    for( let i=0;i<result.length;i++){
        tbody.innerHTML+=`<tr><td>${i+1}</td><td>${result[i].name}</td><td>${result[i].English}</td><td>${result[i].Maths}</td><td>${result[i].Science}</td><td>${result[i].SocialScience}</td></tr>`
    }

}

function filterBy() {
   var subjects =document.getElementById('subjects').value;
   var radios=document.getElementsByName('mode');
   var inputMark=document.getElementById('maxMark');
   var mark=document.getElementById('mark').value;
   var checkedValue=null;
   var checkmarkValue=0;
   var checkvlauemax=0;

    radios.forEach((element) => {
    if (element.checked){
        checkedValue=element.value;
        checkmarkValue=mark;
      if (element.value=='between'){
        inputMark.style="display: block;";
        document.getElementById('to').style="display: block;";
        checkvlauemax=inputMark.value;
      }
      else{
         inputMark.style="display: none;";
        document.getElementById('to').style="display: none;";
      }
    }});
  

switch(checkedValue){
    case 'above':
        var listOfobj= data.filter((obj)=>{
            if (obj[subjects]>parseInt(checkmarkValue)){
                 return obj;
            }
        });
        break;
    case 'below':
    var listOfobj= data.filter((obj)=>{
            if (obj[subjects]<parseInt(checkmarkValue)){
                 return obj;
            }
        });
        break;
    case 'between':
    var listOfobj= data.filter((obj)=>{
            if (obj[subjects]>parseInt(checkmarkValue) && obj[subjects]<checkvlauemax){
                 return obj;
            }
        });
        break;
    default:
        return data;
}
return listOfobj;
}

function Clear() {
    // code goes here to clear filter
    var tbody=document.getElementById('studentData');
    tbody.innerHTML="";
    let result=data;
    for( let i=0;i<result.length;i++){
        tbody.innerHTML+=`<tr><td>${i+1}</td><td>${result[i].name}</td><td>${result[i].English}</td><td>${result[i].Maths}</td><td>${result[i].Science}</td><td>${result[i].SocialScience}</td></tr>`
    }
}

function filterClick() {
    var radios=document.getElementsByName('mode');
    // code goes here to handle filter button
    // if(radios[2].checked){
    //     if(document.getElementById('subjects').value==null || document.getElementById('mark').value==""||document.getElementById('maxMark').value==""){
    
    // }
    // }else{
    //     if(document.getElementById('subjects').value==null || document.getElementById('mark').value==""){
    
    // }
    // }
    let result=filterBy();
    var tbody=document.getElementById('studentData');
    tbody.innerHTML="";
    if(result.length==0){
      for( let i=0;i<data.length;i++){
        // tbody.innerHTML+=`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`
        tbody.innerHTML+=`<tr><td>${i+1}</td><td>${data[i].name}</td><td>${data[i].English}</td><td>${data[i].Maths}</td><td>${data[i].Science}</td><td>${data[i].SocialScience}</td></tr>`


    }  
    }else{
       for( let i=0;i<result.length;i++){
        tbody.innerHTML+=`<tr><td>${i+1}</td><td>${result[i].name}</td><td>${result[i].English}</td><td>${result[i].Maths}</td><td>${result[i].Science}</td><td>${result[i].SocialScience}</td></tr>`
    } 
    }
    document.getElementById('subjects').value="";
    radios[0].checked=true;
    document.getElementById('maxMark').value="";
    document.getElementById('mark').value="";

}

