# 架构

两种安装模式共享全部上层代码，差异仅在权限层。通过 `PrivilegeBackend` 接口隔离。

## 双 Backend

| | SystemBackend | RemoteBackend |
|---|---|---|
| 权限来源 | 平台签名（uid system） | ADB shell（uid 2000） |
| 输入注入 | InputManager 反射 | AIDL 代理到 PrivilegedService |
| 截屏 | SurfaceControl.screenshot() | ImageReader 从 VD Surface 读取 |
| VD 任务管理 | ActivityTaskManager 反射 | PrivilegedService 代理 |

运行时根据检测到的权限级别自动选择 Backend。

## Agent 循环

```
┌──────────────────────────────────────────┐
│                                          │
│   观察（截图 + 无障碍树）                 │
│        ↓                                 │
│   思考（LLM）                             │
│        ↓                                 │
│   执行（点击 / 输入 / 滑动 / 打开 / …）  │
│        ↓                                 │
│   重复直到完成或失败                      │
│                                          │
└──────────────────────────────────────────┘
```

循环持续运行，直到 LLM 返回 `finish`（任务完成）或 `fail`（无法完成）。
