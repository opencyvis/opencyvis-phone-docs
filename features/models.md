# Supported Models

OpenCyvis is model-agnostic. These are tested and recommended.

## Cloud Models

| Model | Latency per step | Pass Rate | Notes |
|:---|:---:|:---:|:---|
| **Qwen 3.5 Plus** | 4-6s | 4/4 | Stable, recommended |
| **Claude Opus 4** | 4-8s | 4/4 | Highest reasoning quality |
| **MiMo v2.5** | 2.3-4.5s | 4/4 | Fastest |
| **GPT-4o** | 3-6s | 3/4 | Occasionally ignores tool_choice |

## Local Models (via Ollama)

| Model | Size | Speed | Pass Rate |
|:---|:---:|:---:|:---:|
| **Gemma 4 26B-A4B** Q4 | 17 GB | 63 tok/s | **4/4** |
| **Gemma 4 E2B** Q4 | 1.8 GB | 41 tok/s | **4/4** |
| **Qwen 3.5 35B-A3B** Q4 | 22 GB | 47 tok/s | 3/4 |
| **Gemma 4 E4B** Q4 | 3 GB | 61 tok/s | 3/4 |

> **Recommended:** Gemma 4 26B-A4B — best balance of speed, quality, and VRAM.
> **Minimal:** Gemma 4 E2B — just 1.8 GB, still passes all 4 tests.
