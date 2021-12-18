/**
  JS file of Murseries :
*/

function nursCheckInter() {
    
  let catList = document.getElementById('catList'),     
      Inter = document.getElementById('Inter');      
  
  Inter.classList.toggle('und');


  if (catList.hasChildNodes){


    for (i=0; i<catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
      criCheck1.type = 'checkbox';    
      criCheck1.value = 'Criteria1' ;    
      criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
      criLab1.className = 'Nund' ;    
      
      
      criCheck2.type = 'checkbox';
      criCheck2.value = 'Criteria2';
      criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
      criLab2.className = 'Nund' ;    
      
      
      criCheck3.type = 'checkbox';
      criCheck3.value = 'Criteria3';
      criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
      criLab3.className = 'Nund' ;    
      
      
      criCheck4.type = 'checkbox';
      criCheck4.value = 'Criteria4';      
      criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
      criLab4.className = 'Nund' ;    
      
      
      criCheck5.type = 'checkbox';
      criCheck5.value = 'Criteria5';
      criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
      criLab5.className = 'Nund' ;    
      

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
      criCheck1.type = 'checkbox';    
      criCheck1.value = 'Criteria1' ;    
      criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';
      criLab1.className = 'Nund' ;    
              
      criCheck2.type = 'checkbox';
      criCheck2.value = 'Criteria2';
      criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
      criLab2.className = 'Nund' ;    
          
      criCheck3.type = 'checkbox';
      criCheck3.value = 'Criteria3';
      criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
      criLab3.className = 'Nund' ;    
      
      criCheck4.type = 'checkbox';
      criCheck4.value = 'Criteria4';      
      criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
      criLab4.className = 'Nund' ;    
      
      criCheck5.type = 'checkbox';
      criCheck5.value = 'Criteria5';
      criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
      criLab5.className = 'Nund' ;    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
    
  }

}
// ================================================================================================

function nursCheckLang() {

  
  let catList = document.getElementById('catList'),     
      lang = document.getElementById('lang');      
      
      lang.classList.toggle('und');

  if (catList.hasChildNodes){

    for (i=0; i < catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);    
  }

}
// ================================================================================================

function nursCheckMont() {
      
  let catList = document.getElementById('catList'),     
      Mont = document.getElementById('Mont');      
  
  Mont.classList.toggle('und');

  
  if (catList.hasChildNodes){

    for (i=0; i<catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);    
  }

}
// ================================================================================================

function nursCheckspecNeds() {
        
  let catList = document.getElementById('catList'),     
      specNeds = document.getElementById('specNeds');      
  
  specNeds.classList.toggle('und');
  
  if (catList.hasChildNodes){

    for (i=0; i<catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);    
  }

}
// ================================================================================================

function nursCheckSte() {
      
  let catList = document.getElementById('catList'),
      Ste = document.getElementById('Ste');            
  
  Ste.classList.toggle('und');

  
  if (catList.hasChildNodes){

    for (i=0; i<catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
    
  }
}
// ================================================================================================

function nursCheckPlyG() {

  let catList = document.getElementById('catList'),
      PlyG = document.getElementById('PlyG');            
  
      PlyG.classList.toggle('und');

      
  if (catList.hasChildNodes){

    for (i=0; i<catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
    
  }
}
// ================================================================================================

function nursCheckChildM() {
      
  let catList = document.getElementById('catList'),
      ChildM = document.getElementById('ChildM');            
  
      ChildM.classList.toggle('und');
    
  if (catList.hasChildNodes){

    for (i=0; i<catList.childElementCount; i) {
      
      catList.removeChild(catList.children[i]);
      
    }

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
            
  } else {

    let criCheck1 = document.createElement('input'),
        criLab1 = document.createElement('label'),
        criCheck2 = document.createElement('input'),
        criLab2 = document.createElement('label'),
        criCheck3 = document.createElement('input'),
        criLab3 = document.createElement('label'),
        criCheck4 = document.createElement('input'),
        criLab4 = document.createElement('label'),
        criCheck5 = document.createElement('input'),
        criLab5 = document.createElement('label');
        
        
        criCheck1.type = 'checkbox';    
        criCheck1.value = 'Criteria1' ;    
        criLab1.innerHTML = '\u00A0 Criteria1' + '<br>';      
        criLab1.className = 'Nund' ;    
        
        
        criCheck2.type = 'checkbox';
        criCheck2.value = 'Criteria2';
        criLab2.innerHTML = '\u00A0 Criteria2' + '<br>';
        criLab2.className = 'Nund' ;    
        
        
        criCheck3.type = 'checkbox';
        criCheck3.value = 'Criteria3';
        criLab3.innerHTML = '\u00A0 Criteria3' + '<br>';
        criLab3.className = 'Nund' ;    
        
        
        criCheck4.type = 'checkbox';
        criCheck4.value = 'Criteria4';      
        criLab4.innerHTML = '\u00A0 Criteria4' + '<br>';
        criLab4.className = 'Nund' ;    
        
        
        criCheck5.type = 'checkbox';
        criCheck5.value = 'Criteria5';
        criLab5.innerHTML = '\u00A0 Criteria5' + '<br>';
        criLab5.className = 'Nund' ;    
    

      catList.appendChild(criCheck1);
      catList.appendChild(criLab1);      
      
      catList.appendChild(criCheck2);
      catList.appendChild(criLab2);    
      
      catList.appendChild(criCheck3);
      catList.appendChild(criLab3);  
      
      catList.appendChild(criCheck4);
      catList.appendChild(criLab4);
          
      catList.appendChild(criCheck5);
      catList.appendChild(criLab5);
    
  }
}
// ================================================================================================

// let catListM = document.getElementById('catListM');
//     catListMLi = catListM.childNodes('li');

// for (a in catListM.children) {

//   if (catListMLi.onclick() ) {
    
  
//   }

// }


