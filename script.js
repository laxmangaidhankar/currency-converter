const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


  const fromOption=document.querySelectorAll(".from");
  const toOption=document.querySelectorAll(".to");
  const dropdowns=document.querySelectorAll(".dropdown select");


//   for(code in countryList){
//     console.log(code, countryList[code]);
//   }
    
  
  for(let select of dropdowns){
    for(currencyCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currencyCode;
        newOption.value=currencyCode;
        
        if(select.name==="from" && currencyCode==="USD"){
            newOption.selected="selected";
        } else if(select.name==="to" && currencyCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
        }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
  }

  const updateFlag=(element)=>{
    let currencyCode=element.value;
    let countryCode=countryList[currencyCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
    console.log(img);

    //console.log(currencyCode);
    //console.log(element);
  }