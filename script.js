  let btn = document.querySelector("#gift")
  
  btn.addEventListener("click",function (){
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
    } 
    else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon!";
    }
    else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening!";
    } 
    else {
        greeting = "Good Night!";
    }
    alert(greeting);
  })