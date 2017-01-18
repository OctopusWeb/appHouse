mui.init();
window.onload = function(){
	$CesiumContorller.init();
	mui(".call")[0].addEventListener("tap",function(){
		plus.device.dial("114");
	})
}
$CesiumContorller={};
$CesiumContorller.Zoom=true;
$CesiumContorller.markers=[];
$CesiumContorller.init = function(){
    $CesiumContorller.map = new AMap.Map('container',{
            resizeEnable: true,
            zoom: 12,
            center: [116.480983, 39.989628]
    });
    for (var i=0;i<10;i++) {
    	i%2 == 0?type = true:type=false;
    	var center = [116.480983+i*0.01, 39.989628+i*0.01];
    	initIcon(center,type,"a"+i)
    }
    addCluster();

    // 添加点聚合
    function addCluster(tag) {
        $CesiumContorller.map.plugin(["AMap.MarkerClusterer"], function() {
            cluster = new AMap.MarkerClusterer($CesiumContorller.map, $CesiumContorller.markers);
        });
    }
    
    function initIcon(center,type,id){
    	var clickDom = $CesiumContorller.addIcon(center,type,id);
	    clickDom.on("click",function(){
	   		mui(".contentBox")[0].style.display="block";
	   		mui(".info")[0].innerHTML=this.G.name;
//	   		var bol = this.G.name.substr(0,this.G.name.indexOf("-"));
//	   		if(bol == "true"){
//	   			mui(".typeBtn")[0].style.display="block";
//	   			mui(".typeBtn")[1].style.display="none";
//	   		}else{
//	   			mui(".typeBtn")[0].style.display="none";
//	   			mui(".typeBtn")[1].style.display="block";
//	   		}
//	   		
	    })
    }
   
}
$CesiumContorller.addIcon=function(center,type,id){
	var color;
	var url;
	type ? url = "image/npt0.png" : url = "image/npt2.png"
	var marker = new AMap.Marker({
		name:type+"-"+id,
        position: center,
        icon: new AMap.Icon({            
            size: new AMap.Size(100, 100),  //图标大小
            image: url,
            imageOffset: new AMap.Pixel(0, 0)
        })  
    });
    type ? color ="#09f" : color = "#ff0000"
    marker.setMap($CesiumContorller.map);
    $CesiumContorller.markers.push(marker);
    return marker;
}
