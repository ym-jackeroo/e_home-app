function base64(e) {
    // 利用fileReader对象获取file
    var file = e.target.files[0];
    var filesize = file.size;
    var filename = file.name;
    // 2,621,440   2M
    if (filesize > 2101440) {
        // 图片大于2MB
 
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
 
        // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
        var imgcode = e.target.result;
        console.log(imgcode);
    }
}

module.exports = base64
