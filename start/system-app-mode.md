# System App Mode

For developers and power users who want the highest privilege level. Requires flashing a custom AOSP system image.

## Why System App Mode?

| | Standard Mode | System App Mode |
|---|---|---|
| Install method | APK install | Flash system image |
| Privilege source | ADB wireless | Platform signing |
| Screenshot method | Mirror VD + ImageReader | `SurfaceControl.screenshot()` |
| Input method | AIDL proxy to PrivilegedService | `InputManager` reflection |
| VD task management | PrivilegedService proxy | `ActivityTaskManager` reflection |
| Performance | ~50ms screenshot latency | ~5ms screenshot latency |

Same AI engine, same UI, same capabilities. The difference is only in how the app obtains system permissions.

## Setup

### 1. Build the APK

```bash
git clone https://github.com/opencyvis/opencyvis-phone.git
cd opencyvis-phone/android
./gradlew assembleSystemRelease
```

The output APK is at `android/app/build/outputs/apk/systemRelease/`.

### 2. Build the AOSP Image

You need a custom AOSP image built with the same platform signing key as the APK. OpenCyvis uses the standard AOSP test platform key.

See the [Emulator Setup](https://github.com/opencyvis/opencyvis-phone/blob/main/android/README-AOSP.md) guide for step-by-step instructions on building an AOSP image with Docker.

### 3. Deploy

Push the APK to `/system/priv-app/` on the device:

```bash
adb root
adb remount
adb push app-system-release.apk /system/priv-app/OpenCyvis/OpenCyvis.apk
adb reboot
```

After reboot, OpenCyvis will detect it has platform-level privileges and automatically use `SystemBackend`.

<Callout type="danger">
System App Mode requires an unlocked bootloader and a custom system image. It does not work on locked retail phones.
</Callout>
