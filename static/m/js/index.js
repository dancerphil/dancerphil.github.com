const data = [["red50","#FFEBEE"],["red100","#FFCDD2"],["red200","#EF9A9A"],["red300","#E57373"],["red400","#EF5350"],["red500","#F44336"],["red600","#E53935"],["red700","#D32F2F"],["red800","#C62828"],["red900","#B71C1C"],["redA100","#FF8A80"],["redA200","#FF5252"],["redA400","#FF1744"],["redA700","#D50000"],["pink50","#FCE4EC"],["pink100","#F8BBD0"],["pink200","#F48FB1"],["pink300","#F06292"],["pink400","#EC407A"],["pink500","#E91E63"],["pink600","#D81B60"],["pink700","#C2185B"],["pink800","#AD1457"],["pink900","#880E4F"],["pinkA100","#FF80AB"],["pinkA200","#FF4081"],["pinkA400","#F50057"],["pinkA700","#C51162"],["purple50","#F3E5F5"],["purple100","#E1BEE7"],["purple200","#CE93D8"],["purple300","#BA68C8"],["purple400","#AB47BC"],["purple500","#9C27B0"],["purple600","#8E24AA"],["purple700","#7B1FA2"],["purple800","#6A1B9A"],["purple900","#4A148C"],["purpleA100","#EA80FC"],["purpleA200","#E040FB"],["purpleA400","#D500F9"],["purpleA700","#AA00FF"],["deepPurple50","#EDE7F6"],["deepPurple100","#D1C4E9"],["deepPurple200","#B39DDB"],["deepPurple300","#9575CD"],["deepPurple400","#7E57C2"],["deepPurple500","#673AB7"],["deepPurple600","#5E35B1"],["deepPurple700","#512DA8"],["deepPurple800","#4527A0"],["deepPurple900","#311B92"],["deepPurpleA100","#B388FF"],["deepPurpleA200","#7C4DFF"],["deepPurpleA400","#651FFF"],["deepPurpleA700","#6200EA"],["indigo50","#E8EAF6"],["indigo100","#C5CAE9"],["indigo200","#9FA8DA"],["indigo300","#7986CB"],["indigo400","#5C6BC0"],["indigo500","#3F51B5"],["indigo600","#3949AB"],["indigo700","#303F9F"],["indigo800","#283593"],["indigo900","#1A237E"],["indigoA100","#8C9EFF"],["indigoA200","#536DFE"],["indigoA400","#3D5AFE"],["indigoA700","#304FFE"],["blue50","#E3F2FD"],["blue100","#BBDEFB"],["blue200","#90CAF9"],["blue300","#64B5F6"],["blue400","#42A5F5"],["blue500","#2196F3"],["blue600","#1E88E5"],["blue700","#1976D2"],["blue800","#1565C0"],["blue900","#0D47A1"],["blueA100","#82B1FF"],["blueA200","#448AFF"],["blueA400","#2979FF"],["blueA700","#2962FF"],["lightBlue50","#E1F5FE"],["lightBlue100","#B3E5FC"],["lightBlue200","#81D4FA"],["lightBlue300","#4FC3F7"],["lightBlue400","#29B6F6"],["lightBlue500","#03A9F4"],["lightBlue600","#039BE5"],["lightBlue700","#0288D1"],["lightBlue800","#0277BD"],["lightBlue900","#01579B"],["lightBlueA100","#80D8FF"],["lightBlueA200","#40C4FF"],["lightBlueA400","#00B0FF"],["lightBlueA700","#0091EA"],["cyan50","#E0F7FA"],["cyan100","#B2EBF2"],["cyan200","#80DEEA"],["cyan300","#4DD0E1"],["cyan400","#26C6DA"],["cyan500","#00BCD4"],["cyan600","#00ACC1"],["cyan700","#0097A7"],["cyan800","#00838F"],["cyan900","#006064"],["cyanA100","#84FFFF"],["cyanA200","#18FFFF"],["cyanA400","#00E5FF"],["cyanA700","#00B8D4"],["teal50","#E0F2F1"],["teal100","#B2DFDB"],["teal200","#80CBC4"],["teal300","#4DB6AC"],["teal400","#26A69A"],["teal500","#009688"],["teal600","#00897B"],["teal700","#00796B"],["teal800","#00695C"],["teal900","#004D40"],["tealA100","#A7FFEB"],["tealA200","#64FFDA"],["tealA400","#1DE9B6"],["tealA700","#00BFA5"],["green50","#E8F5E9"],["green100","#C8E6C9"],["green200","#A5D6A7"],["green300","#81C784"],["green400","#66BB6A"],["green500","#4CAF50"],["green600","#43A047"],["green700","#388E3C"],["green800","#2E7D32"],["green900","#1B5E20"],["greenA100","#B9F6CA"],["greenA200","#69F0AE"],["greenA400","#00E676"],["greenA700","#00C853"],["lightGreen50","#F1F8E9"],["lightGreen100","#DCEDC8"],["lightGreen200","#C5E1A5"],["lightGreen300","#AED581"],["lightGreen400","#9CCC65"],["lightGreen500","#8BC34A"],["lightGreen600","#7CB342"],["lightGreen700","#689F38"],["lightGreen800","#558B2F"],["lightGreen900","#33691E"],["lightGreenA100","#CCFF90"],["lightGreenA200","#B2FF59"],["lightGreenA400","#76FF03"],["lightGreenA700","#64DD17"],["lime50","#F9FBE7"],["lime100","#F0F4C3"],["lime200","#E6EE9C"],["lime300","#DCE775"],["lime400","#D4E157"],["lime500","#CDDC39"],["lime600","#C0CA33"],["lime700","#AFB42B"],["lime800","#9E9D24"],["lime900","#827717"],["limeA100","#F4FF81"],["limeA200","#EEFF41"],["limeA400","#C6FF00"],["limeA700","#AEEA00"],["yellow50","#FFFDE7"],["yellow100","#FFF9C4"],["yellow200","#FFF59D"],["yellow300","#FFF176"],["yellow400","#FFEE58"],["yellow500","#FFEB3B"],["yellow600","#FDD835"],["yellow700","#FBC02D"],["yellow800","#F9A825"],["yellow900","#F57F17"],["yellowA100","#FFFF8D"],["yellowA200","#FFFF00"],["yellowA400","#FFEA00"],["yellowA700","#FFD600"],["amber50","#FFF8E1"],["amber100","#FFECB3"],["amber200","#FFE082"],["amber300","#FFD54F"],["amber400","#FFCA28"],["amber500","#FFC107"],["amber600","#FFB300"],["amber700","#FFA000"],["amber800","#FF8F00"],["amber900","#FF6F00"],["amberA100","#FFE57F"],["amberA200","#FFD740"],["amberA400","#FFC400"],["amberA700","#FFAB00"],["orange50","#FFF3E0"],["orange100","#FFE0B2"],["orange200","#FFCC80"],["orange300","#FFB74D"],["orange400","#FFA726"],["orange500","#FF9800"],["orange600","#FB8C00"],["orange700","#F57C00"],["orange800","#EF6C00"],["orange900","#E65100"],["orangeA100","#FFD180"],["orangeA200","#FFAB40"],["orangeA400","#FF9100"],["orangeA700","#FF6D00"],["deepOrange50","#FBE9E7"],["deepOrange100","#FFCCBC"],["deepOrange200","#FFAB91"],["deepOrange300","#FF8A65"],["deepOrange400","#FF7043"],["deepOrange500","#FF5722"],["deepOrange600","#F4511E"],["deepOrange700","#E64A19"],["deepOrange800","#D84315"],["deepOrange900","#BF360C"],["deepOrangeA100","#FF9E80"],["deepOrangeA200","#FF6E40"],["deepOrangeA400","#FF3D00"],["deepOrangeA700","#DD2C00"],["brown50","#EFEBE9"],["brown100","#D7CCC8"],["brown200","#BCAAA4"],["brown300","#A1887F"],["brown400","#8D6E63"],["brown500","#795548"],["brown600","#6D4C41"],["brown700","#5D4037"],["brown800","#4E342E"],["brown900","#3E2723"],["blueGrey50","#ECEFF1"],["blueGrey100","#CFD8DC"],["blueGrey200","#B0BEC5"],["blueGrey300","#90A4AE"],["blueGrey400","#78909C"],["blueGrey500","#607D8B"],["blueGrey600","#546E7A"],["blueGrey700","#455A64"],["blueGrey800","#37474F"],["blueGrey900","#263238"],["grey50","#FAFAFA"],["grey100","#F5F5F5"],["grey200","#EEEEEE"],["grey300","#E0E0E0"],["grey400","#BDBDBD"],["grey500","#9E9E9E"],["grey600","#757575"],["grey700","#616161"],["grey800","#424242"],["grey900","#212121"]];

