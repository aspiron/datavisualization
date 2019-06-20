const getById = idName => document.getElementById(idName);
const centeral = getById('centeral');

const leftTop   = getById('left-top'),
      centerTop = getById('center-top'),
      rightTop  = getById('right-top'),
      leftMid   = getById('left-middle'),
      rightMid  = getById('right-middle'),
      leftBot   = getById('left-bottom'),
      centerBot = getById('center-bottom'),
      rightBot  = getById('right-bottom');

centeral.addEventListener('input' , event =>{
  // console.log(event.target.innerText)
  let targetText = event.target.innerText
  if (event.target.id == 00) {
      if(targetText === ""){
        leftTop.style = "height: 167px; display:none;";  
        getById('ltc').innerText = '';
      }else{
        leftTop.style = "height: 167px;";
        getById('ltc').innerText = targetText;
      }
  }
  if (event.target.id == 01) {
    if(targetText === ""){
      centerTop.style = "height: 167px; display:none;";  
      getById('ctc').innerText = '';
    }else{
      centerTop.style = "height: 167px;";
      getById('ctc').innerText = targetText;
    }
  }
  if (event.target.id == 02) {
    if(targetText === ""){
      rightTop.style = "height: 167px; display:none;";  
      getById('rtc').innerText = '';
    }else{
      rightTop.style = "height: 167px;";
      getById('rtc').innerText = targetText;
    }
  }
  if (event.target.id == 10) {
    if(targetText === ""){
      leftMid.style = "height: 167px; display:none;";  
      getById('lmc').innerText = '';
    }else{
      leftMid.style = "height: 167px;";
      getById('lmc').innerText = targetText;
    }
  }
  if (event.target.id == 12) {
    if(targetText === ""){
      rightMid.style = "height: 167px; display:none;";  
      getById('rmc').innerText = '';
    }else{
      rightMid.style = "height: 167px;";
      getById('rmc').innerText = targetText;
    }
  }
  if (event.target.id == 20) {
    if(targetText === ""){
      leftBot.style = "height: 167px; display:none;";  
      getById('lbc').innerText = '';
    }else{
      leftBot.style = "height: 167px;";
      getById('lbc').innerText = targetText;
    }
  }
  if (event.target.id == 21) {
    if(targetText === ""){
      centerBot.style = "height: 167px; display:none;";  
      getById('cbc').innerText = '';
    }else{
      centerBot.style = "height: 167px;";
      getById('cbc').innerText = targetText;
    }
  }
  if (event.target.id == 22) {
    if(targetText === ""){
      rightBot.style = "height: 167px; display:none;";  
      getById('rbc').innerText = '';
    }else{
      rightBot.style = "height: 167px;";
      getById('rbc').innerText = targetText;
    }
  }
});