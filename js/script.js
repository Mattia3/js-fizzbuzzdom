console.log("Esercizio")

const containerScacchiera = document.getElementById("container-scacchiera");

for (let i = 1; i <= 7; i++ ){
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
  
}