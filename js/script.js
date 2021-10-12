for (let i = 1; i <= 100; i++){
  const rowCols = document.querySelector(".row-cols-7")
  let text = i;

 
  const divisibiliPer3 = i % 3 === 0;
  let bgColor = "bg-primary";
 
 
  if(divisibiliPer3){
    bgColor = "bg-success";
    text = "fizz";
  } 

  const divisibiliper5 = i % 5 === 0;
    if(divisibiliper5){
    bgColor = "bg-warning";
    text = "buzz";
  }

  if(divisibiliPer3 && divisibiliper5){
    bgColor = "bg-danger";
    text = "fizzbuzz";
  }

 
  rowCols.innerHTML += `<div class="col g-4">
                          <div class="ratio ratio-1x1  ${bgColor}">
                           <div class="text-container">${text}</div>
                          </div>
                      </div>`;

}