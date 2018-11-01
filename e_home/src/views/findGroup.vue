<template>
 <div class="find-group-container">
     <Header></Header>
     <div id="container">

     </div>
 </div>
</template>

<script>
export default {
 data() {
 return {

 }
 },
 components: {

 },
 methods: {
    initMap() {
        const BMap = window.BMap
        const map = new BMap.Map("container");          // 创建地图实例  

        const Bpoint = new BMap.Point(116.404, 39.915);  
        const Zpoint = new BMap.Point(114.02, 32.98);  // 创建点坐标  
        var Bmarker = new BMap.Marker(Bpoint);        
        var Zmarker = new BMap.Marker(Zpoint);        // 创建标注    
        map.addOverlay(Bmarker);                     
        map.addOverlay(Zmarker);                     // 将标注添加到地图中 
        map.addControl(new BMap.ScaleControl({
            anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT
        }));     //添加控件
        map.addControl(new BMap.MapTypeControl());   
        map.addControl(new BMap.NavigationControl({
            anchor: window.BMAP_ANCHOR_TOP_LEFT
        }));    
        map.addControl(new BMap.GeolocationControl());   //添加控件
        
        const optsB = {
            position: Bpoint,
            offset: new BMap.Size(10, -30)
        }
        const BLabel = new BMap.Label("信息工程学院学生流动党支部 支部书记: 高洋 电话: 13526395586", optsB)
        BLabel.setStyle({
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
		 });
        map.addOverlay(BLabel);
         
        const optsZ = {
            position: Zpoint,
            offset: new BMap.Size(10, -60)
        }
        const ZLabel = new BMap.Label("信息工程学院学生党支部 支部书记: 杨鑫 电话: 0396-2853187", optsZ)
        ZLabel.setStyle({
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
		 });
	    map.addOverlay(ZLabel); 
        const optsZ2 = {
            position: Zpoint,
            offset: new BMap.Size(10, -35)
        }
        const ZLabel2 = new BMap.Label("信息工程学院党总支 总支书记: 柳晓阳 电话: 0396-285032", optsZ2)
        ZLabel2.setStyle({
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
		 });
	    map.addOverlay(ZLabel2); 

        map.centerAndZoom(Zpoint, 5);                 // 初始化地图，设置中心点坐标和地图级别
    }
 },
 mounted(){
     this.initMap()
 },
 created() {
 }
}
</script>

<style scoped lang="scss">
    #container{
        width: 7.5rem;
        height:12.46rem;
    }  
</style>
