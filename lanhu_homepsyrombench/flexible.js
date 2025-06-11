(function flexible(window, document) {
  function resetFontSize() {
    const size = (document.documentElement.clientWidth / 1920) * 37.5;
    document.documentElement.style.fontSize = size + 'px';
  }

  // reset root font size on page show or resize
  window.addEventListener('pageshow', resetFontSize);
  window.addEventListener('resize', resetFontSize);
})(window, document);

const ctx = document.getElementById('myChart');
const labels = ['专业级人类', '精英级人类', '普通级人类', 'DeepSeek R1', 'Qwen3', 'DeepSeek V3'];  // 设置 X 轴上对应的标签
const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: [85.7, 85.5, 77.9, 49.1, 47.9, 45.9],
    fill: false,
    borderColor: 'rgba(59, 130, 246, 0.5)', // 设置线的颜色
    backgroundColor: ['rgba(30, 64, 175, 1)'],// 设置点的填充色
    pointStyle: 'circle',     //设置点类型为圆点
    pointRadius: 6,    //设置圆点半径
    pointHoverRadius: 10, //设置鼠标移动上去后圆点半径
    tension: 0.1
  }]
};
const config = {
  type: 'line', // 设置图表类型
  data: data,
  options: {
    plugins: {
      legend: {
        display: false // 隐藏图例（label: '我的第一个折线图'）
      }
    },
    responsive: true,  // 设置图表为响应式

    interaction: {  // 设置每个点的交互
      intersect: false,
    },
    scales: {  // 设置 X 轴与 Y 轴
      x: {
        display: true,
        title: {
          display: false,
          text: '人机综合表现对比分析',
          font: {
            size: 20, // 增大横轴标题字号
            weight: 'bold' // 加粗
          }
        },
        offset: true,
        grid: {
          display: false // 隐藏纵向网格线
        },
        ticks: {
          font: {
            size: 16, // 增大横轴刻度字号
            weight: 'bold'
          }
        }
      },
      y: {
        display: true,
        min: 0, // y轴从0开始
        max: 100, // y轴最大100
        ticks: {
          stepSize: 20, // 步长为20
          font: {
            size: 16, // 增大纵轴刻度字号
            weight: 'bold'
          }
        },
        title: {
          display: true,
          text: 'AVERAGE(%)',
          font: {
            size: 20, // 增大纵轴标题字号
            weight: 'bold'
          }
        },
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  }
};
const myChart = new Chart(ctx, config);

// 颜色方案
const colors = {
  '精英级人类': 'rgba(30, 64, 175, 0.8)',      // 深蓝
  '普通级人类': 'rgba(59, 130, 246, 0.5)',    // 浅蓝
  '专业级人类': 'rgba(153, 27, 27, 0.7)',      // 红色
  'DeepSeek R1': 'rgba(153, 27, 27, 0.7)',   // 红
  'DeepSeek V3': 'rgba(16, 185, 129, 0.7)',   // 绿
  'Qwen3': 'rgba(156, 163, 175, 0.7)'          // 灰
};

const borderColors = {
  '精英级人类': 'rgba(30, 64, 175, 1)',         // 深蓝
  '普通级人类': 'rgba(59, 130, 246, 0.5)',    // 浅蓝
  '专业级人类': 'rgba(255, 0, 0, 0.7)',      // 红色
  'DeepSeek R1': 'rgba(255, 0, 0, 0.7)',   // 红
  'DeepSeek V3': 'rgba(16, 185, 129, 0.7)',   // 绿
  'Qwen3': 'rgba(156, 163, 175, 0.7)'          // 灰
};

// 综合数据
const comprehensiveData = {
  detailScores: {
    "专业级人类": {
      "高风险_识别": 81.4,
      "低风险_识别": 89.3,
      "长期回报_识别": 83.3,
      "短期回报_识别": 87.8,
      "高风险_预测": 86.3,
      "低风险_预测": 83.8,
      "长期回报_预测": 89.8,
      "短期回报_预测": 93.7
    },
    "精英级人类": {
      "高风险_识别": 82.9,
      "低风险_识别": 84.2,
      "长期回报_识别": 87.4,
      "短期回报_识别": 88.3,
      "高风险_预测": 83.0,
      "低风险_预测": 82.7,
      "长期回报_预测": 85.4,
      "短期回报_预测": 89.0
    },
    "普通级人类": {
      "高风险_识别": 80.6,
      "低风险_识别": 84.1,
      "长期回报_识别": 72.8,
      "短期回报_识别": 72.0,
      "高风险_预测": 80.0,
      "低风险_预测": 83.5,
      "长期回报_预测": 84.1,
      "短期回报_预测": 82.7
    },
    "DeepSeek R1": {
      "高风险_识别": 54.6,
      "低风险_识别": 43.1,
      "长期回报_识别": 84.0,
      "短期回报_识别": 45.2,
      "高风险_预测": 31.1,
      "低风险_预测": 21.9,
      "长期回报_预测": 60.6,
      "短期回报_预测": 48.3
    },
    "Qwen3": {
      "高风险_识别": 38.2,
      "低风险_识别": 47.1,
      "长期回报_识别": 68.0,
      "短期回报_识别": 58.1,
      "高风险_预测": 35.2,
      "低风险_预测": 33.2,
      "长期回报_预测": 61.5,
      "短期回报_预测": 42.7
    },
    "DeepSeek V3": {
      "高风险_识别": 30.9,
      "低风险_识别": 50.9,
      "长期回报_识别": 80.0,
      "短期回报_识别": 41.9,
      "高风险_预测": 30.7,
      "低风险_预测": 28.3,
      "长期回报_预测": 60.6,
      "短期回报_预测": 48.3
    }
  },

  dimensionScores: {
    "精英级人类": {
      "风险识别": 83.6,
      "回报识别": 87.9,
      "风险类策略预测": 82.9,
      "回报类策略预测": 87.2
    },
    "普通级人类": {
      "风险识别": 82.4,
      "回报识别": 72.4,
      "风险类策略预测": 81.8,
      "回报类策略预测": 83.4
    },
    "DeepSeek R1": {
      "风险识别": 48.9,
      "回报识别": 64.6,
      "风险类策略预测": 26.5,
      "回报类策略预测": 54.5
    },
    "Qwen3": {
      "风险识别": 42.7,
      "回报识别": 63.1,
      "风险类策略预测": 34.2,
      "回报类策略预测": 52.1
    },
    "DeepSeek V3": {
      "风险识别": 32.2,
      "回报识别": 62.3,
      "风险类策略预测": 28.1,
      "回报类策略预测": 54.5
    }
  }
};


// 2. 雷达图
const radarCtx = document.getElementById('radarChart').getContext('2d');
const radarDimensions = [
  '风险识别',
  '回报识别',
  '风险类策略预测',
  '回报类策略预测'
];

// 这里请确保 comprehensiveData.dimensionScores 里有这四项数据
const radarEntities = ['精英级人类', '普通级人类', 'DeepSeek R1', 'Qwen3'];
const radarDatasets = radarEntities.map(entity => ({
  label: entity,
  data: [
    parseFloat(comprehensiveData.dimensionScores[entity]['风险识别']) / 100 * 5,
    parseFloat(comprehensiveData.dimensionScores[entity]['回报识别']) / 100 * 5,
    parseFloat(comprehensiveData.dimensionScores[entity]['风险类策略预测']) / 100 * 5,
    parseFloat(comprehensiveData.dimensionScores[entity]['回报类策略预测']) / 100 * 5
  ],
  backgroundColor: colors[entity],
  borderColor: borderColors[entity],
  borderWidth: 2,
  pointBackgroundColor: borderColors[entity],
  pointBorderColor: '#fff',
  pointBorderWidth: 2
}));

new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: radarDimensions,
    datasets: radarDatasets
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 5, // 归一化后最大值为5
        ticks: {
          stepSize: 1,
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        pointLabels: {
          font: {
            size: 18,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  }
});

// 3. 细分能力表现
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const subCategories = [
  '风险回报识别 高风险',
  '风险回报识别 低风险',
  '风险回报识别 长期回报',
  '风险回报识别 短期回报',
  '策略倾向预测 高风险',
  '策略倾向预测 低风险',
  '策略倾向预测 长期回报',
  '策略倾向预测 短期回报'
];

const barEntities = ['精英级人类', '普通级人类', 'DeepSeek R1', 'Qwen3'];
const categoryDatasets = barEntities.map(entity => ({
  label: entity,
  data: [
    comprehensiveData.detailScores[entity]['高风险_识别'],
    comprehensiveData.detailScores[entity]['低风险_识别'],
    comprehensiveData.detailScores[entity]['长期回报_识别'],
    comprehensiveData.detailScores[entity]['短期回报_识别'],
    comprehensiveData.detailScores[entity]['高风险_预测'],
    comprehensiveData.detailScores[entity]['低风险_预测'],
    comprehensiveData.detailScores[entity]['长期回报_预测'],
    comprehensiveData.detailScores[entity]['短期回报_预测']
  ],
  backgroundColor: colors[entity],
  borderColor: borderColors[entity],
  borderWidth: 2,
  borderRadius: 4
}));

new Chart(categoryCtx, {
  type: 'bar',
  data: {
    labels: subCategories,
    datasets: categoryDatasets
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: '博弈类型',
          font: {
            size: 18,
            weight: 'bold'
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: false,
          text: '得分',
          font: {
            size: 18,
            weight: 'bold'
          }
        },
        ticks: {
          callback: function (value) {
            return value + '分';
          },
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  }
});

// // 4. 复杂度差异分析
// const complexityCtx = document.getElementById('complexityChart').getContext('2d');
// const complexityLabels = ['简单决策', '中等决策', '复杂决策', '协同决策'];
// // 数据依然按原顺序取
// const complexityDataKeys = ['非合作博弈', '不完全信息', '序贯博弈', '联盟合作'];
// const selectedEntities = ['精英级人类', '普通级人类', 'DeepSeek R1', 'Qwen3'];
// const complexityDatasets = selectedEntities.map(entity => ({
//   label: entity,
//   data: complexityDataKeys.map(cat => comprehensiveData.categoryScores[entity][cat]), // 正确
//   borderColor: borderColors[entity],
//   borderWidth: 2,
//   fill: false,
//   tension: 0.4
// }));

// new Chart(complexityCtx, {
//   type: 'line',
//   data: {
//     labels: complexityLabels, // 用新的x轴标签
//     datasets: complexityDatasets
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           font: {
//             size: 16,
//             weight: 'bold'
//           }
//         }
//       }
//     },
//     scales: {
//       x: {
//         title: {
//           display: false,
//           text: '博弈类型',
//           font: {
//             size: 18,
//             weight: 'bold'
//           }
//         },
//         grid: {
//           display: false
//         },
//         ticks: {
//           font: {
//             size: 16,
//             weight: 'bold'
//           }
//         }
//       },
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: {
//           display: true,
//           text: 'AVERAGE(%)',
//           font: {
//             size: 18,
//             weight: 'bold'
//           }
//         },
//         ticks: {
//           stepSize: 20, // 步长为20
//           callback: function (value) {
//             return value + '分';
//           },
//           font: {
//             size: 16,
//             weight: 'bold'
//           }
//         },
//         grid: {
//           color: 'rgba(0,0,0,0.1)'
//         }
//       }
//     }
//   }
// });

// 初始化排名表格
function createRankingTable() {
  const participants = [
    {
      name: "专业级人类",
      type: "Human",
      score: 85.70,
      ...comprehensiveData.detailScores["专业级人类"]
    },
    {
      name: "精英级人类",
      type: "Human",
      score: 85.50,
      ...comprehensiveData.detailScores["精英级人类"]
    },
    {
      name: "普通级人类",
      type: "Human",
      score: 77.90,
      ...comprehensiveData.detailScores["普通级人类"]
    },
    {
      name: "DeepSeek R1",
      type: "AI",
      score: 49.10,
      ...comprehensiveData.detailScores["DeepSeek R1"]
    },
    {
      name: "Qwen3",
      type: "AI",
      score: 47.90,
      ...comprehensiveData.detailScores["Qwen3"]
    },
    {
      name: "DeepSeek V3",
      type: "AI",
      score: 45.90,
      ...comprehensiveData.detailScores["DeepSeek V3"]
    }
  ];

  let html = "";
  participants.forEach((p, idx) => {
    html += `<tr>
      <td><span class="rank-badge rank-${idx + 1}">#${idx + 1}</span></td>
            <td style="text-align: left; font-weight: 600;">
                ${p.name}
                <span class="entity-tag ${p.type}">${p.type}</span>
            </td>
      <td>${p.type}</td>
      <td>${p.score.toFixed(2)}</td>
      <td>${p["高风险_识别"]}</td>
      <td>${p["低风险_识别"]}</td>
      <td>${p["长期回报_识别"]}</td>
      <td>${p["短期回报_识别"]}</td>
      <td>${p["高风险_预测"]}</td>
      <td>${p["低风险_预测"]}</td>
      <td>${p["长期回报_预测"]}</td>
      <td>${p["短期回报_预测"]}</td>
    </tr>`;
  });
  document.getElementById('rankingTableBody').innerHTML = html;
}
createRankingTable();
