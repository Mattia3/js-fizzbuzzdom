
/*for (let i = 1; i <= 7; i++ ){
  const row = document.createElement("div");
  row.classList.add("row");
  containerScacchiera.append(row);
 
  for (let x = 1; x <= 7; x++){
   
    const divisibiliPer3 = x % 3 === 0;
      let bgColor = "";

    if(divisibiliPer3){
        bgColor = "bg-danger"
      } 
      
    row.innerHTML += `<div class="col g-4">
                          <div class="ratio ratio-1x1 border ${bgColor}">
                           <div></div>
                          </div>
                      </div>`;
    

   
  }
  
}*/

for (let i = 1; i <= 100; i++){
  const rowCols = document.querySelector(".row-cols-7")

  const divisibiliPer3 = i % 3 === 0;
  let bgColor = "bg-primary";
 
  if(divisibiliPer3){
    bgColor = "bg-success"
    textContent = "fizz" + i;
  } 

  const divisibiliper5 = i % 5 === 0;
  if(divisibiliper5){
    bgColor = "bg-warning"
  }

  if(divisibiliPer3 && divisibiliper5){
    bgColor = "bg-danger"
  }

 
  rowCols.innerHTML += `<div class="col g-4">
                          <div class="ratio ratio-1x1 border ${bgColor}">
                           <div></div>
                          </div>
                      </div>`;

}