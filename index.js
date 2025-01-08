let idCard=document.createElement("div");
let image=document.createElement("img");
let heading=document.createElement("h4");
let idNumber=document.createElement("h5");
let blood=document.createElement("h5");
let Batch=document.createElement("h5");
let inst=document.createElement("h5");





function button(){
    // style the div and append it

    idCard.style.border="2px solid aqua 10px";
    idCard.style.height="500px";
    idCard.style.width="300px";
    idCard.style.backgroundImage="url(https://wallpaperaccess.com/full/9323584.jpg)"
    idCard.style.backgroundSize="cover";

    
    document.body.appendChild(idCard);
    // image

    image.setAttribute("src","./profile-pic.png");
    image.style.height="150px";
    image.style.marginLeft="70px"
    image.style.marginTop="20px"
    idCard.appendChild(image)
    // heading

    heading.textContent="Bala Venkat";
    heading.style.fontFamily="Georgia, 'Times New Roman', Times, serif"
    heading.style.fontSize="30px";
    heading.style.color="rgb(31, 87, 87)";
    heading.style.marginLeft="60px"
    idCard.appendChild(heading)

    // id number


    idNumber.textContent="ID Number:2211304A"
    idNumber.style.fontSize="17px";
    idNumber.style.marginLeft="55px"
    idCard.appendChild(idNumber);


    // blood

    blood.textContent="Blood Group :     A+"
    blood.style.fontSize="17px";
     blood.style.marginLeft="50px"
    idCard.appendChild(blood)

    // batch

    Batch.textContent="Batch:27R";
    Batch.style.fontSize="17px";
    Batch.style.marginLeft="50px"
    idCard.appendChild(Batch)

    // institute

    inst.textContent="Mobile Number:6281079811";
     inst.style.fontSize="17px";
    inst.style.marginLeft="50px"

    idCard.appendChild(inst)


}