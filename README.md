# 🧪 CS 可视化工具合集 · Interactive CS Visual Tools

**计算机科学核心知识的交互式可视化学习工具**

Interactive visual learning tools for core Computer Science concepts.

_零依赖 · 单文件 · 打开即用 · 响应式 · 开源 MIT_

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90_%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C-Live_Demo-2ea44f?style=for-the-badge)](https://imzhiya.github.io/cs-visual-tools/)[![MIT License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](https://raw.githubusercontent.com/imZhiYa/cs-visual-tools/main/LICENSE)

---

## 🎯 项目简介 · About

本项目是一组**计算机科学核心知识**的交互式可视化工具集。每个工具都是**零依赖单文件 HTML**，克隆到本地或部署到静态服务器即可使用，适合教学、自学和面试准备。

工具统一采用"**先预测 · 后操作 · 看结果 · 对原理**"的学习路径，把抽象机制转换为可逐步操作、可观察状态变化的实验。

> **[🚀 立即在线体验 →](https://imzhiya.github.io/cs-visual-tools/)**

---

## 🧰 已上线工具 · Available Tools

### 🌳 树结构实验室 · Tree Lab

8 种树形数据结构的交互式可视化：**BST / AVL / 红黑树 / 最大堆 / 最小堆 / Trie 字典树 / B 树 / B+ 树**。支持逐步动画演示插入、删除、查找和 4 种遍历。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/tree-lab.html)

### ⚡ 二进制位运算控制台 · Bit Ops Lab

二进制底层思维与位运算全景控制台。包含：多进制算盘、补码齿轮、六大位操作 ALU 逻辑控制台、系统级动态特权位图实战、HashMap 扰动与扩容演进。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/bit-ops.html)

### 🔐 AQS 核心机制实验室 · AQS Lab

基于《AQS 核心机制深度解析》的可动手验证同步协议实验室。沿着线程 B 的等待主线，逐步演示：

- **L1–L3 独占获取**：`state` 账本、dummy head、tail CAS、`prev / next` 双链、park / unpark 与重新获取
- **L4 Condition**：ConditionQueue 与 SyncQueue 两本登记册、`await → signal → reacquire`、重入状态恢复与 `while` 复检
- **L5 共享模式**：Semaphore permits、`tryAcquireShared` 的负 / 零 / 正返回值、共享传播与避免惊群
- **L5 取消与超时**：CANCELLED、超时、中断、后继绕过、活性恢复与清理逻辑

工具用于理解 AQS 的**等待协议和状态不变量**；具体 JDK 版本的私有 Node/status 实现仍应结合对应版本源码阅读。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/aqs-lab.html)

### 🧠 虚拟内存实验室 · Virtual Memory Lab

操作系统虚拟内存管理机制交互式可视化。页表映射、地址翻译、TLB 缓存、页面置换算法（LRU/FIFO/Clock）、缺页中断处理流程逐步动画演示。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/virtual-memory-lab.html)

### ♻️ JVM 运行时机制实验室 · Runtime Lab

对齐《JVM 运行时机制深度解析》六环因果链：厂区五区与类加载、对象布局/TLAB、GC Roots 与三色/CMS/G1/ZGC、JIT/Safepoint、锁升级与可见性、容器 cgroup 与选型诊断。支持截图与分享链接。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/jvm-runtime-lab.html)

### 🗺️ HashMap 底层机制实验室 · HashMap Lab

对齐《Java Collection 框架深度解析》Level 3-4：哈希寻址、put/get 逐步动画、链表→红黑树树化过程、扩容 2 倍迁移、负载因子与阈值可视化。支持逐步操作观察桶结构变化。

[▶ 打开工具](https://imzhiya.github.io/cs-visual-tools/hashmap-lab.html)

---

## 🚧 即将上线 · Coming Soon

| 工具 | 状态 | 说明 |
|------|------|------|
| 📊 Sort Arena | 🔄 开发中 | 十大排序算法对比动画 |

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
open tree-lab.html          # macOS
start tree-lab.html         # Windows

# 或打开 HashMap 实验室
open hashmap-lab.html       # macOS
start hashmap-lab.html      # Windows

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

用 ❤️ 和 🤖 构建 · Built with love and AI

[@imZhiYa](https://github.com/imZhiYa)
