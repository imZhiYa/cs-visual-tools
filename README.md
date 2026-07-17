<!--
此文件内容对应仓库: cs-visual-tools
使用时复制到: https://github.com/imZhiYa/cs-visual-tools 仓库根目录，创建为 README.md
-->

# 🧪 CS 可视化工具合集 · Interactive CS Visual Tools

<p align="center">
  <strong>计算机科学核心知识的交互式可视化学习工具</strong>
  <br>
  Interactive visual learning tools for core Computer Science concepts.
  <br>
  <em>零依赖 · 单文件 · 打开即用 · 响应式 · 开源 MIT</em>
</p>

<p align="center">
  <a href="https://imzhiya.github.io/cs-visual-tools/">
    <img src="https://img.shields.io/badge/🌐_在线体验-Live_Demo-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT License">
  </a>
</p>

---

## 🎯 项目简介 · About

本项目是一组**计算机科学核心知识**的交互式可视化工具集。每个工具都是**零依赖单文件 HTML**，克隆到本地或部署到静态服务器即可使用，适合教学、自学和面试准备。

> **[🚀 立即在线体验 →](https://imzhiya.github.io/cs-visual-tools/)**

---

## 🧰 已上线工具 · Available Tools

### 🌳 树结构实验室 · Tree Lab
8 种树形数据结构的交互式可视化：**BST / AVL / 红黑树 / 最大堆 / 最小堆 / Trie 字典树 / B 树 / B+ 树**。支持逐步动画演示插入、删除、查找和 4 种遍历。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/tree-lab.html)

### ⚡ 二进制位运算控制台 · Bit Ops Lab
二进制底层思维与位运算全景控制台。包含：多进制算盘、补码齿轮、六大位操作 ALU 逻辑控制台、系统级动态特权位图实战、HashMap 扰动与扩容演进。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/bit-ops.html)

### 🧠 虚拟内存实验室 · Virtual Memory Lab
操作系统虚拟内存管理机制交互式可视化。页表映射、地址翻译、TLB 缓存、页面置换算法（LRU/FIFO/Clock）、缺页中断处理流程逐步动画演示。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/virtual-memory-lab.html)

### ♻️ JVM 运行时机制实验室 · Runtime Lab
对齐《JVM 运行时机制深度解析》六环因果链：厂区五区与类加载、对象布局/TLAB、GC Roots 与三色/CMS/G1/ZGC、JIT/Safepoint、锁升级与可见性、容器 cgroup 与选型诊断。支持截图与分享链接。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/jvm-runtime-lab.html)

---

## 🚧 即将上线 · Coming Soon

| 工具 | 状态 | 说明 |
|------|------|------|
| 📊 Sort Arena | 🔄 开发中 | 十大排序算法对比动画 |
| 🗺️ HashMap Lab | 🔄 开发中 | JDK HashMap 底层逐步可视化 |

---

## ✨ 特性 · Features

| 特性 | 说明 |
|------|------|
| 📦 **零依赖** | 纯 HTML/CSS/JavaScript，无需安装任何库或框架 |
| ⚡ **秒开** | 单文件加载，无需网络资源（CDN 字体回退优雅降级） |
| ♿ **无障碍** | 支持键盘导航、ARIA 标签、屏幕阅读器友好 |
| 📱 **响应式** | 桌面端和移动端均可正常使用 |
| 🔒 **开源 MIT** | 完全开源，可自由使用、修改、分发 |

---

## 🚀 快速开始 · Quick Start

```bash
# 方式一：克隆仓库
git clone https://github.com/imZhiYa/cs-visual-tools.git
cd cs-visual-tools

# 直接用浏览器打开任意 .html 文件即可
open tree-lab.html    # macOS
start tree-lab.html   # Windows

# 方式二：在线体验
# https://imzhiya.github.io/cs-visual-tools/
```

也可通过 Python 等工具启动本地服务器：

```bash
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

---

## 🤝 参与贡献 · Contributing

欢迎提交 Issue 和 PR！请确保：

1. 新增工具保持**零依赖单文件**原则
2. HTML 文件添加中文和英文界面支持
3. 提交前测试在 Chrome/Firefox/Safari 上的兼容性

---

## 📄 许可证 · License

本项目基于 [MIT License](./LICENSE) 开源。

---

<p align="center">
  <sub>用 ❤️ 和 🤖 构建 · Built with love and AI</sub>
  <br>
  <a href="https://github.com/imZhiYa">@imZhiYa</a>
</p>
