---
layout: home

hero:
  name: OpenCyvis
  text: 你的开源 AI 手机
  tagline: 商业 AI 手机是黑箱。这个不是。
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/start/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/opencyvis/opencyvis-phone
---

<script setup>
import CardGrid from '../.vitepress/theme/components/CardGrid.vue'
import Card from '../.vitepress/theme/components/Card.vue'
</script>

## 为什么选择 OpenCyvis

当一家公司推出「AI 手机」，他们获得了你屏幕、应用、消息的完整访问权——而你看不到运行的是什么模型，无法验证什么数据离开了设备，也无法选择替代方案。

**你至少应该有选择的权利。**

OpenCyvis 是开源替代方案：你能看到每一行代码，你来选 AI 模型，你决定数据去向。用本地模型时，任何数据都不会离开你的设备。

<CardGrid>
  <Card icon="🚀" title="快速开始" desc="3 步安装。不需要 Root，不需要电脑，不需要刷机。" link="/zh/start/getting-started" />
  <Card icon="🖥️" title="虚拟显示器" desc="AI 在后台工作，手机照常用。" link="/zh/features/virtual-display" />
  <Card icon="📱" title="IM 远程控制" desc="通过 Telegram 或飞书发任务，截图确认结果。" link="/zh/features/im-remote" />
  <Card icon="⏰" title="例行任务" desc="保存常用操作，定时执行或一键触发。" link="/zh/features/routines" />
  <Card icon="🧠" title="模型自由" desc="任意 LLM —— Qwen、Claude、GPT、Gemma、本地 Ollama。" link="/zh/features/models" />
  <Card icon="🔒" title="隐私优先" desc="无遥测、无分析、不偷偷联网。完全开源。" link="/zh/guides/privacy" />
</CardGrid>

## 横向对比

| | 商业 AI 手机 | 云手机 | 手机控制脚本 | **OpenCyvis** |
|---|:---:|:---:|:---:|:---:|
| **开源** | ❌ | ❌ | ⚠️ | ✅ |
| **自选 AI 模型** | ❌ | ❌ | ⚠️ | ✅ |
| **数据留在设备** | ❌ | ❌ | ⚠️ | ✅ |
| **AI 工作时手机照常用** | ⚠️ | ✅ | ❌ | ✅ |
| **支持所有应用** | ⚠️ | ⚠️ | ⚠️ | ✅ |
| **无需电脑设置** | ⚠️ | ⚠️ | ❌ | ✅ |
| **适用于日常手机** | ✅ | ⚠️ | ❌ | ✅ |
