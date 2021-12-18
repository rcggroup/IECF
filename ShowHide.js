// Show hide Function 

function hideShow() {
    // Show - hide function:    
    'use strict';
    
    var elem = document.getElementById('Grid');
        // elemBtn = document.getElementById('btn0');
                                            
    // alert("Welcome to {Show-Hide} Function... ");
                
    elem.classList.toggle("hidden");

    // if (elem.classList.contains('hidden')) {
    //     elemBtn.textContent = 'Show Paragraph';        
    // } else {        
    //     elemBtn.textContent = 'Hide Paragraph';
    // }                                                                                        
}
// ====================================================================================

function hideShowForm1() {
    // Show - hide function:    
    'use strict';
    
    // var elem = document.getElementById('orientationDatalist'),
    //     optValue = document.getElementById('orientationDatalist').attr('data-value');
       
    // if (optValue == '1') {
    //     var elem = document.getElementById('formStudyingLocally');
    //     elem.classList.toggle("hidden");

    // }


    var form = document.getElementById('form1'),
        // list = document.getElementById('mainList')[0].value;
        list = document.querySelector('[list="orientationList"]')[0].nodeValue;
        
    alert(list);

}                        


function getInputValue() {

    var form1 = document.getElementById('form1'),        
        form2 = document.getElementById('form2'),        
        form3 = document.getElementById('form3'),        
        form4 = document.getElementById('form4'),        
        form5 = document.getElementById('form5'),        
        form6 = document.getElementById('form6'),        
        form7 = document.getElementById('form7'),        
        form8 = document.getElementById('form8'),        
        form9 = document.getElementById('form9'),        
        list = document.querySelector('#mainList').value,
        datalist = document.querySelector('#orientationList');
        // label = document.querySelector('#orientationTopic');
        

    // alert(list.nodeValue);
    // alert(label.text);
    // alert(list);

    if (list == '') {
        form1.classList.replace('php-email-form', "hidden");                
        form2.classList.replace('php-email-form', "hidden");                
        form3.classList.replace('php-email-form', "hidden");                
        form4.classList.replace('php-email-form', "hidden");                
        form5.classList.replace('php-email-form', "hidden");                
        form6.classList.replace('php-email-form', "hidden");                
        form7.classList.replace('php-email-form', "hidden");                
        form8.classList.replace('php-email-form', "hidden");                
        form9.classList.replace('php-email-form', "hidden");                

    } else {

        if (list == datalist.children[0].value ) {
                        
                form1.classList.replace("hidden",'php-email-form');                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                

        } else if (list == datalist.children[1].value) {                
                        
                form2.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                

        
        } else if (list == datalist.children[2].value) {                
                        
                form3.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                
        
        
        } else if (list == datalist.children[3].value) {                
                        
                form4.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                
            
        
        } else if (list == datalist.children[4].value) {                
                        
                form5.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                
        
        
        } else if (list == datalist.children[5].value) {                
                        
                form6.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                
                        
        } else if (list == datalist.children[6].value) {                
                        
                form7.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                            
    

        } else if (list == datalist.children[7].value) {                                      
            
                form8.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form9.classList.replace('php-email-form', "hidden");                
                        
            
        } else if (list == datalist.children[8].value) {                
                                   
                form9.classList.replace("hidden",'php-email-form');                
                form1.classList.replace('php-email-form', "hidden");                
                form2.classList.replace('php-email-form', "hidden");                
                form3.classList.replace('php-email-form', "hidden");                
                form4.classList.replace('php-email-form', "hidden");                
                form5.classList.replace('php-email-form', "hidden");                
                form6.classList.replace('php-email-form', "hidden");                
                form7.classList.replace('php-email-form', "hidden");                
                form8.classList.replace('php-email-form', "hidden");                
                                                
        }
    
    }
    
}
            
// ====================================================
      
function getListValue() {             
    
    var listP = document.querySelector('#stateListId'),        
        listC = document.querySelector('#areaListId'),
        stateList = document.querySelector('#stateList'),
        stateListCount = document.querySelector('#stateList').options.length;

        
    
    if (listP.value == '') {
        
        listC.setAttribute('list', '');                    
        listC.value = '';                    
        
    } else {
        
        for (i=0; i<stateListCount; i++) {
            
            if (listP.value == stateList.children[i].value) {                
                
                listC.setAttribute('list', document.getElementById(stateList.children[i].value).id);                                                        
            }
        }
    }        
}
                
// =======================================================================================


function getListValueUni() {             
    
    var listP = document.querySelector('#UniMainSec'),        
        listC = document.querySelector('#UniInternalSec'),
        mainList = document.querySelector('#univList'),
        privateList = document.querySelector('#PrivateList');
        // stateListCount = document.querySelector('#stateList').options.length;
            
    if (listP.value == '') {
        
        listC.classList.replace('orientation', "hidden");                
        listC.setAttribute('list', '');                    
        listC.value = '';                    
    
    } else {
        
        if (listP.value == mainList.children[0].value) {                
            listC.classList.replace('hidden', "orientation");                
            listC.setAttribute('list', privateList.id);                                                        
        }
                            
    }        
}
// =-=-====================================================================================================

