# Standard Mode

Standard mode is the recommended install method. No root, no computer, no custom ROM.

## How It Works

OpenCyvis uses ADB wireless debugging to obtain the same privileges as a system app. The app connects to `adbd` on your own device via TCP — nothing leaves your phone.

## Setup Walkthrough

### Step 1: Enable Developer Options

1. Open **Settings → About phone**
2. Tap **Build number** 7 times
3. You'll see "You are now a developer"

### Step 2: Enable Wireless Debugging

1. Go to **Settings → System → Developer options → Wireless debugging**
2. Turn it **On**
3. Accept the permission dialog

<Callout type="warning">
Some manufacturers hide or rename this option. See OEM-specific paths below.
</Callout>

### Step 3: Pair with OpenCyvis

1. Open OpenCyvis — the setup wizard starts automatically and takes you to **Wireless debugging**
2. On the Wireless debugging screen, tap **Pair device with pairing code**
3. A system dialog shows a 6-digit pairing code
4. **Pull down the notification shade**, tap **Enter pairing code** on the OpenCyvis notification, and type the 6-digit code
5. Once paired, the app connects automatically

<Callout type="tip">
You enter the code into the OpenCyvis **notification**, not back inside the app. This way you never leave the Settings screen, so the pairing handshake doesn't time out. If you don't see the notification banner, pull down the shade and look for the OpenCyvis "Enter pairing code" notification.
</Callout>

<Callout type="info">
**Split-screen guide** — On devices that support split-screen (Android 12L+), OpenCyvis will automatically open the pairing screen side-by-side with the Wireless debugging page, so you can see the code and type it without switching apps.

**Notification on Chinese ROMs** — Some Chinese OEMs (MIUI, ColorOS, OriginOS) suppress notification banners by default or hide them below other notifications. If the notification doesn't appear as a banner, **pull the shade all the way down** and scroll to find the OpenCyvis notification. On MIUI, you may also need to switch notification style to "Android style" in system settings.
</Callout>

### Step 4: Grant Permissions

The app will prompt you to grant necessary permissions:
- **Accessibility Service** — for reading UI elements
- **Notifications** — for task status
- **Overlay** — for the floating control panel

## OEM-Specific Paths

Different manufacturers place wireless debugging in different locations:

<details>
<summary>Xiaomi / MIUI / HyperOS</summary>

**Settings → Additional settings → Developer options → Wireless debugging**

If you don't see it, make sure MIUI Optimization is disabled in Developer options.

<Callout type="warning">
MIUI uses a custom notification style by default that doesn't support inline reply. Before pairing, go to **Settings → Apps → OpenCyvis → Notifications** and switch the notification style to **Android style** — otherwise the "Enter pairing code" input won't appear in the notification.
</Callout>
</details>

<details>
<summary>OPPO / OnePlus / ColorOS</summary>

**Settings → About device → Version → Build number** (tap 7x)

Then: **Settings → About device → Developer options → Wireless debugging**

<Callout type="warning">
ColorOS aggressively freezes background apps. When prompted during pairing, **allow background activity / ignore battery optimization** for OpenCyvis — otherwise the pairing service can be suspended before pairing completes. (OpenCyvis already works around this by letting you finish pairing from the notification, but granting the exemption makes it more reliable.)
</Callout>
</details>

<details>
<summary>vivo / OriginOS</summary>

**Settings → System management → Developer options → Wireless debugging**
</details>

<details>
<summary>Huawei / HarmonyOS</summary>

HarmonyOS does not support ADB wireless debugging on all devices. If unavailable, you'll need to pair via USB first. Connect to a computer and run:

```bash
adb tcpip 5555
adb connect <phone-ip>:5555
```

Then open OpenCyvis — it will detect the existing ADB connection.
</details>

## Troubleshooting

See [Troubleshooting](/guides/troubleshooting) for common issues.
