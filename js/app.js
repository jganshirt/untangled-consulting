// JAVASCRIPT


// COUNT UP TIMER

var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);

const timer = document.querySelector('#timer');
const timerTop = nav.offsetTop;
    

// STICKY TIMER - FIGURE THIS OUT!!!!


    function stickyTimer() {
      console.log('timerTop = ' + navTop);
      console.log('scrollY = ' + window.scrollY);
    
      if (window.scrollY >= timerTop) {
        // nav offsetHeight = height of nav
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-timer');
      } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-timer');
      }
    }
    
    window.addEventListener('scroll', stickyTimer);