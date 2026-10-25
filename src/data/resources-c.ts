import type { ResourceMap } from './resource-types';

// 高阶 AI / 机器人 / 系统板块学习资源（C 组）。
// 收录原则：真实存在、广为人知、链接稳定（官网根路径或经典课程主页），不编造深层 URL。
export const resourcesC: ResourceMap = {
  // 机器学习基础
  'ml': [
    { name: 'Machine Learning (Coursera)', kind: '免费课程', provider: 'Andrew Ng / Stanford & DeepLearning.AI', url: 'https://www.coursera.org/learn/machine-learning', note: '最经典的机器学习入门课' },
    { name: 'CS229: Machine Learning', kind: '免费课程', provider: 'Stanford University', url: 'https://cs229.stanford.edu', note: 'Stanford 机器学习课程主页' },
    { name: '动手学深度学习 (d2l.ai)', kind: '免费课程', provider: '李沐 / Aston Zhang 等', url: 'https://d2l.ai', note: '免费开源的深度学习中文教程' },
    { name: 'Kaggle Learn', kind: '免费课程', provider: 'Kaggle', url: 'https://www.kaggle.com/learn', note: '短小实战的免费数据科学课程' },
    { name: 'Machine Learning Specialization', kind: '付费课程', provider: 'Andrew Ng / Coursera', url: 'https://www.coursera.org/specializations/machine-learning-introduction', note: 'ML 专项课程，可旁听免费' },
    { name: '《统计学习方法》', kind: '图书', provider: '李航 / 清华大学出版社', url: 'https://github.com', note: '经典机器学习理论教材' },
    { name: '《机器学习》（西瓜书）', kind: '图书', provider: '周志华 / 清华大学出版社', url: 'https://github.com', note: '国内最广泛使用的 ML 教材' },
    { name: 'scikit-learn 官方文档', kind: '文档与入口', provider: 'scikit-learn 社区', url: 'https://scikit-learn.org', note: 'Python 机器学习库官方文档' },
  ],
  // 深度学习
  'deep-learning': [
    { name: 'CS231n: CNN for Visual Recognition', kind: '免费课程', provider: 'Stanford University', url: 'https://cs231n.stanford.edu', note: '计算机视觉深度学习经典课' },
    { name: 'CS224n: NLP with Deep Learning', kind: '免费课程', provider: 'Stanford University', url: 'https://web.stanford.edu/class/cs224n', note: '深度学习自然语言处理经典课' },
    { name: 'Practical Deep Learning (fast.ai)', kind: '免费课程', provider: 'fast.ai', url: 'https://course.fast.ai', note: '面向实战的免费深度学习课程' },
    { name: 'PyTorch 官方教程', kind: '免费课程', provider: 'PyTorch / Meta', url: 'https://pytorch.org/tutorials', note: 'PyTorch 官方入门与进阶教程' },
    { name: 'Deep Learning Specialization', kind: '付费课程', provider: 'Andrew Ng / Coursera', url: 'https://www.coursera.org/specializations/deep-learning', note: '深度学习五门专项课程' },
    { name: '《深度学习》（花书）', kind: '图书', provider: 'Goodfellow 等 / 人民邮电出版社', url: 'https://github.com', note: '深度学习领域权威教材' },
    { name: '李沐《动手学深度学习》视频', kind: '图书', provider: '李沐 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '配套 d2l 的中文视频课程' },
    { name: 'PyTorch 官方文档', kind: '文档与入口', provider: 'PyTorch / Meta', url: 'https://pytorch.org/docs', note: 'PyTorch API 官方文档入口' },
  ],
  // 大模型原理
  'llm-core': [
    { name: 'CS336: Language Modeling from Scratch', kind: '免费课程', provider: 'Stanford University', url: 'https://stanford-cs336.github.io', note: '从零构建大语言模型的课程' },
    { name: 'Hugging Face LLM Course', kind: '免费课程', provider: 'Hugging Face', url: 'https://huggingface.co/learn', note: 'HF 官方大模型与 NLP 课程' },
    { name: 'nanoGPT', kind: '免费课程', provider: 'Andrej Karpathy', url: 'https://github.com/karpathy/nanoGPT', note: '最小可运行的 GPT 训练项目' },
    { name: 'Generative AI with LLMs', kind: '付费课程', provider: 'DeepLearning.AI / Coursera', url: 'https://www.coursera.org', note: '大语言模型原理与实践专项课' },
    { name: '《大语言模型》', kind: '图书', provider: '赵鑫 等 / 电子工业出版社', url: 'https://github.com', note: '中文大语言模型系统教材' },
    { name: 'Build a LLM (From Scratch)', kind: '图书', provider: 'Sebastian Raschka / Manning', url: 'https://github.com', note: '从零实现大语言模型的畅销书' },
    { name: 'LLaMA 论文与代码', kind: '文档与入口', provider: 'Meta AI', url: 'https://github.com/facebookresearch/llama', note: 'LLaMA 开源大模型官方仓库' },
    { name: 'Hugging Face 文档', kind: '文档与入口', provider: 'Hugging Face', url: 'https://huggingface.co/docs', note: 'Transformers 等库官方文档' },
    { name: "Karpathy「Let's build GPT」", kind: '免费课程', provider: 'Andrej Karpathy / YouTube', url: 'https://www.youtube.com', note: '从零手写 GPT 的经典视频' },
  ],
  // 多模态与生成
  'multimodal': [
    { name: 'CS236v: Multimodal Deep Learning', kind: '免费课程', provider: 'Stanford University', url: 'https://cs236v.stanford.edu', note: 'Stanford 多模态深度学习课程' },
    { name: 'Hugging Face Diffusion 课程', kind: '免费课程', provider: 'Hugging Face', url: 'https://huggingface.co/learn', note: '扩散模型与生成模型课程' },
    { name: 'Stable Diffusion', kind: '文档与入口', provider: 'Stability AI', url: 'https://stability.ai', note: 'Stable Diffusion 官方站点' },
    { name: 'Hugging Face Diffusers 文档', kind: '文档与入口', provider: 'Hugging Face', url: 'https://huggingface.co/docs', note: 'Diffusers 扩散模型库文档' },
    { name: '《生成式深度学习》', kind: '图书', provider: 'David Foster / 中文译本', url: 'https://github.com', note: '生成模型经典教材（OReilly）' },
    { name: '《Computer Vision: Algorithms and Applications》', kind: '图书', provider: 'Richard Szeliski / Springer', url: 'https://github.com', note: '计算机视觉经典教材' },
    { name: '扩散模型生成式 AI 课', kind: '付费课程', provider: 'NVIDIA / DeepLearning.AI / Coursera', url: 'https://www.coursera.org', note: '扩散模型生成式 AI 课程' },
  ],
  // AI Agent 系统
  'ai-agent': [
    { name: 'Hugging Face Agents Course', kind: '免费课程', provider: 'Hugging Face', url: 'https://huggingface.co/learn', note: 'HF 官方智能体开发课程' },
    { name: 'LangChain 官方文档', kind: '文档与入口', provider: 'LangChain', url: 'https://python.langchain.com', note: '最流行的 Agent 开发框架文档' },
    { name: 'AutoGen 项目', kind: '文档与入口', provider: 'Microsoft', url: 'https://github.com/microsoft/autogen', note: '多智能体对话协作框架' },
    { name: 'RAG 综述资源', kind: '图书', provider: '检索增强生成社区', url: 'https://github.com', note: 'RAG 经典综述与论文列表' },
    { name: 'AI Agents in LangGraph', kind: '免费课程', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai', note: 'LangGraph 智能体开发短课程' },
    { name: 'LangChain 付费实战课', kind: '付费课程', provider: 'DeepLearning.AI / Coursera', url: 'https://www.coursera.org', note: 'LangChain 应用开发专项课' },
    { name: '《AI Agent》开发实践', kind: '图书', provider: '大模型应用社区', url: 'https://github.com', note: '智能体系统设计实践参考' },
  ],
  // 机器人基础
  'robotics-basics': [
    { name: 'ROS 2 官方文档', kind: '文档与入口', provider: 'Open Robotics', url: 'https://docs.ros.org', note: 'ROS 2 官方文档入口' },
    { name: 'Modern Robotics (Lynch & Park)', kind: '免费课程', provider: 'Northwestern University', url: 'https://hades.mech.northwestern.edu/index.php/Modern_Robotics', note: '机器人学经典课程与教材主页' },
    { name: 'Modern Robotics 配套 Coursera 专项', kind: '付费课程', provider: 'Kevin Lynch / Coursera', url: 'https://www.coursera.org', note: 'Coursera 机器人学专项课程' },
    { name: '《机器人学导论》', kind: '图书', provider: 'John J. Craig / 机械工业出版社', url: 'https://github.com', note: '机器人学经典入门教材' },
    { name: '《现代机器人学》', kind: '图书', provider: 'Kevin Lynch & Frank Park / 中文译本', url: 'https://hades.mech.northwestern.edu', note: 'Modern Robotics 官方配套教材' },
    { name: 'B 站 ROS 入门教程', kind: '免费课程', provider: '古月居 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '国内最知名的 ROS 视频教程' },
    { name: 'ETH Zurich Robotics 课程', kind: '免费课程', provider: 'ETH Zurich', url: 'https://ethz.ch', note: 'ETH 机器人方向课程入口' },
  ],
  // 感知与 SLAM
  'slam': [
    { name: '《视觉 SLAM 十四讲》', kind: '图书', provider: '高翔 等 / 电子工业出版社', url: 'https://github.com/gaoxiang12/slambook2', note: '国内最经典的 SLAM 教材' },
    { name: '《视觉 SLAM 十四讲》配套视频', kind: '免费课程', provider: '高翔 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '配套教材的免费视频课程' },
    { name: 'ORB-SLAM 系列论文与代码', kind: '文档与入口', provider: 'Raul Mur-Artal 等', url: 'https://github.com/raulmur/ORB_SLAM2', note: '特征法 SLAM 经典开源系统' },
    { name: 'OpenCV 官方课程', kind: '免费课程', provider: 'OpenCV University', url: 'https://opencv.org', note: 'OpenCV 官方课程与文档入口' },
    { name: '深蓝学院 SLAM 课程', kind: '付费课程', provider: '深蓝学院', url: 'https://www.shenlanxueyuan.com', note: '国内系统的 SLAM 工程课程' },
    { name: 'OpenCV 官方文档', kind: '文档与入口', provider: 'OpenCV', url: 'https://docs.opencv.org', note: '计算机视觉库官方文档' },
    { name: '《State Estimation for Robotics》', kind: '图书', provider: 'Timothy Barfoot / Cambridge', url: 'https://github.com', note: '机器人状态估计经典教材' },
  ],
  // 规划与控制
  'planning-control': [
    { name: 'Robotics: Motion Planning (Penn)', kind: '付费课程', provider: 'University of Pennsylvania / Coursera', url: 'https://www.coursera.org', note: 'Coursera 机器人运动规划课程' },
    { name: 'Modern Robotics 运动学控制部分', kind: '免费课程', provider: 'Northwestern University', url: 'https://hades.mech.northwestern.edu', note: '含规划与控制经典讲解' },
    { name: 'B 站控制原理课程', kind: '免费课程', provider: '高校公开课 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '自动控制原理公开视频课' },
    { name: '《自动控制原理》', kind: '图书', provider: '胡寿松 / 科学出版社', url: 'https://github.com', note: '国内控制理论经典教材' },
    { name: '《现代控制理论》', kind: '图书', provider: '刘豹 等 / 机械工业出版社', url: 'https://github.com', note: '状态空间方法经典教材' },
    { name: 'Drake 机器人规划控制工具箱', kind: '文档与入口', provider: 'MIT / Toyota Research', url: 'https://drake.mit.edu', note: '规划与控制研究官方文档' },
  ],
  // 具身大模型
  'vla': [
    { name: 'OpenVLA', kind: '文档与入口', provider: 'Stanford & Berkeley', url: 'https://openvla.github.io', note: '开源视觉-语言-动作模型项目' },
    { name: 'RT-2 / π0 论文资源', kind: '文档与入口', provider: 'Google DeepMind / Physical Intelligence', url: 'https://www.physicalintelligence.company', note: '具身大模型奠基工作入口' },
    { name: 'RoboSuite / ManiSkill 仿真平台', kind: '免费课程', provider: 'Stanford / ManiSkill 社区', url: 'https://robosuite.ai', note: '两大机器人操作仿真平台教程' },
    { name: 'LeRobot 官方教程', kind: '免费课程', provider: 'Hugging Face', url: 'https://github.com/huggingface/lerobot', note: 'HF 具身智能开源项目教程' },
    { name: '《Reinforcement Learning: An Introduction》', kind: '图书', provider: 'Sutton & Barto / MIT Press', url: 'https://github.com', note: '强化学习奠基教材（机器人学习基础）' },
    { name: '《Probabilistic Robotics》', kind: '图书', provider: 'Thrun 等 / MIT Press', url: 'https://github.com', note: '机器人学概率方法经典教材' },
    { name: '深蓝学院具身智能课程', kind: '付费课程', provider: '深蓝学院', url: 'https://www.shenlanxueyuan.com', note: '具身智能与大模型系统课程' },
  ],
  // GPU 与 CUDA
  'gpu-cuda': [
    { name: 'CUDA C Programming Guide', kind: '文档与入口', provider: 'NVIDIA', url: 'https://docs.nvidia.com', note: 'CUDA C 编程官方权威文档' },
    { name: 'Heterogeneous Parallel Programming', kind: '付费课程', provider: 'UIUC / Coursera', url: 'https://www.coursera.org', note: '异构并行编程经典课程' },
    { name: 'NVIDIA DLI 课程', kind: '付费课程', provider: 'NVIDIA Deep Learning Institute', url: 'https://www.nvidia.com/dli', note: '官方 CUDA 与加速计算课程' },
    { name: '《CUDA by Example》', kind: '图书', provider: 'Sanders & Kandrot / Addison-Wesley', url: 'https://github.com', note: 'CUDA 入门经典参考书' },
    { name: '《CUDA 并行程序设计》', kind: '图书', provider: '樊哲勇 / 清华大学出版社', url: 'https://github.com', note: '中文 CUDA 实践教材' },
    { name: 'B 站 CUDA 入门课程', kind: '免费课程', provider: '公开课程 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '免费 CUDA 编程视频教程' },
    { name: 'CUDA MODE 社区', kind: '免费课程', provider: 'CUDA MODE 社区', url: 'https://github.com', note: 'GPU 编程学习社区资源' },
  ],
  // 分布式训练
  'distributed-training': [
    { name: 'Hugging Face Accelerate 文档', kind: '文档与入口', provider: 'Hugging Face', url: 'https://huggingface.co/docs/accelerate', note: '简单易用的分布式训练库文档' },
    { name: 'Megatron-LM / DeepSpeed 训练框架', kind: '文档与入口', provider: 'NVIDIA / Microsoft', url: 'https://github.com/NVIDIA/Megatron-LM', note: '大模型分布式训练经典框架' },
    { name: '《大模型训练》相关资料', kind: '图书', provider: '大模型工程社区', url: 'https://github.com', note: '分布式训练经典论文与资料' },
    { name: 'B 站分布式训练公开课', kind: '免费课程', provider: '公开课程 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '分布式并行训练免费课程' },
    { name: 'NVIDIA DLI 大模型课程', kind: '付费课程', provider: 'NVIDIA Deep Learning Institute', url: 'https://www.nvidia.com/dli', note: '官方大模型训练与部署课程' },
    { name: '《大规模语言模型：从理论到实践》', kind: '图书', provider: '张奇 等 / 电子工业出版社', url: 'https://github.com', note: '中文大模型系统教材' },
    { name: 'PyTorch Distributed 公开课', kind: '免费课程', provider: 'PyTorch 官方', url: 'https://pytorch.org', note: '官方分布式训练教程资源' },
  ],
  // 推理优化
  'inference': [
    { name: 'vLLM 文档', kind: '文档与入口', provider: 'vLLM 社区', url: 'https://docs.vllm.ai', note: '高吞吐大模型推理引擎文档' },
    { name: 'TensorRT-LLM / FlashAttention', kind: '文档与入口', provider: 'NVIDIA / Dao-AILab', url: 'https://github.com/Dao-AILab/flash-attention', note: '两大推理优化经典项目入口' },
    { name: 'llama.cpp 部署实战课', kind: '免费课程', provider: '公开课程 / 哔哩哔哩', url: 'https://www.bilibili.com', note: 'llama.cpp 本地部署免费教程' },
    { name: 'FlashAttention 公开课', kind: '免费课程', provider: 'Tri Dao / 公开讲座', url: 'https://www.youtube.com', note: 'FlashAttention 原理讲解视频' },
    { name: '《大模型推理》优化综述', kind: '图书', provider: '推理优化研究社区', url: 'https://github.com', note: 'LLM 推理优化综述与资料' },
    { name: '《GPU Gems》系列', kind: '图书', provider: 'NVIDIA / Addison-Wesley', url: 'https://github.com', note: 'GPU 性能优化经典丛书' },
    { name: 'B 站 vLLM 部署与源码课', kind: '免费课程', provider: '公开课程 / 哔哩哔哩', url: 'https://www.bilibili.com', note: '推理引擎部署与源码解析课' },
    { name: '推理优化实战课程', kind: '付费课程', provider: '大模型工程培训 / 哔哩哔哩', url: 'https://www.bilibili.com', note: 'vLLM 等推理引擎实战课' },
  ],
};
