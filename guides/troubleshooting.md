# Troubleshooting

## ADB pairing fails

**Symptom:** The app says "Pairing failed" or "Connection refused."

**Solutions:**
1. Make sure **Wireless debugging** is enabled in Developer options
2. Make sure you're pairing with the **Pairing** port, not the connection port — they are different
3. Try disabling and re-enabling Wireless debugging
4. On ColorOS / OnePlus, MIUI and other aggressive ROMs, **allow background activity / ignore battery optimization** for OpenCyvis — the ROM can freeze the pairing service before pairing completes
5. Restart the app and try again

## I can't find where to enter the pairing code

**Symptom:** Settings shows the 6-digit code, but there's no obvious place to type it — the app seems to be in the background.

**Solution:** You enter the code into the OpenCyvis **notification**, not inside the app. **Pull down the notification shade**, find the OpenCyvis **"Enter pairing code"** notification, tap it, and type the 6-digit code. This is by design — entering the code in the notification means you never leave the Settings screen, so the pairing handshake doesn't time out.

On devices that support split-screen (Android 12L+), OpenCyvis will automatically open the pairing screen side-by-side with the Wireless debugging page, making it easy to see the code and type it without switching apps.

If you don't see the notification, pull the shade all the way down and scroll — some Chinese ROMs (MIUI, ColorOS, OriginOS) suppress notification banners or hide them below other notifications. On MIUI, you may also need to switch notification style to "Android style" in system settings.

## App says "No backend connected"

**Symptom:** The app opens but shows no ADB connection.

**Solutions:**
1. Check that Wireless debugging is still enabled (some OEMs disable it on reboot)
2. Re-pair using the setup wizard
3. If you previously connected via USB, disconnect the cable and re-pair wirelessly

## AI doesn't respond or gives wrong actions

**Symptom:** The AI seems stuck, repeats the same action, or ignores UI elements.

**Solutions:**
1. Check your LLM configuration (Settings → LLM Provider) — verify the base URL and API key
2. Try a different model — some models handle tool calling better than others
3. See [Supported Models](/features/models) for recommended models

## Screenshots are black or blank

**Symptom:** The AI operates but the screenshots it sees are empty.

**Solutions:**
1. Standard mode captures screenshots via Mirror VD + ImageReader — if the virtual display isn't running, restart the app
2. Some apps use FLAG_SECURE which blocks screenshot capture in standard mode
3. System App mode uses SurfaceControl which bypasses FLAG_SECURE

## More Help

Open an issue on [GitHub](https://github.com/opencyvis/opencyvis-phone/issues) with your device model, Android version, and log output.
