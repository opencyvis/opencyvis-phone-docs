# LLM Configuration

OpenCyvis is model-agnostic. Bring your own AI account, connect a private service, or run a local model.

## In-App Setup

Go to **Settings → LLM Provider** and configure:

| Field | Description |
|-------|-------------|
| Provider type | `openai` (OpenAI-compatible), `anthropic`, or `ollama` |
| Base URL | API endpoint (e.g. `https://api.openai.com/v1`) |
| API Key | Your key (not needed for Ollama) |
| Model | Model name (e.g. `gpt-4o`, `claude-opus-4-20250514`) |

## Deeplink Configuration

You can also configure via ADB deeplink:

```bash
# Local Ollama (fully private)
adb shell am start -a android.intent.action.VIEW \
  -d "opencyvis://config?provider=ollama&base_url=http://localhost:11434&model=gemma4:26b"

# Cloud API (OpenAI-compatible)
adb shell am start -a android.intent.action.VIEW \
  -d "opencyvis://config?provider=openai&base_url=https://api.example.com/v1&api_key=YOUR_KEY&model=qwen-vl-max"
```

## Share Config via QR Code

Need to set up OpenCyvis on another phone? Export your current LLM configuration as a QR code, then scan it on the target device to import everything — provider type, base URL, API key, and model name — in one step.

Go to **Settings → LLM Provider → Share** to generate a QR code. On the receiving device, tap **Scan QR Code** in the setup wizard.

<Callout type="warning">
QR codes encode your API key. Only share them with people you trust, and over private channels.
</Callout>

## Provider Profiles

Save multiple configurations (e.g. "Work Qwen", "Home Gemma", "Claude") and switch with one tap. See [Provider Profiles](/features/provider-profiles).

## Cloud vs Local

| | Cloud Models | Local Models (Ollama) |
|---|---|---|
| **Privacy** | Data sent to API | Nothing leaves device |
| **Speed** | 3-8s per step | 1.5-3s per step (with GPU) |
| **Quality** | Highest reasoning | Good, improving fast |
| **Cost** | Pay per token | Free (hardware cost) |
| **Offline** | ❌ | ✅ |

<Callout type="tip">
**Recommended cloud:** Qwen 3.5 Plus — stable, fast, affordable.  
**Recommended local:** Gemma 4 26B-A4B — best balance of speed, quality, and VRAM (17 GB).
</Callout>

## Supported Models

See the full benchmark table at [Supported Models](/features/models).
