const toggleButton = document.querySelector("#toggle-button");
const ball = document.querySelector("#ball");
const toggleCheck = document.querySelector("#toggle-check");
const pageviews = document.querySelector("#pageviews");
const count = document.querySelector("#count");
const sliderBar = document.querySelector("#sliderBar");
const monthYear = document.querySelector("#month-year");

/* Toggle-switch */
toggleButton.addEventListener("click", () => {
    toggleCheck.checked = !toggleCheck.checked;
    if(toggleCheck.checked){toggleButton.style.justifyContent = "right";}
    else{toggleButton.style.justifyContent = "left";}    
})

/* Slider */

sliderBar.addEventListener("input", () => {
    switch (sliderBar.value) {

      case "0":
        if(!toggleCheck.checked){count.innerHTML = `$8`; monthYear.innerHTML = "/ month"}
        if(toggleCheck.checked){count.innerHTML = `$${8*0.75}` ; monthYear.innerHTML = "/ year"}
        pageviews.innerHTML = "10k pageviews";
        break;

      case "25":
        if (!toggleCheck.checked){count.innerHTML = `$12`; monthYear.innerHTML = "/ month";}
        if (toggleCheck.checked) {count.innerHTML = `$${12 * 0.75}`; monthYear.innerHTML = "/ year";}
        pageviews.innerHTML = "50k pageviews";
        break;

      case "50":
        if (!toggleCheck.checked){count.innerHTML = `$16`; monthYear.innerHTML = "/ month";}
        if (toggleCheck.checked) {count.innerHTML = `$${16 * 0.75}`; monthYear.innerHTML = "/ year";}
        pageviews.innerHTML = "100k pageviews";
        break;

      case "75":
        if (!toggleCheck.checked) {count.innerHTML = `$24`;monthYear.innerHTML = "/ month";}
        if (toggleCheck.checked) {count.innerHTML = `$${24 * 0.75}`;monthYear.innerHTML = "/ year";}
        pageviews.innerHTML = "500k pageviews";
        break;

      case "100":
        if (!toggleCheck.checked) {count.innerHTML = `$36`;monthYear.innerHTML = "/ month";}
        if (toggleCheck.checked) {count.innerHTML = `$${36 * 0.75}`;monthYear.innerHTML = "/ year";}
          pageviews.innerHTML = "1M pageviews";
        break;
        default: console.log("Error");
    }
})

/* 
sliderBar.addEventListener("input", () => {
    if(!toggleCheck.checked){

        switch (sliderBar.value) {
                 case "0":
                    count.innerHTML = `$8`;
                    monthYear.innerHTML = "/ month";
                    pageviews.innerHTML = "10k pageviews";
                    break;
                
                case "25" :
                    count.innerHTML = `$12`;
                    monthYear.innerHTML = "/ month";
                    pageviews.innerHTML = "50k pageviews";
                    break;
                    
                case "50" :
                    count.innerHTML = `$16`;
                    monthYear.innerHTML = "/ month";
                    pageviews.innerHTML = "100k pageviews";
                    break;
                        
                case "75" :
                    count.innerHTML = `$24`;
                    monthYear.innerHTML = "/ month";
                    pageviews.innerHTML = "500k pageviews";
                    break;
                            
                case "100" :
                    count.innerHTML = `$36`;
                    monthYear.innerHTML = "/ month";
                    pageviews.innerHTML = "1M pageviews";
                    break;
                default: console.log("Error");
                            
            }
        }
  if(toggleCheck.checked){
      count.innerHTML = `$${parseInt(count.innerHTML.replace("$", ""))*0.75}`
      monthYear.innerHTML = "/ year";
    };
}); */
    
    
    
    
    
    