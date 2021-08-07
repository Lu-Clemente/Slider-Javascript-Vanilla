// Conecting the images to the clickable dots
var latestIndex = 0; // This will be used to track the last index for the images
var myImages = document.querySelectorAll('.set_images img');

// Adding a 'click' event listener on the dots
myImages.forEach((item,index)=>{
    document.querySelectorAll('.home_dots')[index].addEventListener('click',()=>{
        let latestImage = document.querySelectorAll('.set_images img')[latestIndex];
        let updateImage = document.querySelectorAll('.set_images img')[index];

        // Changing the 'fade' for the dots, determinating whom will be active according to the latest index
        document.querySelectorAll('.home_dots')[latestIndex].classList.remove('active_dot');
        document.querySelectorAll('.home_dots')[index].classList.add('active_dot');

        // Changing opacity, so, for the next click the anterior image will be zered and the next will apper
        latestImage.style.opacity = 0;
        updateImage.style.opacity = 1;

        // Updating index
        latestIndex = index;
    })
})

// Conecting the hidden texts to the clickable dots
var latestIndex_2 = 0; //This will be used to track the last index for the texts
var myTexts = document.querySelectorAll('.home_hidden');

// Here, a very similar process will be happening to the text connected to the dots
myTexts.forEach((item,index)=>{
    document.querySelectorAll('.home_dots')[index].addEventListener('click',()=>{
        let latestText = document.querySelectorAll('.home_hidden')[latestIndex_2];
        let updateText = document.querySelectorAll('.home_hidden')[index];

        latestText.style.opacity = 0;
        updateText.style.opacity = 1;

        latestIndex_2 = index;
    })
})