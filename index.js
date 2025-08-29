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

    function setInnerText(value) {
        const availableCoinElement = document.getElementById("available-coin");
        availableCoinElement.innerText = value
    }

        // Call buttons and History work
   getElement("card-box").addEventListener("click", function (e) {
    const cardBtn = e.target.closest(".call-btn"); 
                                    
      if (!cardBtn){
          return; 
      } 
      
        
        const card =  cardBtn.closest(".card")

                  if (!card) {
                    return;
                  }

        const cardTitle = card.querySelector(".card-title").innerText
        const subTitle = card.querySelector(".sub-title").innerText
        const phoneNumber = parseInt(card.querySelector(".phone-number").innerText);
        
      
       
        const currentCoin = getInnerTextInId("available-coin")
         if(currentCoin<subtract){
          alert("❌ You don't have any coins, you need at least 20 coins to make a call")
          return;
        }

        const newCurrentCoin = Number(currentCoin) - Number(subtract)  
        setInnerText(newCurrentCoin)

              alert(`📞 Calling ${subTitle} ${phoneNumber}.....`)
              
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
              // Copy Button Work
getElement("card-box").addEventListener("click", async function (e) {
  const btn = e.target.closest(".copy-btn");

          if (!btn) {
            return;
          }


         const card = btn.closest(".card");

            if (!card) {
              return;
            }
  const phoneNumber = card.querySelector(".phone-number").innerText;
  
    await navigator.clipboard.writeText(phoneNumber);
    alert(`The number is copied ${phoneNumber}`);

    const copyCount = getElement("copy-count");
    const copyCountElement = copyCount.querySelector("span");
    const currentCount = parseInt(copyCountElement.innerText);
    copyCountElement.innerText = currentCount + 1;
    
  }) 

  

  
