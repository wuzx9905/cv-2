// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('skills'));
// 指定图表的配置项和数据
const option = {
    tooltip: {
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [
                    3,
                    5
                ]
            }
        },
        indicator: [
            {
                name: '静态页面',
                max: 100
            },
            {
                name: '编程基础',
                max: 100
            },
            {
                name: 'React',
                max: 100
            },
            {
                name: '项目开发',
                max: 100
            },
            {
                name: '团队沟通',
                max: 100
            }
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [
                        90,
                        75,
                        85,
                        75,
                        95
                    ],
                    name: '能力雷达'
                }, 
            ],
            lineStyle: {
                color: '#ff6600'
            },
            itemStyle: {
                color: '#ff6600'
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//# sourceMappingURL=index.65c7a1e5.js.map
