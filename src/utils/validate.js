// 检测用户名
export function isvalidUsername (str) {
  const valid_map = ['admin', 'test'];
  return valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母*/
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
// 校验手机号
export function validatePhone (str) {
  const reg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
  return reg.test(str);
}
// 手机号充值拦截号段
export function isInterceptPhone (str) {
  const reg = /^1(70|71|62|72|98|67)\d{8}$/;
  return reg.test(str);
}

// 校验身份证后六位或六位随机验证码
export function validateIdcard (str) {
  const reg = /^[0-9A-Za-z]{6,}$/;
  return reg.test(str);
}
// 校验四位验证码
export function validateCode (str) {
  const reg = /^[0-9]{4,}$/;
  return reg.test(str);
}
// 校验4-10位的qq号等
export const isQlcu = (cardNo) => {
  if (/^[1-9][0-9]{4,10}$/.test(cardNo)) {
    return true;
  } else {
    return false;
  }
};

// 判断身份证后6位
export function validateTailnumber (str) {
  const reg = /(^\d{6}$)|(^\d{5}(X|x)$)/;
  return reg.test(str);
}

// 校验名字
export function userNameCheck (writer) {
  writer = writer.replace(/\s/g, '');
  if (/^[\u4E00-\u9FA5]/.test(writer)) {
    return true;
  } else {
    return false;
  }
}
// 校验加油卡
export const oilCard = (cardNo) => {
  if (/^1000\d{15}$/.test(cardNo)) {
    return true;
  } else {
    return false;
  }
};

// 判断字符是否为空的方法
export function isEmpty (str) {
  if (typeof str == 'undefined' || str == null || str == '') {
    return true;
  } else {
    return false;
  }
}
// 获取url参数值
export function getQueryString (name) {
  let query = window.localStorage.getItem('query');
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  if (query == null) return null;
  var r = query.match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
// 把json格式数据转化为url地址携带的参数数据
export function jsonSort (jsonObj) {
  let arr = [];
  for (var key in jsonObj) {
    arr.push(key);
  }
  arr.sort();
  let str = '';
  for (var i in arr) {
    str += arr[i] + '=' + jsonObj[arr[i]] + '&';
  }
  return str.substr(0, str.length - 1);
}

// 数组对象排序
export function sortByKey (str) {
  // console.log(str)
  return str.sort(function (a, b) {
    // console.log(a,b)
    var x = a.sort;
    var y = b.sort;
    // console.log(x, y)
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
