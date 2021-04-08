showNotes();
let addbtn=document.getElementById("addbtn").addEventListener('click',(e)=>{
let addtxt=document.getElementById("addtxt");
let titletxt=document.getElementById("titletxt");
let notes=localStorage.getItem("notes");
if(notes==null){
    noteObj=[];
}
else{
    noteObj=JSON.parse(notes);
}
const myobj={
    title:titletxt.value,
    text:addtxt.value
}
noteObj.push(myobj);
localStorage.setItem("notes",JSON.stringify(noteObj));
addtxt.value="";
titletxt.value="";

showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    let str="";
    noteObj.forEach((element,index) => {
        str+=` <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
           <h5 class="card-title">${element.title}</h5>
           <p class="card-text">${element.text}</p>
           <a id="delbtn" onclick="Delnotes(${index})" class="btn btn-primary">Delete Card</a>
         </div>
       </div>
   </div>`
    });
    document.getElementById("notes").innerHTML=str;
}

function Delnotes(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    noteObj.splice(index,1);//use to remove element from array.
    localStorage.setItem("notes",JSON.stringify(noteObj));
    showNotes();
}
let searchTxt=document.getElementById("searchtxt");
searchTxt.addEventListener('input',()=>{
    const inpval=searchTxt.value.toLowerCase();
    var notecard=document.getElementsByClassName("noteCard");
    Array.from(notecard).forEach((element)=>{
        var text=element.getElementsByTagName("p")[0].innerText;
        var tile=element.getElementsByTagName("h5")[0].innerText;
        if(text.includes(inpval)|| tile.includes(inpval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})