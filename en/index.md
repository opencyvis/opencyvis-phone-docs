---
layout: home

hero:
  name: OpenCyvis
  text: The open-source AI phone
  tagline: Commercial AI phones are black boxes. This one isn't.
  actions:
    - theme: brand
      text: Get Started
      link: /start/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/opencyvis/opencyvis-phone
---

<script setup>
import CardGrid from '../.vitepress/theme/components/CardGrid.vue'
import Card from '../.vitepress/theme/components/Card.vue'
</script>

## Why OpenCyvis

When a company ships an "AI phone," they get full access to your screen, your apps, your messages — and you can't see what model is running, can't verify what data leaves your device, can't choose an alternative.

**You should at least have the choice.**

OpenCyvis is the open-source alternative: you see every line of code, you pick the AI model, you decide where your data goes. With a local model, nothing ever leaves your device.

<CardGrid>
  <Card icon="🚀" title="Quick Start" desc="Install in 3 steps. No root, no computer, no custom ROM." link="/start/getting-started" />
  <Card icon="🖥️" title="Virtual Display" desc="AI works in the background. Your phone stays usable." link="/features/virtual-display" />
  <Card icon="📱" title="IM Remote Control" desc="Send tasks via Telegram or Feishu. Get screenshots back." link="/features/im-remote" />
  <Card icon="⏰" title="Routines" desc="Save recurring tasks. Run on schedule or with one tap." link="/features/routines" />
  <Card icon="🧠" title="Model Freedom" desc="Any LLM — Qwen, Claude, GPT, Gemma, local via Ollama." link="/features/models" />
  <Card icon="🔒" title="Privacy First" desc="No telemetry, no analytics, no phone-home. Open source." link="/guides/privacy" />
</CardGrid>

## How It Compares

| | Commercial AI Phones | Cloud Phones | Control Scripts | **OpenCyvis** |
|---|:---:|:---:|:---:|:---:|
| **Open source** | ❌ | ❌ | ⚠️ | ✅ |
| **Choose your AI model** | ❌ | ❌ | ⚠️ | ✅ |
| **Data stays on device** | ❌ | ❌ | ⚠️ | ✅ |
| **Phone usable while AI works** | ⚠️ | ✅ | ❌ | ✅ |
| **Works with any app** | ⚠️ | ⚠️ | ⚠️ | ✅ |
| **No computer setup** | ⚠️ | ⚠️ | ❌ | ✅ |
| **Works on everyday phones** | ✅ | ⚠️ | ❌ | ✅ |
