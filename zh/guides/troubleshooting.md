# 常见问题排查

## ADB 配对失败

**症状：** App 提示「配对失败」或「连接被拒绝」。

**解决方案：**
1. 确认开发者选项中**无线调试**已开启
2. 确认使用的是**配对端口**，不是连接端口——两者不同
3. 尝试关闭再重新开启无线调试
4. 重启 App 后重试

## App 显示「未连接 Backend」

**症状：** App 打开但没有 ADB 连接。

**解决方案：**
1. 检查无线调试是否仍然开启（部分厂商重启后自动关闭）
2. 通过设置向导重新配对
3. 如果之前通过 USB 连接，断开数据线后重新无线配对

## AI 不响应或操作错误

**症状：** AI 似乎卡住、重复相同操作、或忽略界面元素。

**解决方案：**
1. 检查 LLM 配置（设置 → LLM Provider）— 确认 Base URL 和 API Key 正确
2. 换个模型试试——部分模型的工具调用能力更强
3. 查看 [支持的模型](/zh/features/models) 获取推荐

## 截图为黑屏或空白

**症状：** AI 在运行但看到的截图是空的。

**解决方案：**
1. 标准模式通过 Mirror VD + ImageReader 截屏 — 如果虚拟显示器未运行，重启 App
2. 部分应用使用 FLAG_SECURE，标准模式无法截取
3. 系统 App 模式使用 SurfaceControl，可绕过 FLAG_SECURE

## 更多帮助

在 [GitHub](https://github.com/opencyvis/opencyvis-phone/issues) 提交 Issue，附带设备型号、Android 版本和日志。
