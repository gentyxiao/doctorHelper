const timeSelects = [
  {
    id: 0,
    value: 60,
    desc: '1分钟'
  },
  {
    id: 1,
    value: 300,
    desc: '5分钟'
  },
  {
    id: 2,
    value: 600,
    desc: '10分钟'
  },
  {
    id: 3,
    value: 1800,
    desc: '30分钟'
  },
  {
    id: 4,
    value: 3600,
    desc: '1小时'
  },
  {
    id: 5,
    value: 3600,
    desc: '3小时'
  },
  {
    id: 6,
    value: 21600,
    desc: '6小时'
  },
  {
    id: 7,
    value: 43200,
    desc: '12小时'
  },
  {
    id: 8,
    value: 86400,
    desc: '1天'
  },
  {
    id: 9,
    value: 259200,
    desc: '3天'
  },
  {
    id: 10,
    value: 604800,
    desc: '7天'
  },
  {
    id: 11,
    value: 1296000,
    desc: '15天'
  },
  {
    id: 12,
    value: 2592000,
    desc: '1个月'
  },
  {
    id: 13,
    value: 7776000,
    desc: '3个月'
  },
  {
    id: 14,
    value: 15552000,
    desc: '6个月'
  },
  {
    id: 15,
    value: 31536000,
    desc: '1年'
  },
  {
    id: 16,
    value: 94608000,
    desc: '3年'
  },
  {
    id: 17,
    value: 315360000,
    desc: '10年'
  }
]

const getPlatIdsDesc = (ids) => {
  const platIds = ids.split(';')
  const tmpList = []
  for (let i = 0; i < platIds.length; i++) {
    if (platIds[i] === '0') {
      tmpList[i] = '[0]ios'
      continue
    }
    if (platIds[i] === '1') {
      tmpList[i] = '[1]android'
      continue
    }
    if (platIds[i] === '2') {
      tmpList[i] = '[2]保留'
      continue
    }
    if (platIds[i] === '3') {
      tmpList[i] = '[3]客户端'
      continue
    }
    if (platIds[i] === '4') {
      tmpList[i] = '[4]微端页面'
      continue
    }
    if (platIds[i] === '5') {
      tmpList[i] = '[5]微端客户端'
      continue
    }
    if (platIds[i] === '6') {
      tmpList[i] = '[6]switch'
      continue
    }
    if (platIds[i] === '7') {
      tmpList[i] = '[7]ps'
      continue
    }
    if (platIds[i] === '8') {
      tmpList[i] = '[8]xbox'
      continue
    }
    if (platIds[i] === '9') {
      tmpList[i] = '[9]未知'
      continue
    }
    if (platIds[i] === '10') {
      tmpList[i] = '[10]mac pc端'
      continue
    }
  }
  return tmpList
}

const getPlatIds = () => {
  const tmpList = []
  let platIdItem = {}
  platIdItem = {
    id: '0',
    desc: '[0]ios'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '1',
    desc: '[1]android'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '2',
    desc: '[2]保留'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '3',
    desc: '[3]客户端'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '4',
    desc: '[4]微端页面'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '5',
    desc: '[5]微端客户端'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '6',
    desc: '[6]switch'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '7',
    desc: '[7]ps'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '8',
    desc: '[8]xbox'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '9',
    desc: '[9]未知'
  }
  tmpList.push(platIdItem)

  platIdItem = {
    id: '10',
    desc: '[10]mac pc端'
  }
  tmpList.push(platIdItem)
  return tmpList
}

const getTimeSelects = () => {
  return timeSelects
}

// 获取cookie、
const getCookie = (name) => {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return arr[2]
  } else {
    return null
  }
}

// 设置cookie,增加到vue实例方便全局调用
const setCookie = (cName, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie =
    cName +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
}

// 删除cookie
const delCookie = (name) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

const calcCRC32 = (str, radix = 10) => {
  const Utf8Encode = function (string) {
    string = string.replace(/\r\n/g, '\n')
    let text = ''
    for (let n = 0; n < string.length; n++) {
      const c = string.charCodeAt(n)
      if (c < 128) {
        text += String.fromCharCode(c)
      } else if (c > 127 && c < 2048) {
        text += String.fromCharCode((c >> 6) | 192)
        text += String.fromCharCode((c & 63) | 128)
      } else {
        text += String.fromCharCode((c >> 12) | 224)
        text += String.fromCharCode(((c >> 6) & 63) | 128)
        text += String.fromCharCode((c & 63) | 128)
      }
    }
    return text
  }

  const makeCRCTable = function () {
    let c
    const crcTable = []
    for (let n = 0; n < 256; n++) {
      c = n
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      }
      crcTable[n] = c
    }
    return crcTable
  }

  const crcTable = makeCRCTable()
  const strUTF8 = Utf8Encode(str)
  let crc = 0 ^ -1
  for (let i = 0; i < strUTF8.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ strUTF8.charCodeAt(i)) & 0xff]
  }
  crc = (crc ^ -1) >>> 0
  return crc.toString(radix)
}

const comm = {
  getPlatIds,
  getPlatIdsDesc,
  getTimeSelects,
  getCookie,
  setCookie,
  delCookie,
  calcCRC32
}
export default comm
