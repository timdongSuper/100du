window.onload = function() {

    var pic1 = document.getElementById('pic1');
    var pic2 = document.getElementById('pic2');
    var pic3 = document.getElementById('pic3');
    var bg = document.getElementById('bg');
    var prag = document.getElementById('prag');

    pic1.onmouseover=function() {
    	bg.setAttribute('src','pic/whereD.png');
    	// prag.innerHTML='爸爸去哪儿...';
    	prag.innerText='爸爸去哪儿...1';
    }
    pic2.onmouseover=function() {
    	bg.setAttribute('src','pic/beauty.png');
    	// prag.innerHTML='清新女神驾到';
    	prag.innerText='清新女神驾到2';
    }
    pic3.onmouseover=function() {
    	bg.setAttribute('src','pic/hotgirl.png');
    	// prag.innerHTML='火热明星';
    	prag.innerText='火热明星3';
    }
}
