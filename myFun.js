/**
*/
function NursCheck() {

  
  let NursCheck = document.getElementById('Nurs-check');
      CriMenu =  document.getElementById('Cri-Menu');
  
  if (NursCheck.checked == true) {
    
    if (NursCheck.onclick){
            
      let cri1 = document.createElement('a');         
      cri1.textContent = 'International';
      cri1.id = cri1;
      cri1.href = '#';
      
      let cri2 = document.createElement('a');         
      cri2.textContent = 'Languages';
      cri2.href = '#';
          
      let cri3 = document.createElement('a');         
      cri3.textContent = 'Montessori';
      cri3.href = '#';
      
      let cri4 = document.createElement('a');         
      cri4.textContent = 'Steiner';
      cri4.href = '#';
  
      let cri5 = document.createElement('a');         
      cri5.textContent = 'Special Needs';
      cri5.href = '#';
  
      let cri6 = document.createElement('a');         
      cri6.textContent = 'Play Grounds';
      cri6.href = '#';
  
  
      let cri7 = document.createElement('a');         
      cri7.textContent = 'Child Minder';
      cri7.href = '#';
  
  
  
      CriMenu.appendChild(cri1);
  
      CriMenu.appendChild(cri2);
  
      CriMenu.appendChild(cri3);
  
      CriMenu.appendChild(cri4);
  
      CriMenu.appendChild(cri5);
  
      CriMenu.appendChild(cri6);
  
      CriMenu.appendChild(cri7);
  
    }
  } else {
    alert('You Cant Check the Critreial twice !');

    let cri1 = document.getElementById('cri1');
    let CriMenu = document.getElementById('Cri-Menu');
    
    
    CriMenu.removeChild(CriMenu.cri1);
    // CriMenu.removeChild(CriMenu.cri2);
    // CriMenu.removeChild(CriMenu.cri3);
    // CriMenu.removeChild(CriMenu.cri4);
    // CriMenu.removeChild(CriMenu.cri5);
    // CriMenu.removeChild(CriMenu.cri6);
    // CriMenu.removeChild(CriMenu.cri7);

  }
  
}
// =======================================================================================

