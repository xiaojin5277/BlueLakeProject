// 中英文切换按钮方法
function translateLanguage() {
	// 判断中英文切换
	var type = $(".text_55").text(); //span标签取值；$(".text_6").html("ok")，span标签赋值
	var pattern = new RegExp("[\u4E00-\u9FA5]+"); //中文判断pattern
	if (pattern.test(type)) {
		$(".tranLang").css("width", "30vw");
		translate.changeLanguage("english"); //chinese_simplified-简体  english-英语
		alert("English");
	} else {
		translate.changeLanguage("chinese_simplified"); //chinese_simplified-简体  english-英语
		alert("Chinese");
		// window.location.href = "index.html"; //jQuery控制页面跳转
	}
	translate.setUseVersion2(); //设置使用v2.x 版本
	translate.listener.start(); //监控页面动态渲染的文本进行自动翻译
	translate.execute();
	translate.selectLanguageTag.show = false; //隐藏默认显示底部的select的选择语言
}