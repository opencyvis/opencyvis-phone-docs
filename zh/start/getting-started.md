# 快速开始

3 步上手 OpenCyvis。

## 1. 下载安装

从 [Releases](https://github.com/opencyvis/opencyvis-phone/releases) 页面下载 APK。

| APK | 适用 | 包名 |
|:---|:---|:---|
| `opencyvis-standard-release.apk` | 大多数用户 — 安装到任何 Android 11+ 手机 | `ai.opencyvis.standard` |
| `opencyvis-system-release.apk` | 开发者 — 刷入 AOSP 作为系统应用 | `ai.opencyvis` |

大多数用户选择 **标准版**，像普通 App 一样安装即可。

## 2. 完成 ADB 配对

打开 App，跟随设置向导：

1. App 会引导你进入 **开发者选项 → 无线调试**
2. 点击 **使用配对码配对设备**——系统弹出 6 位配对码
3. **下拉通知栏**，在 OpenCyvis 通知里点击 **点此输入配对码**，输入这 6 位配对码
4. 配对成功后，App 自动通过 ADB 连接

不需要 Root，不需要电脑，不需要刷机。各厂商系统入口路径见 [标准模式](/zh/start/standard-mode)。

## 3. 配置 LLM

进入 **设置 → LLM Provider**，填写：

- **Provider 类型**（OpenAI 兼容、Anthropic、Ollama）
- **Base URL**（API 地址）
- **API Key**（云端需要）
- **模型名称**

详细配置指南见 [LLM 配置](/zh/start/llm-config)。

---

完成！发送你的第一个任务，看看 AI 如何操作你的手机。
