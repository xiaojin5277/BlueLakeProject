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
const labels = ['精英级人类', '专业级人类', 'GPT-4.1', 'Claude 3.7', 'Qwen 2.5 VL', '普通级人类', 'Gemini 2.5 Pro'];  // 设置 X 轴上对应的标签
const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: [92.30, 80.70, 60.00, 56.90, 51.10, 45.00, 30.00],
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
  '精英级人类': 'rgba(30, 64, 175, 0.8)',         // 深蓝
  'GPT-4.1': 'rgba(59, 130, 246, 0.5)',   // 浅蓝
  '普通级人类': 'rgba(156, 163, 175, 0.7)',     // 灰色
  '专业级人类': 'rgba(153, 27, 27, 0.7)',  // 红色
  // 'Qwen-VL-Plus': 'rgba(153, 27, 27, 0.7)'  // 红色
};

const borderColors = {
  '精英级人类': 'rgba(30, 64, 175, 0.8)',         // 深蓝
  'GPT-4.1': 'rgba(59, 130, 246, 0.5)',   // 浅蓝
  '普通级人类': 'rgba(156, 163, 175, 0.7)',     // 灰色
  '专业级人类': 'rgba(255, 0, 0, 0.7)',  // 红色
  // 'Qwen-VL-Plus': 'rgba(153, 27, 27, 0.7)'  // 红色
};

// 综合数据
const comprehensiveData = {
  overallScores: {
    "精英级人类": 92.3,
    "专业级人类": 80.7,
    "GPT-4.1": 60.0,
    "Claude 3.7": 56.9,
    "Qwen 2.5 VL": 51.1,
    "普通级人类": 45.0,
    "Gemini 2.5 Pro": 30.0,
  },
  categoryScores: {
    "精英级人类": {
      "非合作博弈": 91.5,
      "不完全信息": 93.8,
      "序贯博弈": 92.1,
      "联盟合作": 94.2,
    },
    "专业级人类": {
      "非合作博弈": 79.2,
      "不完全信息": 82.1,
      "序贯博弈": 81.3,
      "联盟合作": 78.4,
    },
    "GPT-4.1": {
      "非合作博弈": 58.2,
      "不完全信息": 63.1,
      "序贯博弈": 59.4,
      "联盟合作": 61.2,
    },
    "Claude 3.7": {
      "非合作博弈": 61.5,
      "不完全信息": 60.5,
      "序贯博弈": 58.5,
      "联盟合作": 50.6,
    },
    "Qwen 2.5 VL": {
      "非合作博弈": 58.8,
      "不完全信息": 55.6,
      "序贯博弈": 48.3,
      "联盟合作": 51.4,
    },
    "普通级人类": {
      "非合作博弈": 42.8,
      "不完全信息": 46.5,
      "序贯博弈": 44.7,
      "联盟合作": 43.2,
    },
    "Gemini 2.5 Pro": {
      "非合作博弈": 24.6,
      "不完全信息": 32.0,
      "序贯博弈": 35.7,
      "联盟合作": 33.1,
    },
  },
  dimensionScores: {
    "精英级人类": {
      "合规性评分": 4.8,
      "相似度(×5)": 4.7,
      "事实正确性": 4.9,
      "逻辑自治性": 4.8,
      "游戏常识": 4.7,
      "后果预测": 4.8,
      "清晰度": 4.9
    },
    "专业级人类": {
      "合规性评分": 4.2,
      "相似度(×5)": 4.1,
      "事实正确性": 4.3,
      "逻辑自治性": 4.2,
      "游戏常识": 4.1,
      "后果预测": 4.2,
      "清晰度": 4.3
    },
    "GPT-4.1": {
      "合规性评分": 3.5,
      "相似度(×5)": 3.2,
      "事实正确性": 3.4,
      "逻辑自治性": 3.3,
      "游戏常识": 3.2,
      "后果预测": 3.3,
      "清晰度": 3.4
    },
    "Claude 3.7": {
      "合规性评分": 3.2,
      "相似度(×5)": 3.1,
      "事实正确性": 3.0,
      "逻辑自治性": 3.1,
      "游戏常识": 3.0,
      "后果预测": 3.1,
      "清晰度": 3.2
    }
  }
};


