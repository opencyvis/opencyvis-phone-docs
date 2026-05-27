# 系统 App 模式

适合开发者和极客用户，需要刷入自定义 AOSP 系统镜像。

## 标准 vs 系统 App

| | 标准模式 | 系统 App 模式 |
|---|---|---|
| 安装方式 | APK 安装 | 刷入系统镜像 |
| 权限来源 | ADB 无线调试 | 平台签名 |
| 截屏方式 | Mirror VD + ImageReader | `SurfaceControl.screenshot()` |
| 输入方式 | AIDL 代理到 PrivilegedService | `InputManager` 反射 |
| VD 任务管理 | PrivilegedService 代理 | `ActivityTaskManager` 反射 |
| 截屏延迟 | ~50ms | ~5ms |

核心 AI 引擎、UI 界面、操作能力——完全一样。差异仅在底层获取权限的方式。

## 安装步骤

### 1. 构建 APK

```bash
git clone https://github.com/opencyvis/opencyvis-phone.git
cd opencyvis-phone/android
./gradlew assembleSystemRelease
```

APK 输出路径为 `android/app/build/outputs/apk/systemRelease/`。

### 2. 构建 AOSP 镜像

需要使用与 APK 相同的平台签名密钥构建自定义 AOSP 镜像。OpenCyvis 使用标准 AOSP 测试平台密钥。

详见 [AOSP 镜像构建指南](https://github.com/opencyvis/opencyvis-phone/blob/main/android/README-AOSP.md)。

### 3. 部署

将 APK 推送到设备的 `/system/priv-app/` 目录：

```bash
adb root
adb remount
adb push app-system-release.apk /system/priv-app/OpenCyvis/OpenCyvis.apk
adb reboot
```

重启后，OpenCyvis 检测到平台签名权限，自动使用 SystemBackend。

<Callout type="danger">
系统 App 模式需要解锁 Bootloader 并刷入自定义系统镜像，不支持锁 Bootloader 的零售手机。
</Callout>
