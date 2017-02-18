/**
 * [引入所有组件]
 * @param  {[type]} str          [源组件的内容]
 * @param  {[type]} replacement) {	var        html;	html [经过修改后的组件内容]
 * @return {[type]}              [返回字符串形式的html内容]
 */
var inserCmp = require("./tool.js").inserCmp

inserCmp("./components/text.html", document.getElementsByTagName("text"), function(str, replacement) {
	var html;
	html = str.replace(/title/, replacement.title)
	html = html.replace(/replace/, replacement.replace)
	return html
})

inserCmp("./components/fixBack.html", document.getElementsByTagName("fix"), function(str, replacement) {
	console.log("fixed")
	var html;
	html = str.replace(/outerClassname/, replacement.outerclassname)
	html = html.replace(/innerClassname/, replacement.innerclassname)
	html = html.replace(/content/, replacement.content)
	return html
})

inserCmp("./components/scrollBack.html", document.getElementsByTagName("scroll"), function(str, replacement) {
	console.log("scroll")
	var html;
	html = str.replace(/outerClassname/, replacement.outerclassname)
	html = html.replace(/innerClassname/, replacement.innerclassname)
	html = html.replace(/content/, replacement.content)
	return html
})

inserCmp("./components/join.html", document.getElementsByTagName("join"), function(str, replacement) {
	var html;
	html = str.replace(/outerClassname/, replacement.outerclassname)
	html = html.replace(/innerClassname/, replacement.innerclassname)
	html = html.replace(/thisId/, replacement.thisid)
	return html
}, function() {
	document.getElementById("btn").onclick = function() {
		// 防止滚动现象
		scroll(0, 0)
		document.getElementsByTagName("main")[0].style.transform = "scale(0)"
		document.getElementById("cd-form").style.display = "inline-block"
	}
})