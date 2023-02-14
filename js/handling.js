/*function opt(){
    let gen = Document.getElementById("general").value;
    let dgr = Document.getElementById("dg").value;
    
    if(gen === gen){
        
    }else if(dgr === dgr){
        getBills();
    }
}*/

function getBill(){
    let awbWt = document.getElementById("wt").value;

    let amt = awbWt * 65.3;
    //let dem = awbWt * 13 * days
    // let demVat = dem * 0.075;
    let vat = amt * 0.075;
    let anlca = awbWt * 3;
    let total = amt + vat + anlca;
    
    // let height = document.getElementById("height").value;
    // let area = (base * height)/2;
   // console.log(area);

   document.getElementById("amt").innerText = `Amount: ${amt}`
   document.getElementById("vat").innerText = `Vat7.5%: ${vat}`
   document.getElementById("anlca").innerText = `Anlca: ${anlca}`
   document.getElementById("bill").innerText = `Total Amount: ${total}`
}

// Dabgerous Item
function getBill1(){
    let awbWt = document.getElementById("wt").value;

    let amt = awbWt * 82;
    let vat = amt * 0.075;
    let anlca = awbWt * 3;
    let total = amt + vat + anlca;
    
    // let height = document.getElementById("height").value;
    // let area = (base * height)/2;
   // console.log(area);

   document.getElementById("amt1").innerText = `Amount: ${amt}`
   document.getElementById("vat1").innerText = `Vat7.5%: ${vat}`
   document.getElementById("anlca1").innerText = `Anlca: ${anlca}`
   document.getElementById("bill1").innerText = `Total Amount: ${total}`
}