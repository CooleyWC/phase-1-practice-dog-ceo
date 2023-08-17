// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){

    let breedContain = document.querySelector("#dog-breeds");
    let liArray = [];
    let dropDn = document.querySelector('#breed-dropdown');
    let breedItems;
    Promise.all([
        fetch("https://dog.ceo/api/breeds/image/random/4"),
        fetch('https://dog.ceo/api/breeds/list/all')])
    .then(function([response1,response2]){
        return Promise.all([response1.json(), response2.json()])
    })
    .then(function([dogRandom, dogAll]){
        handleChallenge1(dogRandom);
        handleChallenge2(dogAll);
        handleChallenge3(dogAll);
        handleChallenge4(dogAll);
    });
    //Challenge1
    function handleChallenge1(dogRandom){
        let imageContain =document.querySelector("#dog-image-container");
        dogRandom.message.forEach(function(element){
            // console.log(element);
            let img=document.createElement('img');
            //below sets the src attribute to element
            //which is necesary b/c you cant directly append
            //from the data.message - it has to be a DOM node
            img.src=element;
            imageContain.appendChild(img);
    });
}
    //Challenge 2
    function handleChallenge2(dogAll){
        // console.log(dogAll);
        // let breedContain = document.querySelector("#dog-breeds");
        Object.keys(dogAll.message).forEach(function(dogBreed){
            console.log(dogBreed);
            let li = document.createElement('li');
            li.textContent = dogBreed;
            breedContain.appendChild(li);
            liArray.push(li);
        });
        breedItems = document.querySelectorAll('li');
    };
    //Challenge 3
        //grab all li's and loop with forEach
        //add EL targeting the lis
        //change the font color on click (style)
    function handleChallenge3(dogAll){
            const breedElements = document.querySelectorAll('li');
            breedElements.forEach(function(element){
                console.log(element);
                element.addEventListener('click', function(){
                    element.style.color = 'pink';
                });
    });
}
    // //Challenge4
    function handleChallenge4(dogAll){
        dropDn.addEventListener('change',function(){
            const selectedDogLetter = dropDn.value.toLowerCase();
            filterDogBreeds(selectedDogLetter);
        })
    }

    function filterDogBreeds(selectedDogLetter){
        console.log(breedItems);
        breedItems.forEach(function(element){
            const breedName = element.textContent;
            if(breedName.charAt(0).toLowerCase() === selectedDogLetter){
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        })
        
    
};
})