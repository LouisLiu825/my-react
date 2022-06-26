import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

function initData(node, xData, sData, title) {
  const myChart = echarts.init(node)
  myChart.setOption({
    itle: {
      text: title,
    },
    tooltip: {},
    xAxis: {
      data: xData,
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: sData,
      },
    ],
  })
}

function Bar({ style, xData, sData, title }) {
  const domRef = useRef(null)
  useEffect(() => {
    initData(domRef.current, xData, sData, title)
  }, [xData, sData])
  return <div ref={domRef} style={style}></div>
}

export default Bar