function getUniList(){
    var listP = document.querySelector('#UniMainSec'),        
        listC = document.querySelector('#UniInternalSec'),
        mainList = document.querySelector('#univList'),
        stateList = document.querySelector('#PrivateList');
    
    
    if (listP.value == '') {
        
        listC.classList.replace('orientation', "hidden");                
        listC.value = '';                    
        listC.setAttribute('list', '');         
        
        
    } else {
        
        if (listP.value == mainList.children[0].value) {                                                
            
            listC.classList.replace('hidden', "orientation");                
            listC.setAttribute('list', stateList.id);                                                                        
            
            // listC.setAttribute('list', 'PrivateList');                                                        
            // listC.setAttribute('list', document.getElementById(stateList.children[0].value).id);                                                        
        }                            
    }        
    
}

// =-=-====================================================================================================
  










    // alert(elem.tagName);

    // if (form.classList.contains('hidden')) {
    //     alert('Your list input is not Null!');
    //     form.classList.toggle("hidden");
    //     elem.classList.toggle("show");
    // }
    
    
    
    // elemBtn = document.getElementById('btn0');
    
    // alert("Welcome to {Show-Hide} Function... ");
    
    
    // if (elem.classList.contains('hidden')) {
        //     elemBtn.textContent = 'Show Paragraph';        
        // } else {        
            //     elemBtn.textContent = 'Hide Paragraph';
            // }                                                                                        
        
// ====================================================



// stateListCount = document.querySelector('#stateList').options.length;
    
    // for (i=0; i<stateListCount; i++) {
        // }
        // elem.classList.toggle("hidden");
        
        // alert(stateListCount);
        
        // listC = document.getElementById('areaListId'); 
        
        
    
    
    
    
    
    
    
    
    
    
    
    // alert(stateListCount);
    
    // listC = document.getElementById('areaListId'); 
    // var stateList = document.querySelector('#stateListId').getAttribute('list');
    // var stateList = document.querySelector('#stateListId');
    
    // alert(stateList.getAttribute('list').nodeValue);
    
    
    
    // var carioList = document.getElementById('carioList'),        
    //     form2 = document.getElementById('form2'),        
    //     form3 = document.getElementById('form3'),        
    //     form4 = document.getElementById('form4'),        
    //     form5 = document.getElementById('form5'),        
    //     form6 = document.getElementById('form6'),        
    //     form7 = document.getElementById('form7'),        
    //     list = document.querySelector('#stateListId').value,
    // label = document.querySelector('#orientationTopic');
    
    
    // alert(list.nodeValue);
    // alert(label.tex  t);
    // alert(list);
    
    // document.querySelector('#stateListId').getAttribute('list').att;
    // listC = document.querySelector('#areaListId').getAttribute('list');
    
    // document.getElementById('areaListId').setAttribute('list', document.getElementById('carioList').id);
    
    // ===============================================================================================
    
    //     // Alex:
    //     if (listP.value == stateList.children[0].value) {                
                    
    //         listC.setAttribute('list', document.getElementById('Alexandria').id);                                                        
        
    //     // Cairo:    
    //     } else if (listP.value == stateList.children[1].value ) {        
                         
    //         listC.setAttribute('list', document.getElementById('Cairo').id);                    
    //         // listC.setAttribute('list', document.getElementById('alexList').id);                                            
        
    //     // } else if (listP == listP.children[0].value) {                
        
    // //     // Giza
    // //     } else if (listP == listP.children[2].value) {                
        
    // //         listC.setAttribute('list', document.getElementById('gizaList').id);                                                                            
        
    // //     //  
    // //     } else if (list == datalist.children[3].value) {                
        
    // //         list.setAttribute('list', document.getElementById('assuitList').id);                                                                            
        
    // //     } else if (list == datalist.children[4].value) {                
      
                    
    //     }           
    // ==============================================================================================================
    
    
    // if (list == )){
        //     alert('input field has a valid value');
        // }
                
                


        // alert(list.tagName);
        // alert(list.nodeName);
        // alert(list.firstChild.value);
        
        // datalist = document.querySelector('#orientationList').find("option").length;
        // inputs = document.getElementsByTagName('input');
    
        // alert(datalist.textcontent);

    // alert(list.nodeValue);





    // alert(datalist.innerHTML);
    // alert(datalist.children[0].value);
    // alert(datalist.children.length);




    // for (i=0; i<datalist.children.length; i++) {


    //     console.log(datalist.children[i].value);
    //     console.log('='.repeat(20));
    // }



    // for (index = 0; index < list.length; ++index) {
        
    //     if (list[index].nodeValue == 'Studying Locally') {        
    //         alert(list[index].nodeValue);
    //         form.classList.toggle('hidden');
        
    //     } else {
    //         alert('Input list value is null!');
    //     }
        
    // }
    
    // deal with inputs[index] element.


