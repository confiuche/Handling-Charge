/*function opt(){
    let gen = Document.getElementById("general").value;
    let dgr = Document.getElementById("dg").value;
    
    if(gen === gen){
        
    }else if(dgr === dgr){
        getBills();
    }
}*/

// document.getElementById("btnBill").addEventListener("click",bill)


// function general(){
//     function bill(){
//     let awbWt = document.getElementById("wt").value;

//     let amt = awbWt * 65.3;
//     //let dem = awbWt * 13 * days
//     // let demVat = dem * 0.075;
//     let vat = amt * 0.075;
//     let anlca = awbWt * 3;
//     let total = amt + vat + anlca;
    
//     // let height = document.getElementById("height").value;
//     // let area = (base * height)/2;
//    // console.log(area);

//    document.getElementById("amt").innerText = `Amount: ${amt}`;
//    document.getElementById("vat").innerText = `Vat7.5%: ${vat}`;
//    document.getElementById("anlca").innerText = `Anlca: ${anlca}`;
//    document.getElementById("bill").innerText = `Total Amount: ${total}`;
// }
// }

// // Dangerous Item
// function dangerous(){
//     let awbWt = document.getElementById("wt").value;

//     let amt = awbWt * 82;
//     let vat = amt * 0.075;
//     let anlca = awbWt * 3;
//     let total = amt + vat + anlca;
    
//     // let height = document.getElementById("height").value;
//     // let area = (base * height)/2;
//    // console.log(area);

//    document.getElementById("amt").innerText = `Amount: ${amt}`;
//    document.getElementById("vat").innerText = `Vat7.5%: ${vat}`;
//    document.getElementById("anlca").innerText = `Anlca: ${anlca}`;
//    document.getElementById("bill").innerText = `Total Amount: ${total}`;
// }


// let charges = " ";
// do{
//     let input = prompt("Select from menu:\n1: General Cargo \n2: Dangerous Goods \n Exit")
//     if(input === "1"){
//         general();
//     }else if(input === "2"){
//         dangerous()
//     }else{
//         alert("Good Bye");
//     }
//     charges = prompt("Do you want to perform another transaction? y/n");
// }while(charges !== "n");



function general(){
    weight = parseInt(prompt("Pls, Enter the weight of your shipment"));
    var amount = weight * 65.3;
    var vat7 = amount * 0.075;
    var anclaChg = weight * 3;
    total = amount + vat7 + anclaChg;
    alert("***** INVOICE CHARGE ***** \n" + "Handling Charge For "+ weight+"kg" + "\n Handling Charge: " 
    + amount  + "\n Vat7.5%: " + vat7  + "\n Ancla: " + anclaChg + "\n Total Amount: " + total);
}

function dangerous(){
    weight = parseInt(prompt("Pls, Enter the weight of your shipment"));
    var amount = weight * 82;
    var vat7 = amount * 0.075;
    var anclaChg = weight * 3;
    total = amount + vat7 + anclaChg;
    alert("***** INVOICE CHARGE ***** \n" + "Handling Charge For "+ weight+"kg" + "\n Handling Charge: " 
    + amount + "\n Vat7.5%: " + vat7 +"\n Ancla: " + anclaChg + "\n Total Amount: " + total);
}


let charges = " ";
do{
    let input = prompt("Select from menu:\n1: General Cargo \n2: Dangerous Goods \n Exit")
    if(input === "1"){
        general();
    }else if(input === "2"){
        dangerous()
    }else{
        alert("Good Bye");
    }
    charges = prompt("Do you want to perform another transaction? y/n");
}while(charges !== "n");