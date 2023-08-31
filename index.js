function addNewEdu(){
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('mt-3');
    newNode.classList.add('edField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Add Education");



    let insertEdu=document.getElementById("Edu");
    let eduBtn=document.getElementById("bt-edu");

    insertEdu.insertBefore(newNode,eduBtn);


}


function addNewWe(){
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('mt-3');
    newNode.classList.add('weField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Add Work Experience");



    let insertWe=document.getElementById("WE");
    let weBtn=document.getElementById("bt-we");

    insertWe.insertBefore(newNode,weBtn);


}

function addNewProj(){
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('mt-3');
    newNode.classList.add('pField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Add Project");



    let insertProj=document.getElementById("Proj");
    let pBtn=document.getElementById("bt-proj");

    insertProj.insertBefore(newNode,pBtn);


}

function addNewSkill(){
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('mt-3');
    newNode.classList.add('sField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Add Skill");



    let insertSkill=document.getElementById("Skills");
    let sBtn=document.getElementById("bt-skills");

    insertSkill.insertBefore(newNode,sBtn);


}

function addNewsSkill(){
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('mt-3');
    newNode.classList.add('ssField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Add Soft Skill");



    let insertsSkill=document.getElementById("Softskills");
    let ssBtn=document.getElementById("bt-sskills");

    insertsSkill.insertBefore(newNode,ssBtn);


}

function GenerateCV(){
    document.getElementById("nameT").innerHTML=document.getElementById("yourName").value;

    document.getElementById("aboutT").innerHTML=document.getElementById("about").value;
    document.getElementById("addressT").innerHTML=document.getElementById("address").value;
    document.getElementById("numberT").innerHTML=document.getElementById("phNum").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkd").value;
    document.getElementById("instaT").innerHTML=document.getElementById("insta").value;
    document.getElementById("facebookT").innerHTML=document.getElementById("facebook").value;
    document.getElementById("githubT").innerHTML=document.getElementById("github").value;

    document.getElementById("cv-template").style.display="block";
    document.getElementById("cv-form").style.display="none";
    


    let educ=document.getElementsByClassName("edField");
    let str="";

    for(let e of educ){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("eduT").innerHTML= str;
    
    let skl=document.getElementsByClassName("sField");
    let str1="";

    for(let e of skl){
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("ST").innerHTML= str1;

    let proj=document.getElementsByClassName("pField");
    let str2="";

    for(let e of proj){
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("PT").innerHTML= str2;
    
    let exp=document.getElementsByClassName("weField");
    let str3="";

    for(let e of exp){
        str3 = str3 + `<li> ${e.value} </li>`;
    }

    document.getElementById("ET").innerHTML= str3;

    let ssk=document.getElementsByClassName("ssField");
    let str4="";

    for(let e of ssk){
        str4 = str4 + `<li> ${e.value} </li>`;
    }

    document.getElementById("SsT").innerHTML= str4;
}

function PrintCV(){
    document.getElementById("print").style.display="none";
    window.print();
}

function textedit(){
    document.getElementById("cv-template").style.display="none";
    document.getElementById("cv-form").style.display="block";
}
