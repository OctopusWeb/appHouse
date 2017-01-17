mui.init();
window.onload = function(){
	$CesiumContorller.init();
}
$CesiumContorller={};
$CesiumContorller.Zoom=true;
$CesiumContorller.init = function(){
    $CesiumContorller.map = new AMap.Map('container',{
            resizeEnable: true,
            zoom: 12,
            center: [116.480983, 39.989628]
    });
    AMap.event.addListener($CesiumContorller.map,'zoomend',function(){
    	console.log($CesiumContorller.map.getZoom())
    });
    for (var i=0;i<10;i++) {
    	i%2 == 0?type = true:type=false;
    	var center = [116.480983+i*0.01, 39.989628+i*0.01];
    	initIcon(center,type,"a"+i)
    }
    
    function initIcon(center,type,id){
    	var clickDom = $CesiumContorller.addIcon(center,type,id);
	    clickDom.on("click",function(){
	   		mui(".contentBox")[0].style.display="block";
	   		mui(".info")[0].innerHTML=this.G.name;
	    })
    }
   
}
$CesiumContorller.addIcon=function(center,type,id){
	var color;
	var marker = new AMap.Marker({
		name:type+"-"+id,
        position: center,
    });
    type ? color ="#09f" : color = "#ff0000"
    marker.setMap($CesiumContorller.map);
    var circle = new AMap.Circle({
            center: center,
            redius: 100,
            fillOpacity:0.1,
            fillColor:color,
            strokeColor:color,
            strokeWeight:1
    })
    circle.setMap($CesiumContorller.map);
    return marker;
}
