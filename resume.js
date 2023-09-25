var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
//window.addEventListener('scroll', checkScroll);
var animationDone = false;


function initiliseBars(){
	for(let bar of progressBars){
		bar.style.width = 0 + '%';	
	}
}

initiliseBars();

function fillBars(){
    for(let bar of progressBars){
	// let targetWidth = bar.getAttribute(data-bar-width);
	    let currentWidth = 0; 
       // let interval = 
	    let interval = setInterval(function(){
            let targetWidth = bar.getAttribute('data-bar-width');
	        if(currentWidth >= targetWidth){
			   clearInterval(interval);
			   return;
		}
		currentWidth++;
		bar.style.width = currentWidth + '%';
    },3);
  }

}

function checkScroll(){


	var coordinates = skillsContainer.getBoundingClientRect();
	if(!animationDone && coordinates.top <= window.innerHeight){
		animationDone = true;
		console.log('Skills Section Visible');
		fillBars();
	}else if(coordinates.top>window.innerHeight){
		animationDone= false;
		initiliseBars();
	}
}

window.addEventListener('scroll', checkScroll);