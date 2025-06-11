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
const labels = ['人类', 'Doubao-v1', 'GLM-4V', 'Qwen-VL-Max', 'Qwen-VL-Plus'];  // 设置 X 轴上对应的标签
const data = {
	labels: labels,
	datasets: [{
		label: '',
		data: [79.9, 58.2, 44.0, 27, 26.4],
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
	'人类': 'rgba(108, 127, 255, 1)',
	'Doubao-v1': 'rgba(104, 192, 255, 1)',
	'GLM-4V': 'rgba(182, 189, 203, 1)',
	'Qwen-VL-Max': 'rgba(220, 124, 122, 1)',
};

const radarColors = {
	'人类': 'rgba(165, 176, 180, 0.8)',
	'Doubao-v1': 'rgba(165, 176, 180, 0.8)',
	'GLM-4V': 'rgba(165, 176, 180, 0.8)',
	'Qwen-VL-Max': 'rgba(165, 176, 180, 0.8)',
};

const borderColors = {
	'人类': 'rgba(108, 127, 255, 1)',
	'Doubao-v1': 'rgba(104, 192, 255, 1)',
	'GLM-4V': 'rgba(182, 189, 203, 1)',
	'Qwen-VL-Max': 'rgba(220, 124, 122, 1)',
};

// 综合数据
const comprehensiveData = {
	overallScores: {
		"人类": 79.9,
		"Doubao-v1": 58.2,
		"GLM-4V": 27.0,
		"Qwen-VL-Max": 44.0,
		"Qwen-VL-Plus": 26.4
	},
	categoryScores: {
		"人类": {
			"环境地形": 72.1,
			"算子识别": 81.9,
			"算子关系": 80.1,
			"要点关系": 80.9,
			"兵力对比": 78.5,
			"局面分析": 85.9
		},
		"Doubao-v1": {
			"环境地形": 57.9,
			"算子识别": 59.3,
			"算子关系": 71.3,
			"要点关系": 69.2,
			"兵力对比": 62.2,
			"局面分析": 29.2
		},
		"GLM-4V": {
			"环境地形": 23.3,
			"算子识别": 27.8,
			"算子关系": 29.4,
			"要点关系": 15.0,
			"兵力对比": 29.2,
			"局面分析": 37.5
		},
		"Qwen-VL-Max": {
			"环境地形": 43.8,
			"算子识别": 65.3,
			"算子关系": 43.7,
			"要点关系": 69.2,
			"兵力对比": 29.2,
			"局面分析": 12.5
		},
		"Qwen-VL-Plus": {
			"环境地形": 45.4,
			"算子识别": 45.4,
			"算子关系": 14.7,
			"要点关系": 23.7,
			"兵力对比": 20.8,
			"局面分析": 8.3
		}
	},
	dimensionScores: {
		"人类": {
			"环境识别": 4.85,
			"目标检测": 4.92,
			"关系理解": 4.72,
			"空间推理": 4.81,
			"兵力评估": 4.78,
			"态势判断": 4.69,
			"决策支持": 4.83
		},
		"Doubao-v1": {
			"环境识别": 3.34,
			"目标检测": 3.45,
			"关系理解": 3.16,
			"空间推理": 3.21,
			"兵力评估": 3.12,
			"态势判断": 3.13,
			"决策支持": 3.26
		},
		"GLM-4V": {
			"环境识别": 2.91,
			"目标检测": 2.27,
			"关系理解": 2.16,
			"空间推理": 2.24,
			"兵力评估": 2.12,
			"态势判断": 1.87,
			"决策支持": 1.88
		},
		"Qwen-VL-Max": {
			"环境识别": 3.10,
			"目标检测": 3.37,
			"关系理解": 2.86,
			"空间推理": 2.98,
			"兵力评估": 2.81,
			"态势判断": 2.70,
			"决策支持": 3.06
		},
		"Qwen-VL-Plus": {
			"环境识别": 2.31,
			"目标检测": 2.41,
			"关系理解": 2.03,
			"空间推理": 2.16,
			"兵力评估": 1.94,
			"态势判断": 1.84,
			"决策支持": 2.21
		}
	}
};

// 2. 雷达图
const radarCtx = document.getElementById('radarChart').getContext('2d');
const dimensions = ['环境识别', '目标检测', '关系理解', '空间推理', '兵力评估', '态势判断', '决策支持'];

const radarDatasets = [{
	label: '人类',
	data: dimensions.map(dim => comprehensiveData.dimensionScores['人类'][dim]),
	backgroundColor: radarColors['人类'].replace('0.8', '0.2'),
	borderColor: borderColors['人类'],
	borderWidth: 3,
	pointBackgroundColor: borderColors['人类'],
	pointBorderColor: '#fff',
	pointBorderWidth: 2
},
{
	label: 'Doubao-v1',
	data: dimensions.map(dim => comprehensiveData.dimensionScores['Doubao-v1'][dim]),
	backgroundColor: radarColors['Doubao-v1'].replace('0.8', '0.2'),
	borderColor: borderColors['Doubao-v1'],
	borderWidth: 3,
	pointBackgroundColor: borderColors['Doubao-v1'],
	pointBorderColor: '#fff',
	pointBorderWidth: 2
},
{
	label: 'Qwen-VL-Max',
	data: dimensions.map(dim => comprehensiveData.dimensionScores['Qwen-VL-Max'][dim]),
	backgroundColor: radarColors['Qwen-VL-Max'].replace('0.8', '0.2'),
	borderColor: borderColors['Qwen-VL-Max'],
	borderWidth: 2,
	pointBackgroundColor: borderColors['Qwen-VL-Max'],
	pointBorderColor: '#fff',
	pointBorderWidth: 2
},
{
	label: 'GLM-4V',
	data: dimensions.map(dim => comprehensiveData.dimensionScores['GLM-4V'][dim]),
	backgroundColor: radarColors['GLM-4V'].replace('0.8', '0.2'),
	borderColor: borderColors['GLM-4V'],
	borderWidth: 2,
	pointBackgroundColor: borderColors['GLM-4V'],
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
const categories = ['环境地形', '算子识别', '算子关系', '要点关系', '兵力对比', '局面分析'];
const selectedEntities = ['人类', 'Doubao-v1', 'Qwen-VL-Max', 'GLM-4V'];
const categoryDatasets = selectedEntities.map(entity => ({
	label: entity,
	data: categories.map(cat => comprehensiveData.categoryScores[entity][cat]),
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
					text: '能力类别',
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
const complexityData = {
	labels: ['简单识别', '关系理解', '空间推理', '综合分析'],
	datasets: [{
		label: '人类',
		data: [85.2, 80.8, 78.1, 85.9],
		borderColor: borderColors['人类'],
		// backgroundColor: colors['人类'].replace('0.8', '0.3'),
		borderWidth: 3,
		fill: false,
		tension: 0.4
	},
	{
		label: 'Doubao-v1',
		data: [62.5, 60.2, 58.8, 29.2],
		borderColor: borderColors['Doubao-v1'],
		// backgroundColor: colors['Doubao-v1'].replace('0.8', '0.3'),
		borderWidth: 3,
		fill: false,
		tension: 0.4
	},
	{
		label: 'Qwen-VL-Max',
		data: [54.6, 56.5, 56.4, 12.5],
		borderColor: borderColors['Qwen-VL-Max'],
		// backgroundColor: colors['Qwen-VL-Max'].replace('0.8', '0.3'),
		borderWidth: 2,
		fill: false,
		tension: 0.4
	},
	{
		label: 'GLM-4V',
		data: [25.6, 22.2, 22.1, 37.5],
		borderColor: borderColors['GLM-4V'],
		// backgroundColor: colors['GLM-4V'].replace('0.8', '0.3'),
		borderWidth: 2,
		fill: false,
		tension: 0.4
	}
	]
};

new Chart(complexityCtx, {
	type: 'line',
	data: complexityData,
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
					text: '分析复杂度',
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
					callback: function (value) {
						return value + '分';
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
	const participants = [{
		name: "人类",
		type: "Human",
		...comprehensiveData.categoryScores["人类"],
		score: comprehensiveData.overallScores["人类"]
	},
	{
		name: "Doubao-v1",
		type: "AI",
		...comprehensiveData.categoryScores["Doubao-v1"],
		score: comprehensiveData.overallScores["Doubao-v1"]
	},
	{
		name: "Qwen-VL-Max",
		type: "AI",
		...comprehensiveData.categoryScores["Qwen-VL-Max"],
		score: comprehensiveData.overallScores["Qwen-VL-Max"]
	},
	{
		name: "GLM-4V",
		type: "AI",
		...comprehensiveData.categoryScores["GLM-4V"],
		score: comprehensiveData.overallScores["GLM-4V"]
	},
	{
		name: "Qwen-VL-Plus",
		type: "AI",
		...comprehensiveData.categoryScores["Qwen-VL-Plus"],
		score: comprehensiveData.overallScores["Qwen-VL-Plus"]
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
            <td>${p["环境地形"]}</td>
            <td>${p["算子识别"]}</td>
            <td>${p["算子关系"]}</td>
            <td>${p["要点关系"]}</td>
            <td>${p["兵力对比"]}</td>
            <td>${p["局面分析"]}</td>
        </tr>`;
	});
	document.getElementById('rankingTableBody').innerHTML = html;
}
createRankingTable();