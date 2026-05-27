# LLM 配置

OpenCyvis 不绑定模型。用户自行配置 LLM 后端。

## App 内设置

进入 **设置 → LLM Provider**，配置：

| 字段 | 说明 |
|------|------|
| Provider 类型 | `openai`（OpenAI 兼容）、`anthropic`、`ollama` |
| Base URL | API 地址（如 `https://api.openai.com/v1`） |
| API Key | 密钥（Ollama 不需要） |
| Model | 模型名称（如 `gpt-4o`、`claude-opus-4-20250514`） |

## 通过 Deeplink 配置

也可通过 ADB deeplink 配置：

```bash
# 本地 Ollama（完全私密）
adb shell am start -a android.intent.action.VIEW \
  -d "opencyvis://config?provider=ollama&base_url=http://localhost:11434&model=gemma4:26b"

# 云端 API（OpenAI 兼容）
adb shell am start -a android.intent.action.VIEW \
  -d "opencyvis://config?provider=openai&base_url=https://api.example.com/v1&api_key=YOUR_KEY&model=qwen-vl-max"
```

## 扫码分享配置

需要在另一台手机上配置 OpenCyvis？将当前 LLM 配置导出为二维码，目标设备扫码即可一键导入——Provider 类型、Base URL、API Key、模型名全部带入。

进入 **设置 → LLM Provider → 分享** 生成二维码。接收端在设置向导中点击 **扫码导入**。

<Callout type="warning">
二维码中包含 API Key，请仅私下分享给你信任的人。
</Callout>

## Provider 配置方案

支持保存多套配置（如"公司 Qwen"、"家里 Gemma"、"Claude"），一键切换。详见 [Provider 配置方案](/zh/features/provider-profiles)。

## 云端 vs 本地

| | 云端模型 | 本地模型（Ollama） |
|---|---|---|
| **隐私** | 数据发送到 API | 数据不出设备 |
| **速度** | 每步 3-8 秒 | 每步 1.5-3 秒（有 GPU） |
| **质量** | 推理能力最强 | 良好，快速进步 |
| **费用** | 按 token 收费 | 免费（硬件成本） |
| **离线** | ❌ | ✅ |

<Callout type="tip">
**推荐云端：** Qwen 3.5 Plus — 稳定、快速、价格合理。  
**推荐本地：** Gemma 4 26B-A4B — 速度、质量、显存的最佳平衡（17 GB）。
</Callout>

## 支持的模型

完整评测数据见 [支持的模型](/zh/features/models)。
