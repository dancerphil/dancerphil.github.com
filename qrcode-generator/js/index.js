const DOMConfig = {
  spec: [{
    nodeType: 'label',
    text: '',
    attrs: {
      for: 'spec'
    },
    children: [{
      nodeType: 'span',
      text: '模具编号：'
    }, {
      nodeType: 'input',
      attrs: {
        id: 'spec',
        type: 'text'
      }
    }]
  }, {
    nodeType: 'label',
    text: '',
    attrs: {
      for: 'spec-num'
    },
    children: [{
      nodeType: 'span',
      text: '零件号：'
    }, {
      nodeType: 'input',
      attrs: {
        id: 'spec-num',
        type: 'text'
      }
    }]
  }, {
    nodeType: 'label',
    text: '',
    attrs: {
      for: 'spec-name'
    },
    children: [{
      nodeType: 'span',
      text: '零件名称：'
    }, {
      nodeType: 'input',
      attrs: {
        id: 'spec-name',
        type: 'text'
      }
    }]
  }],
  device: [{
    nodeType: 'label',
    text: '',
    attrs: {
      for: 'device'
    },
    children: [{
      nodeType: 'span',
      text: '设备编号：'
    }, {
      nodeType: 'input',
      attrs: {
        id: 'device',
        type: 'text'
      }
    }]
  }]
}
const canvasConfig = {
  _spec: [{
    text: '模具编号：',
    postion: {
      x: 80,
      y: 530
    }
  }, {
    text: '零件号：',
    postion: {
      x: 110,
      y: 580
    }
  }, {
    text: '零件名称：',
    postion: {
      x: 80,
      y: 630
    }
  }],
  _device: [{
    text: '设备编号：',
    postion: {
      x: 110,
      y: 580
    }
  }],
  spec: [{
    id: 'spec',
    postion: {
      x: 240,
      y: 530
    }
  }, {
    id: 'spec-num',
    postion: {
      x: 240,
      y: 580
    }
  }, {
    id: 'spec-name',
    postion: {
      x: 240,
      y: 630
    }
  }],
  device: [{
    id: 'device',
    postion: {
      x: 240,
      y: 580
    }
  }]
}

let canvas = document.querySelector('#ret')
let ctx = canvas.getContext('2d')

window.onload = function () {
  window.qrcode = new QRCode("qrcode", {
    text: '',
    width: 400,
    height: 400,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H
  });
  qrcode.makeCode('ruff')
  getQR()
  init()
  initHexEncode()
}

function initHexEncode() {
  String.prototype.hexEncode = function(){
    var hex, i;
    var result = "";
    for (i=0; i<this.length; i++) {
      hex = this.charCodeAt(i).toString(16);
      result += ("000"+hex).slice(-4);
    }
    return result
  }
  String.prototype.hexDecode = function(){
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
      back += String.fromCharCode(parseInt(hexes[j], 16));
    }
    return back;
  }
}