function addPhone1() {

  var parent = document.querySelector('#contactDiv1'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput1'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function addPhone2() {

  var parent = document.querySelector('#contactDiv2'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput2'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function addPhone3() {

  var parent = document.querySelector('#contactDiv3'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput3'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  


}
// -----------------------------------------------------------------------------------------------------

function addPhone4() {

  var parent = document.querySelector('#contactDiv4'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput4'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

  alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
      parent.appendChild(br);      
      parent.appendChild(phoneLabel.cloneNode(true));          
      parent.childNodes[18].textContent = 'new phone 3';        
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  

}
// -----------------------------------------------------------------------------------------------------

function addPhone5() {

  var parent = document.querySelector('#contactDiv5'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput5'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function addPhone6() {

  var parent = document.querySelector('#contactDiv6'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput6'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function addPhone7() {

  var parent = document.querySelector('#contactDiv7'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput7'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function addPhone8() {

  var parent = document.querySelector('#contactDiv8'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput8'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function addPhone9() {

  var parent = document.querySelector('#contactDiv9'),
      phoneLabel = document.querySelector('#addPhoneLabel'), 
      phoneInput = document.querySelector('#addPhoneInput9'),
      nInput = phoneInput.cloneNode(true),
      parentChildCount = parent.childElementCount,
      br = document.createElement('br');  

  if (parentChildCount == 13 || parentChildCount > 13 ) {

    alert('maximum number of Phone Contact has been Reached!');

  } else {  
    if (parentChildCount == 4 ) {

      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[12].textContent = 'new phone 1';                 
      
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  

    } else if (parentChildCount == 7) {
      
      parent.appendChild(br);          
      parent.appendChild(phoneLabel.cloneNode(true));                
      parent.childNodes[15].textContent = 'new phone 2';
                        
      nInput.value = '';    
      parent.appendChild(nInput.cloneNode(true));                  
      
    } else if (parentChildCount == 10) {
      
        parent.appendChild(br);      
        parent.appendChild(phoneLabel.cloneNode(true));          
        parent.childNodes[18].textContent = 'new phone 3';        
        
        nInput.value = '';    
        parent.appendChild(nInput.cloneNode(true));                                      
    }  
  }  
}
// -----------------------------------------------------------------------------------------------------

function clickHeart() {
  var heart = document.getElementById('heart');

  heart.style.background = 'white';
  // heart.setAttribute('style', '')
      
}
// -----------------------------------------------------------------------------------------------------

// function darkMode(){
//   var bod = document.getElementsByTagName('body');  

//   bod.setAttribute(style = 'background-color:gray');  
  
// }


// -----------------------------------------------------------------------------------------------------
// function addPhone() {
 
//   var btn1 = document.querySelector('#btn1'),      
//       btn2 = document.querySelector('#btn2'),
//       btn3 = document.querySelector('#btn3'),
//       btn4 = document.querySelector('#btn4'),
//       btn5 = document.querySelector('#btn5'),
//       btn6 = document.querySelector('#btn6'),
//       btn7 = document.querySelector('#btn7'),
//       btn8 = document.querySelector('#btn8'),
//       btn9 = document.querySelector('#btn9'),
//       parent1 = document.querySelector('#contactDiv1'),
//       parent2 = document.querySelector('#contactDiv2'),
//       parent3 = document.querySelector('#contactDiv3'),
//       parent4 = document.querySelector('#contactDiv4'),
//       parent5 = document.querySelector('#contactDiv5'),
//       parent6 = document.querySelector('#contactDiv6'),
//       parent7 = document.querySelector('#contactDiv7'),
//       parent8 = document.querySelector('#contactDiv8'),
//       parent9 = document.querySelector('#contactDiv9');

//   if (btn1.parentElement === parent1) {

//     // First create a DIV element.    
//     // var parent = document.querySelector('#contactDiv1'),
//     var phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput1'),
//         parentChildCount1 = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount1 == 13 || parentChildCount1 > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount1 == 4 ) {
  
//         parent1.appendChild(br);
              
//         parent1.appendChild(phoneLabel.cloneNode(true));          
        
//         parent1.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent1.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount1 == 7) {
        
//         parent1.appendChild(br);
            
//         parent1.appendChild(phoneLabel.cloneNode(true));          
        
//         parent1.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent1.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount1 == 10) {
        
//           parent1.appendChild(br);
        
//           parent1.appendChild(phoneLabel.cloneNode(true));          
        
//           parent1.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent1.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }


//   } else if (btn2.parentElement === parent2) {

//     // First create a DIV element.    
//     // var parent2 = document.querySelector('#contactDiv2'),
//     var phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput2 = document.querySelector('#addPhoneInput2'),
//         parentChildCount2 = parent2.childElementCount;
//         nInput = phoneInput2.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount2 == 13 || parentChildCount2 > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount2 == 4 ) {
  
//         parent2.appendChild(br);
              
//         parent2.appendChild(phoneLabel.cloneNode(true));          
        
//         parent2.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent2.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount2 == 7) {
        
//         parent2.appendChild(br);
            
//         parent2.appendChild(phoneLabel.cloneNode(true));          
        
//         parent2.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent2.appendChild(nInput);                
        
//       } else if (parentChildCount2 == 10) {
        
//           parent2.appendChild(br);        
//           parent2.appendChild(phoneLabel.cloneNode(true));                  
//           parent2.childNodes[18].textContent = 'new phone 3'  
//           nInput.value = '';  
//           parent2.appendChild(nInput);                                  
//       }  
//     }

//   } else if (btn3.parentElement === parent3) {

//     // First create a DIV element.
//     // var parent = document.querySelector('#contactDiv3'),
//     var phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput3'),
//         parentChildCount3 = parent3.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount3 == 13 || parentChildCount3 > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount3 == 4 ) {
  
//         parent3.appendChild(br);              
//         parent3.appendChild(phoneLabel.cloneNode(true));                  
//         parent3.childNodes[12].textContent = 'new phone 1'                
//         nInput.value = '';  
//         parent3.appendChild(nInput);
                
//       } else if (parentChildCount3 == 7) {
        
//         parent3.appendChild(br);
            
//         parent3.appendChild(phoneLabel.cloneNode(true));          
        
//         parent3.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent3.appendChild(nInput);
        
//       } else if (parentChildCount3 == 10) {
        
//           parent3.appendChild(br);        
//           parent3.appendChild(phoneLabel.cloneNode(true));                  
//           parent3.childNodes[18].textContent = 'new phone 3'  
//           nInput.value = '';  
//           parent3.appendChild(nInput);                                  
//       }  
//     }
  
//   } else if (btn4.parentElement === parent4) {

//     // First create a DIV element.
//     // var parent = document.querySelector('#contactDiv4'),
//     var phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput4'),
//         parentChildCount = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount == 13 || parentChildCount > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount == 4 ) {
  
//         parent.appendChild(br);
              
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount == 7) {
        
//         parent.appendChild(br);
            
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount == 10) {
        
//           parent.appendChild(br);
        
//           parent.appendChild(phoneLabel.cloneNode(true));          
        
//           parent.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }

//   } else if (btn5.parentElement === parent5) {

//     // First create a DIV element.
//     // var InputPhone = document.createElement('input'),
//     //     labelPhone = document.createElement('label'),
//     var parent = document.querySelector('#contactDiv5'),
//         phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput5'),
//         parentChildCount = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount == 13 || parentChildCount > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount == 4 ) {
  
//         parent.appendChild(br);
              
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount == 7) {
        
//         parent.appendChild(br);
            
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount == 10) {
        
//           parent.appendChild(br);
        
//           parent.appendChild(phoneLabel.cloneNode(true));          
        
//           parent.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }

//   } else if (btn6.parentElement === parent6) {

//     // First create a DIV element.
//     // var InputPhone = document.createElement('input'),
//     //     labelPhone = document.createElement('label'),
//     var parent = document.querySelector('#contactDiv6'),
//         phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput6'),
//         parentChildCount = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount == 13 || parentChildCount > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount == 4 ) {
  
//         parent.appendChild(br);
              
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount == 7) {
        
//         parent.appendChild(br);
            
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount == 10) {
        
//           parent.appendChild(br);
        
//           parent.appendChild(phoneLabel.cloneNode(true));          
        
//           parent.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }

//   } else if (btn7.parentElement === parent7) {

//     // First create a DIV element.
//     // var InputPhone = document.createElement('input'),
//     //     labelPhone = document.createElement('label'),
//     var parent = document.querySelector('#contactDiv7'),
//         phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput7'),
//         parentChildCount = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount == 13 || parentChildCount > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount == 4 ) {
  
//         parent.appendChild(br);
              
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount == 7) {
        
//         parent.appendChild(br);
            
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount == 10) {
        
//           parent.appendChild(br);
        
//           parent.appendChild(phoneLabel.cloneNode(true));          
        
//           parent.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }

//   } else if (btn8.parentElement === parent8) {

//     // First create a DIV element.
//     // var InputPhone = document.createElement('input'),
//     //     labelPhone = document.createElement('label'),
//     var parent = document.querySelector('#contactDiv8'),
//         phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput8'),
//         parentChildCount = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount == 13 || parentChildCount > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount == 4 ) {
  
//         parent.appendChild(br);
              
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount == 7) {
        
//         parent.appendChild(br);
            
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount == 10) {
        
//           parent.appendChild(br);
        
//           parent.appendChild(phoneLabel.cloneNode(true));          
        
//           parent.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }
  
//   } else if (btn9.parentElement === parent9) {

//     // First create a DIV element.
//     // var InputPhone = document.createElement('input'),
//     //     labelPhone = document.createElement('label'),
//     var parent = document.querySelector('#contactDiv9'),
//         phoneLabel = document.querySelector('#addPhoneLabel'), 
//         phoneInput = document.querySelector('#addPhoneInput9'),
//         parentChildCount = parent.childElementCount;
//         nInput = phoneInput.cloneNode(true),
//         br = document.createElement('br');
  
//     // alert(parentChildCount);
  
//     if (parentChildCount == 13 || parentChildCount > 13 ) {
  
//       alert('maximum number of Phone Contact has been Reached!');
  
//     } else {  
//       if (parentChildCount == 4 ) {
  
//         parent.appendChild(br);
              
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[12].textContent = 'new phone 1'
        
//         // nInput.textContent = '';
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // parent.lastElementChild.textContent = '';    
        
//         // alert(parent.childNodes[12].textContent);                
//         // alert(parent.lastElementChild.innerHTML);                  
//         // phoneInput.textContent = '';
//       } else if (parentChildCount == 7) {
        
//         parent.appendChild(br);
            
//         parent.appendChild(phoneLabel.cloneNode(true));          
        
//         parent.childNodes[15].textContent = 'new phone 2'
        
//         nInput.value = '';
  
//         parent.appendChild(nInput);
        
//         // alert(parent.childNodes[18].textContent);            
//         // alert(parent.childNodes[15].textContent);                
//         // parent.childNodes[11].nodeValue = 'phone 2';
//         // parent.childNodes[12].textContent = '';    
//         // phoneInput.textContent = '';
        
//       } else if (parentChildCount == 10) {
        
//           parent.appendChild(br);
        
//           parent.appendChild(phoneLabel.cloneNode(true));          
        
//           parent.childNodes[18].textContent = 'new phone 3'
  
//           nInput.value = '';
  
//           parent.appendChild(nInput);
          
//           // parent.appendChild(phoneInput.cloneNode(true));
//           // alert(parent.childNodes[21].textContent);            
//           // alert(parent.childNodes[18].textContent);                  
//           // parent.childNodes[15].textContent = '';      
//           // parent.childNodes[14].textContent = 'phone 3';
//           // phoneInput.textContent = '';
              
//       }  
//     }







//   }


// }