function init() {
  return {
    category: [],
    bar: [],
    r: [],
    g: [],
    b: []
  }
}

const map = function (data) {
  const map = {};
  data.forEach(item => {
    const [color, value]= item;
    const {key, weight} = function (color) {
      const position = color.indexOf('0') - 1;
      return {
        key: color.slice(0, position),
        weight: color.slice(position)
      }
    }(color)
    if(!map[key]){
      map[key] = init();
    }
    map[key].category.push(weight);
    map[key].bar.push({value: 51, itemStyle: {normal: {color: value}}});
    map[key].r.push(parseInt(value.slice(1,3), 16));
    map[key].g.push(parseInt(value.slice(3,5), 16));
    map[key].b.push(parseInt(value.slice(5,7), 16));
  })
  return map;
}(data)

const playground = document.getElementById('playground');

Object.keys(map).forEach((key) => {
  const { category, bar, r, g, b } = map[key];
  const node = document.createElement('div');
  node.setAttribute('style', 'height: 500px; width: 1000px');
  console.log(node)
  playground.appendChild(node);
  const myBarChart = echarts.init(node);
  const barChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    title: {
      text: key
    },
    xAxis: [{
      type: 'category',
      data: category
    }],
    yAxis: [{
      type: 'value',
      show: false,
      min: 0,
      max: 255
    }],
    series: [{
      name: 'bar',
      type: 'bar',
      data: bar
    }, {
      name: 'r',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          color: '#F44336'
        }
      },
      data: r
    }, {
      name: 'g',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          color: '#4CAF50'
        }
      },
      data: g
    }, {
      name: 'b',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          color: '#2196F3'
        }
      },
      data: b
    }]
  };
  myBarChart.setOption(barChartOption);
})