function crc(buf) {
  var TABLE = [0x00, 0x07, 0x0e, 0x09, 0x1c, 0x1b, 0x12, 0x15, 0x38, 0x3f, 0x36, 0x31, 0x24, 0x23, 0x2a, 0x2d, 0x70, 0x77, 0x7e, 0x79, 0x6c, 0x6b, 0x62, 0x65, 0x48, 0x4f, 0x46, 0x41, 0x54, 0x53, 0x5a, 0x5d, 0xe0, 0xe7, 0xee, 0xe9, 0xfc, 0xfb, 0xf2, 0xf5, 0xd8, 0xdf, 0xd6, 0xd1, 0xc4, 0xc3, 0xca, 0xcd, 0x90, 0x97, 0x9e, 0x99, 0x8c, 0x8b, 0x82, 0x85, 0xa8, 0xaf, 0xa6, 0xa1, 0xb4, 0xb3, 0xba, 0xbd, 0xc7, 0xc0, 0xc9, 0xce, 0xdb, 0xdc, 0xd5, 0xd2, 0xff, 0xf8, 0xf1, 0xf6, 0xe3, 0xe4, 0xed, 0xea, 0xb7, 0xb0, 0xb9, 0xbe, 0xab, 0xac, 0xa5, 0xa2, 0x8f, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9d, 0x9a, 0x27, 0x20, 0x29, 0x2e, 0x3b, 0x3c, 0x35, 0x32, 0x1f, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0d, 0x0a, 0x57, 0x50, 0x59, 0x5e, 0x4b, 0x4c, 0x45, 0x42, 0x6f, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7d, 0x7a, 0x89, 0x8e, 0x87, 0x80, 0x95, 0x92, 0x9b, 0x9c, 0xb1, 0xb6, 0xbf, 0xb8, 0xad, 0xaa, 0xa3, 0xa4, 0xf9, 0xfe, 0xf7, 0xf0, 0xe5, 0xe2, 0xeb, 0xec, 0xc1, 0xc6, 0xcf, 0xc8, 0xdd, 0xda, 0xd3, 0xd4, 0x69, 0x6e, 0x67, 0x60, 0x75, 0x72, 0x7b, 0x7c, 0x51, 0x56, 0x5f, 0x58, 0x4d, 0x4a, 0x43, 0x44, 0x19, 0x1e, 0x17, 0x10, 0x05, 0x02, 0x0b, 0x0c, 0x21, 0x26, 0x2f, 0x28, 0x3d, 0x3a, 0x33, 0x34, 0x4e, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5c, 0x5b, 0x76, 0x71, 0x78, 0x7f, 0x6a, 0x6d, 0x64, 0x63, 0x3e, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2c, 0x2b, 0x06, 0x01, 0x08, 0x0f, 0x1a, 0x1d, 0x14, 0x13, 0xae, 0xa9, 0xa0, 0xa7, 0xb2, 0xb5, 0xbc, 0xbb, 0x96, 0x91, 0x98, 0x9f, 0x8a, 0x8d, 0x84, 0x83, 0xde, 0xd9, 0xd0, 0xd7, 0xc2, 0xc5, 0xcc, 0xcb, 0xe6, 0xe1, 0xe8, 0xef, 0xfa, 0xfd, 0xf4, 0xf3];
  var crc = 0;
  for (var index = 0; index < buf.length; index++) {
    // should use https://github.com/inexorabletash/text-encoding
    var byte = buf.charCodeAt(index);
    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
  }
  return crc.toString(16);
}

function init() {
  const select = document.querySelector('#mode')
  const btn = document.querySelector('.gen')
  //表单存放处
  const pit = document.querySelector('.pit')
  window.mode = select[select.selectedIndex].value
  select.onchange = function (e) {
    window.mode = e.target.value
    pit.innerHTML = ''
    render(mode)
  }
  btn.onclick = function () {
    qrcode.clear();
    const modeStr = $('#mode').val().toUpperCase();
    const val = modeStr + '=' + $('input').val();
    let string = ''
    if($('#encode').val() === 'base64') {
      string = Base64.encode(val);
    } else {
      string = val.hexEncode();
    }
    if($('#crc').val() === 'able'){
      string += crc(string)
    }
    console.log('generating ("' + val + '") => (' + string + ')');
    qrcode.makeCode(string)
    getQR()
    renderInfo(mode)
  }
  render(mode)
}

function getQR() {
  ctx.clearRect(0, 0, 600, 650);
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, 600, 650);
  let img = document.querySelector('img');
  //QR img的生成是异步的
  setTimeout(() => {
    ctx.drawImage(img, 100, 80, 400, 400);
  }, 0);
}


function renderInfo(mode) {
  // 值
  const config = canvasConfig[mode]
  // 文字
  const _config = canvasConfig[`_${mode}`]
  ctx.fillStyle = "#000"
  ctx.font = "30px Arial";
  config.forEach((v, k) => {
    const val = document.querySelector(`#${v.id}`).value
    const info = _config[k]
    if (val) {
      ctx.fillText(info.text, info.postion.x, info.postion.y)
      ctx.fillText(val, v.postion.x, v.postion.y)
    }
  })
}

function render(mode) {
  const config = DOMConfig[mode]

  const createFrag = config => {
    let fragment = document.createDocumentFragment()
    config.forEach(v => {
      let element = document.createElement(v.nodeType)
      if (v.text) element.innerText = v.text
      for (const attr in v.attrs) {
        element.setAttribute(attr, v.attrs[attr])
      }
      // 递归处理子结点
      if (v.children) {
        element.appendChild(createFrag(v.children))
      }
      fragment.appendChild(element)
    })
    return fragment
  }
  document.querySelector('.pit').appendChild(createFrag(config))
}