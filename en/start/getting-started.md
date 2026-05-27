# Quick Start

Get OpenCyvis running in 3 steps.

## 1. Download & Install

Download the APK from the [Releases](https://github.com/opencyvis/opencyvis-phone/releases) page.

| APK | For | Package ID |
|:---|:---|:---|
| `opencyvis-standard-release.apk` | Most users — any Android 11+ phone | `ai.opencyvis.standard` |
| `opencyvis-system-release.apk` | Developers — flash into AOSP as system app | `ai.opencyvis` |

For most users, choose **Standard**. Install like any Android app.

## 2. Complete ADB Pairing

Open the app and follow the setup wizard:

1. The app guides you to **Developer Options → Wireless Debugging**
2. Tap **Pair device**, enter the pairing code shown in the app
3. Once paired, the app automatically connects via ADB

No root, no computer, no custom ROM required. For OEM-specific paths (MIUI, ColorOS, OriginOS), see [Standard Mode](/start/standard-mode).

## 3. Configure Your LLM

Go to **Settings → LLM Provider** and enter:

- **Provider type** (OpenAI-compatible, Anthropic, or Ollama)
- **Base URL** (your API endpoint)
- **API Key** (for cloud providers)
- **Model name**

See [LLM Configuration](/start/llm-config) for detailed setup guides.

---

That's it. Send your first task and watch the AI operate your phone.
