/* 
    Name: Ambar Cerino
    File: a4p2.js
    Date: 02 April, 2026
    Description: assignment 4 part 2 javascript 
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


// Create a data object - array of objects called images
let images = [
    { filename: "pic1.jpg", alt: "Closeup of a human eye" },
    { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
    { filename: "pic3.jpg", alt: "Purple and white pansies" },
    { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// Add the images to the thumbnail bar
const baseURL = "./img";
for (const image of images) {
    const newImg = document.createElement("img");
    newImg.src = baseURL +images;
    newImg.alt = image.alt;
    newImg.tabIndex = "0";
    thumbBar.appendChild(newImg)
    newImg.addEventListener("click", updateDisplayedImage);
    newImg.addEventListener("keydown", (upDisplayedImg) => {
        if (upDisplayedImg.code === "Enter") {
            updateDisplayedImage(upDisplayedImg);
        }
    });
};
