# IM 远程控制

通过即时通讯工具给手机发任务。目前支持 **Telegram** 和 **飞书**。

典型场景：给父母手机装上 OpenCyvis，妈妈说「字太小了看不清」——你在 IM 里发条「把字体调到最大」，AI 操作完截图发回来确认。

## 配置步骤

### Telegram

1. 通过 `@BotFather` 创建 Bot → 获得 **Bot Token**
2. 在 OpenCyvis 中：**设置 → Remote IM Control → Telegram Bot Token**
3. 点击 **Generate Code** → 获得 6 位配对码
4. 在 Telegram 中向 Bot 发送 `/pair 123456`
5. 完成。向 Bot 发消息即下发任务。

### 飞书

1. 在开发者后台创建飞书机器人 → 获得 **App ID** 和 **App Secret**
2. 在 OpenCyvis 中：**设置 → Remote IM Control → Feishu App ID / Secret**
3. 点击 **Generate Code** → 获得 6 位配对码
4. 在飞书中向 Bot 发送 `/pair 123456`
5. 完成。

## 命令

| 命令 | 说明 |
|------|------|
| *(任意消息)* | 作为任务发送给 AI |
| `/status` | 查看当前状态 |
| `/stop` | 终止当前任务 |
| `/pair <配对码>` | 配对此聊天 |