// 2. 雷达图
const radarCtx = document.getElementById('radarChart').getContext('2d');
const dimensions = ['合规性评分',
  '相似度(×5)',
  '事实正确性',
  '逻辑自治性',
  '游戏常识',
  '后果预测',
  '清晰度'];

const radarDatasets = [
  {
    label: '精英级人类',
    data: dimensions.map(dim => comprehensiveData.dimensionScores['精英级人类'][dim]),
    backgroundColor: colors['精英级人类'].replace('0.8', '0.2'),
    borderColor: borderColors['精英级人类'],
    borderWidth: 3,
    pointBackgroundColor: borderColors['精英级人类'],
    pointBorderColor: '#fff',
    pointBorderWidth: 2
  },
  {
    label: '专业级人类',
    data: dimensions.map(dim => comprehensiveData.dimensionScores['专业级人类'][dim]),
    backgroundColor: colors['专业级人类'].replace('0.8', '0.2'),
    borderColor: borderColors['专业级人类'],
    borderWidth: 3,
    pointBackgroundColor: borderColors['专业级人类'],
    pointBorderColor: '#fff',
    pointBorderWidth: 2
  },
  {
    label: 'GPT-4.1',
    data: dimensions.map(dim => comprehensiveData.dimensionScores['GPT-4.1'][dim]),
    backgroundColor: colors['GPT-4.1'].replace('0.8', '0.2'),
    borderColor: borderColors['GPT-4.1'],
    borderWidth: 2,
    pointBackgroundColor: borderColors['GPT-4.1'],
    pointBorderColor: '#fff',
    pointBorderWidth: 2
  },
  {
    label: '普通级人类',
    data: dimensions.map(dim => comprehensiveData.dimensionScores['Claude 3.7'][dim]),
    backgroundColor: colors['普通级人类'].replace('0.8', '0.2'),
    borderColor: borderColors['普通级人类'],
    borderWidth: 2,
    pointBackgroundColor: borderColors['普通级人类'],
    pointBorderColor: '#fff',
    pointBorderWidth: 2
  }
];

