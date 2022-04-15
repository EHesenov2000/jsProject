$(document).ready(function(){











    let sortUp=document.querySelector(".fa-arrow-up-short-wide");
    let sortDown=document.querySelector(".fa-arrow-down-short-wide");
    sortUp.style.display="none"
    
    let dobavit=document.querySelector(".dobavit");
    
    let input=document.querySelector(".inputClass");
    
    let inputX=document.querySelector(".inputX");
    
    let siyahi=document.querySelector(".siyahi");
    inputX.addEventListener("click",function(){
        input.value="";
    })
    input.addEventListener('keyup', (event) => {
        // console.log('Key pressed');
        if(event.key=="Enter"){
            if(input.value!=""){
                let a=document.createElement("div");
                a.setAttribute("class","newItem")
                a.innerText=input.value;
                siyahi.append(a);
        
                let b=document.createElement("div");
                b.setAttribute("class","itemXIcon")
                b.innerHTML=`<div class="inCycle " id="addingItem"> <i class="fa-solid fa-xmark " ></i></div>`;
                a.append(b);
                input.value="";
            }
            else{
                alert("Deyer daxil edin")
            }
        }
      });

      
    sortDown.addEventListener("click",function(){
        sortDown.style.display="none"
        let list=[];
        for (let index = 0; index < document.querySelectorAll(".newItem").length; index++) {
        //    console.log(document.querySelectorAll(".newItem")[index]);
           list.push(document.querySelectorAll(".newItem")[index].innerText)
            
        }
        siyahi.innerHTML=null;
        list=list.sort().reverse();
        for (let k = 0; k < list.length; k++) {
            if(list[k]!=""){

            let a=document.createElement("div");
            a.setAttribute("class","newItem")
            a.innerText=list[k];
    
            let b=document.createElement("div");
            b.setAttribute("class","itemXIcon")
            b.innerHTML=`<div class="inCycle " id="addingItem"> <i class="fa-solid fa-xmark " ></i></div>`;
            a.append(b); 
            siyahi.append(a)    
            }       
        }
        // console.log(list)
        sortUp.style.display="block"
    })






    sortUp.addEventListener("click",function(){
        sortUp.style.display="none"
        let list=[];
        for (let index = 0; index < document.querySelectorAll(".newItem").length; index++) {
        //    console.log(document.querySelectorAll(".newItem")[index]);
           list.push(document.querySelectorAll(".newItem")[index].innerText)
            
        }
        siyahi.innerHTML=null;
        list=list.sort();
        for (let k = 0; k < list.length; k++) {
            if(list[k]!=""){
                let a=document.createElement("div");
                a.setAttribute("class","newItem")
                a.innerText=list[k];
        
                let b=document.createElement("div");
                b.setAttribute("class","itemXIcon")
                b.innerHTML=`<div class="inCycle " id="addingItem"> <i class="fa-solid fa-xmark " ></i></div>`;
                a.append(b); 
                siyahi.append(a) 
                // console.log(a)     
            }
             
        }
        // console.log(list)
        sortDown.style.display="block"
    })


    dobavit.addEventListener("click",function(){
        if(input.value!=""){
            let a=document.createElement("div");
            a.setAttribute("class","newItem")
            a.innerText=input.value;
            siyahi.append(a);
    
            let b=document.createElement("div");
            b.setAttribute("class","itemXIcon")
            b.innerHTML=`<div class="inCycle " id="addingItem"> <i class="fa-solid fa-xmark " ></i></div>`;
            a.append(b);
            input.value="";
        }
        else{
            alert("Deyer daxil edin")
        }
    
    
    })
    
    // let remove=document.getElementById("#addingItem");
    $( ".siyahi" ).on("click", "#addingItem",function() {
        this.parentElement.parentElement.innerHTML=null;
    }); 








  });

