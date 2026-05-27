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

1. Open OpenCyvis, the setup wizard will start automatically
2. The app shows you a pairing code
3. On your phone, tap **Pair device** in the Wireless Debugging screen
4. Enter the pairing code from the app
5. Once paired, the app connects automatically

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
</details>

<details>
<summary>OPPO / ColorOS</summary>

**Settings → About device → Version → Build number** (tap 7x)

Then: **Settings → About device → Developer options → Wireless debugging**
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
