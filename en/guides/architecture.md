# Architecture

Both install modes share all upper-layer code. The only difference is in the privilege layer, isolated behind a `PrivilegeBackend` interface.

## Dual Backend

| | SystemBackend | RemoteBackend |
|---|---|---|
| Privilege source | Platform signing (uid system) | ADB shell (uid 2000) |
| Input injection | InputManager reflection | AIDL proxy to PrivilegedService |
| Screenshot | SurfaceControl.screenshot() | ImageReader from VD Surface |
| VD task management | ActivityTaskManager reflection | PrivilegedService proxy |

The backend is selected automatically at runtime based on the detected privilege level.

## Agent Loop

```
┌─────────────────────────────────────────────┐
│                                             │
│   Observe (screenshot + a11y tree)          │
│        ↓                                    │
│   Think (LLM)                               │
│        ↓                                    │
│   Act (tap / type / swipe / launch / ...)   │
│        ↓                                    │
│   Repeat until done or failed               │
│                                             │
└─────────────────────────────────────────────┘
```

The loop runs until the LLM returns a `finish` action (task complete) or `fail` action (unable to complete).
