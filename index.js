 const subtract = 20;

  function getElement(id){
    const element = document.getElementById(id)
    return element;
  }
      function getInnerTextInId(id) {
          const elementId = document.getElementById(id)
          const elementIdValue = elementId.innerText
          const elementIdValueNum = parseInt(elementIdValue);
          return elementIdValueNum;
      }

    function getInnerText(name){
        const element = document.getElementsByClassName(name)[0];
        const elementValue = element.innerText;
        const elementValueNumber = parseInt(elementValue);
        return elementValueNumber;
    }

    function setInnerText(value) {
        const availableCoinElement = document.getElementById("available-coin");
        availableCoinElement.innerText = value
    }

        // Call buttons and History work
   getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
      
        const cardBtn = e.target
        const card =  cardBtn.parentElement.parentElement
        const cardTitle = card.querySelector(".card-title").innerText
        const subTitle = card.querySelector(".sub-title").innerText
        const phoneNumber = getInnerText("phone-number")
        
      
       
        const currentCoin = getInnerTextInId("available-coin")
         if(currentCoin<subtract){
          alert("You don't have any coins, you need at least 20 coins to make a call")
          return;
        }

        const newCurrentCoin = Number(currentCoin) - Number(subtract)  
        setInnerText(newCurrentCoin)

              alert(`Calling ${subTitle} ${phoneNumber}.....`)
              
               const now = new Date();
    const currentTime = now.toLocaleTimeString([], { 
        
    });
     const historyContainer =  getElement("history-container")
        const newHistory = document.createElement("div")
         newHistory.innerHTML = `
          <div id="" class="flex justify-between items-center history-elements  p-5 mt-3 bg-[#fafafa] rounded-lg">
          <div>
            <h1 class="font-bold">${cardTitle}</h1>
            <p class="text-bold text-gray-600">${phoneNumber}</p>
            </div>
           <p class="text-bold text-gray-500">${currentTime}</p>
                             
             </div>                 
        `;
        historyContainer.appendChild(newHistory)

  }
    });
          getElement("clear-btn").addEventListener("click",function () {
            const historyContainer = getElement("history-container");
            historyContainer.innerHTML = "";
          });

          // Heart Icon Work
  
   getElement("card-box").addEventListener("click", function (e) {
  if (e.target.classList.contains("heart-btn")) {
          
    const heartCountElement = getElement("heart-count") 
    let currentHeartCount = getInnerTextInId("heart-count")  

    heartCountElement.innerText = currentHeartCount +1;
       

  }

  })