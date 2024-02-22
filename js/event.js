let selectedSeat = [];

function makeGreen(id){
    if(document.getElementById(id).disabled === false){
        document.getElementById(id).style.backgroundColor = 'green';
        document.getElementById(id).disabled = true;
        selectedSeat.push(id);
        // selectedSeat = [...selectedSeat, id]
        console.log(selectedSeat.length)
        let totalSelectedSeat = parseInt(selectedSeat.length)
        if(totalSelectedSeat.length > 4){
            
        document.getElementsByClassName('seat').disabled = true;
        }


      document.getElementById('next').disabled = false;
        // seat info handler//

        const li = document.createElement('li');
        document.getElementById('seat-info').appendChild(li);
        li.className = "seat-class"
        const btnValue = document.getElementById(id).innerText;
        li.innerHTML =`<p> ${btnValue}</p> <p class="econo">Economy </p> 550 `
        const  totalSeat = parseInt(document.getElementById('count-sit').innerText);
        const upDateSeat = totalSeat - 1;
        document.getElementById('count-sit').innerText = upDateSeat;

        let totalCost = parseInt(document.getElementById('total-price').innerText);
        totalCost = totalCost + 550;
        document.getElementById('total-price').innerText = totalCost;
        document.getElementById('noDis').innerText = totalCost;
        

        function totals(id){
            let increase = 0;
            for(const totals of total){
                increase = increase * 550;
                document.getElementById('grand-total').innerText = increase;
            }
        }


    }


    else if(document.getElementById(id).disabled === true){
        alert('boooked')
    }
}

const allBtn = document.getElementsByClassName('seat');
let count = 0;
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count + 1;
        setInnerText("showSeat", count);

    });
    function setInnerText(id, value){
        document.getElementById(id).innerText =value;
    }
}

function nextPage(){
    const homeSection = document.getElementById('booking');
    homeSection.classList.add('hidden');
    const confrmSection = document.getElementById('confirm-area');
    confrmSection.classList.remove('hidden')
}

  // discount/////////

function getCode() {
  let userInput = document.getElementById("copon").value;
  let grandTotal = 0;
  const netPrice = parseInt(document.getElementById('total-price').innerText);
  if(userInput === 'NEW15' ){
    grandTotal = netPrice - (netPrice * (10/100));
  }

  else if(userInput === 'Couple 20' ){
    grandTotal = netPrice - (netPrice * (20/100));
  }
 
  document.getElementById('grandTotal').innerText = grandTotal; 
}


