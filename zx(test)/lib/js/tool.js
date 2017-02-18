function inserCmp(url, node, render, cb) {
  var that = this
  if(fetch) {
    fetch(url).then(function(res) {
      return res.text() // 把返回的数据转化为字符串数据
    }).then(function(data) {
      try {
        if(Object.prototype.toString.call(node) == "[object HTMLCollection]") {
          var len = node.length
          for(var i = 0; i < len; i++) {
            // 替换目标组件中的相应字符串
            var transHtml = render(data, mergeReplacement(node[0]))  // 修改数据
            node[0].outerHTML = transHtml
          }
        } else {
          node.outerHTML = data
          if(node.getElementsByTagName('script').length != 0) {
            that.explainScript(node) // 把组件中script标签的内容进行渲染解析，
          }
        }
        //that.componentIn()
        if(Object.prototype.toString.call(cb) == "[object Function]") {
          cb()
        }
      } catch(err) {
        throw new Error(err)
      }
    })
  } else {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onload = function(e) {
      node.innerHTML = this.responseText
    }
    xhr.send()
    if(Object.prototype.toString.call(cb) == "[object Function]") {
      cb()
    }
  }
}

function mergeReplacement(node) {
  var obj = {}
  var attr = node.attributes
  if(!attr.length) {
    return {
      text: '该节点没有属性'
    }
  }
  for(var i = 0; i < attr.length; i++) {
    var name = attr[i].name
    var val = attr[i].nodeValue
    Object.assign(obj, {
      [name]: val
    })
  }
  return obj
}

module.exports.inserCmp = inserCmp