new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: dimensions,
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
        max: 5,
        ticks: {
          stepSize: 1,
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        pointLabels: {
          font: {
            size: 18, // 雷达图各维度标签字号
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

// 3. 六大核心能力表现
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categories = ['非合作博弈', '不完全信息', '序贯博弈', '联盟合作']; // 修改为四项

const selectedEntities = ['精英级人类', '专业级人类', 'GPT-4.1', '普通级人类'];
const categoryDatasets = selectedEntities.map(entity => ({
  label: entity,
  data: categories.map(cat => comprehensiveData.categoryScores[entity][cat]), // 修正这里
  backgroundColor: colors[entity],
  borderColor: borderColors[entity],
  borderWidth: 2,
  borderRadius: 4
}));


new Chart(categoryCtx, {
  type: 'bar',
  data: {
    labels: categories,
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

// 4. 复杂度差异分析
const complexityCtx = document.getElementById('complexityChart').getContext('2d');
const complexityLabels = ['简单决策', '中等决策', '复杂决策', '协同决策'];
// 数据依然按原顺序取
const complexityDataKeys = ['非合作博弈', '不完全信息', '序贯博弈', '联盟合作'];

const complexityDatasets = selectedEntities.map(entity => ({
  label: entity,
  data: complexityDataKeys.map(cat => comprehensiveData.categoryScores[entity][cat]), // 正确
  borderColor: borderColors[entity],
  borderWidth: 2,
  fill: false,
  tension: 0.4
}));

new Chart(complexityCtx, {
  type: 'line',
  data: {
    labels: complexityLabels, // 用新的x轴标签
    datasets: complexityDatasets
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
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
          }
        },
        grid: {
          display: false
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
          display: true,
          text: 'AVERAGE(%)',
          font: {
            size: 18,
            weight: 'bold'
          }
        },
        ticks: {
          stepSize: 20, // 步长为20
          callback: function (value) {
            return value + '分';
          },
          font: {
            size: 16,
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

// 初始化排名表格
function createRankingTable() {
  const participants = [
    {
      name: "精英级人类",
      type: "Human",
      ...comprehensiveData.categoryScores["精英级人类"],
      score: (
        (comprehensiveData.categoryScores["精英级人类"]["非合作博弈"] +
          comprehensiveData.categoryScores["精英级人类"]["不完全信息"] +
          comprehensiveData.categoryScores["精英级人类"]["序贯博弈"] +
          comprehensiveData.categoryScores["精英级人类"]["联盟合作"]) / 4
      ).toFixed(2)
    },
    {
      name: "专业级人类",
      type: "Human",
      ...comprehensiveData.categoryScores["专业级人类"],
      score: (
        (comprehensiveData.categoryScores["专业级人类"]["非合作博弈"] +
          comprehensiveData.categoryScores["专业级人类"]["不完全信息"] +
          comprehensiveData.categoryScores["专业级人类"]["序贯博弈"] +
          comprehensiveData.categoryScores["专业级人类"]["联盟合作"]) / 4
      ).toFixed(2)
    },
    {
      name: "GPT-4.1",
      type: "AI",
      ...comprehensiveData.categoryScores["GPT-4.1"],
      score: (
        (comprehensiveData.categoryScores["GPT-4.1"]["非合作博弈"] +
          comprehensiveData.categoryScores["GPT-4.1"]["不完全信息"] +
          comprehensiveData.categoryScores["GPT-4.1"]["序贯博弈"] +
          comprehensiveData.categoryScores["GPT-4.1"]["联盟合作"]) / 4
      ).toFixed(2)
    },
    {
      name: "Claude 3.7",
      type: "AI",
      ...comprehensiveData.categoryScores["Claude 3.7"],
      score: (
        (comprehensiveData.categoryScores["Claude 3.7"]["非合作博弈"] +
          comprehensiveData.categoryScores["Claude 3.7"]["不完全信息"] +
          comprehensiveData.categoryScores["Claude 3.7"]["序贯博弈"] +
          comprehensiveData.categoryScores["Claude 3.7"]["联盟合作"]) / 4
      ).toFixed(2)
    },
    {
      name: "Qwen 2.5 VL",
      type: "AI",
      ...comprehensiveData.categoryScores["Qwen 2.5 VL"],
      score: (
        (comprehensiveData.categoryScores["Qwen 2.5 VL"]["非合作博弈"] +
          comprehensiveData.categoryScores["Qwen 2.5 VL"]["不完全信息"] +
          comprehensiveData.categoryScores["Qwen 2.5 VL"]["序贯博弈"] +
          comprehensiveData.categoryScores["Qwen 2.5 VL"]["联盟合作"]) / 4
      ).toFixed(2)
    },
    {
      name: "普通级人类",
      type: "Human",
      ...comprehensiveData.categoryScores["普通级人类"],
      score: (
        (comprehensiveData.categoryScores["普通级人类"]["非合作博弈"] +
          comprehensiveData.categoryScores["普通级人类"]["不完全信息"] +
          comprehensiveData.categoryScores["普通级人类"]["序贯博弈"] +
          comprehensiveData.categoryScores["普通级人类"]["联盟合作"]) / 4
      ).toFixed(2)
    },
    {
      name: "Gemini 2.5 Pro",
      type: "AI",
      ...comprehensiveData.categoryScores["Gemini 2.5 Pro"],
      score: (
        (comprehensiveData.categoryScores["Gemini 2.5 Pro"]["非合作博弈"] +
          comprehensiveData.categoryScores["Gemini 2.5 Pro"]["不完全信息"] +
          comprehensiveData.categoryScores["Gemini 2.5 Pro"]["序贯博弈"] +
          comprehensiveData.categoryScores["Gemini 2.5 Pro"]["联盟合作"]) / 4
      ).toFixed(2)
    }
  ];

  // 按综合得分排序
  participants.sort((a, b) => b.score - a.score);

  let html = "";
  participants.forEach((p, idx) => {
    html += `<tr>
            <td><span class="rank-badge rank-${idx + 1}">#${idx + 1}</span></td>
            <td style="text-align: left; font-weight: 600;">
                ${p.name}
                <span class="entity-tag ${p.type}">${p.type}</span>
            </td>
            <td>${p.type}</td>
            <td>${p.score}</td>
            <td>${p["非合作博弈"]}</td>
            <td>${p["不完全信息"]}</td>
            <td>${p["序贯博弈"]}</td>
            <td>${p["联盟合作"]}</td>
        </tr>`;
  });
  document.getElementById('rankingTableBody').innerHTML = html;
}
createRankingTable();