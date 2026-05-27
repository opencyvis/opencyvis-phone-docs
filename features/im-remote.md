# IM Remote Control

Send tasks to your phone via instant messenger. Currently supports **Telegram** and **Feishu**.

Use case: Install OpenCyvis on a parent's phone. Mom says "the text is too small" — you send "set font size to largest" in IM. The AI does it and sends back a confirmation screenshot. No need for both parties to watch the screen simultaneously.

## Setup

### Telegram

1. Create a bot via `@BotFather` → get a **Bot Token**
2. In OpenCyvis: **Settings → Remote IM Control → Telegram Bot Token**
3. Tap **Generate Code** → get a 6-digit pairing code
4. In Telegram, send `/pair 123456` to your bot
5. Done. Send any message to the bot as a task.

### Feishu

1. Create a Feishu bot in the developer console → get **App ID** and **App Secret**
2. In OpenCyvis: **Settings → Remote IM Control → Feishu App ID / Secret**
3. Tap **Generate Code** → get a 6-digit pairing code
4. In Feishu, send `/pair 123456` to your bot
5. Done.

## Commands

| Command | Description |
|---------|-------------|
| *(any message)* | Send as a task to the AI |
| `/status` | Check current agent status |
| `/stop` | Stop the current task |
| `/pair <code>` | Pair this chat with the app |
