var small_m = document.querySelector('.togl')
    var me = document.querySelector('.menu')
    small_m.onclick = function(){
        small_m.classList.toggle('active');
        me.classList.toggle('responsive');
    }