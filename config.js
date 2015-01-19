var path = require('path');

module.exports = {
    /* 上传图片配置项 */
    upload: {
	    path: path.join(__dirname, 'public/upload/'), /*--- 图片保存位置 ---*/
	    url: '/upload/', /*---- 图片链接基地址，相对于public目录 -----*/
	    imageAllowFiles: ".png, .jpg, .jpeg, .gif, .bmp"  /*--- 图片扩展名限制 ---*/
    }
};