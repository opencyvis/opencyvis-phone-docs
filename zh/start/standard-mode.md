# 标准模式

标准模式是推荐安装方式。不需要 Root，不需要电脑，不需要刷机。

## 工作原理

OpenCyvis 通过 ADB 无线调试获取与系统应用相同等级的权限。App 通过 TCP 连接到本机的 `adbd`——数据不离开你的手机。

## 安装步骤

### 第 1 步：开启开发者选项

1. 打开 **设置 → 关于手机**
2. 连续点击 **版本号** 7 次
3. 提示「您已进入开发者模式」

### 第 2 步：开启无线调试

1. 进入 **设置 → 系统 → 开发者选项 → 无线调试**
2. 打开开关
3. 确认权限弹窗

<Callout type="warning">
部分厂商会隐藏或重命名此选项，详见下方厂商专用路径。
</Callout>

### 第 3 步：与 OpenCyvis 配对

1. 打开 OpenCyvis，设置向导会自动启动并把你带到 **无线调试** 页面
2. 在「无线调试」页面点击 **使用配对码配对设备**
3. 系统弹窗显示一个 6 位配对码
4. **下拉通知栏**，在 OpenCyvis 通知里点击 **点此输入配对码**，输入这 6 位配对码
5. 配对成功后，App 自动连接

<Callout type="tip">
配对码是输入到 OpenCyvis 的**通知**里，而不是切回 App 输入——这样即使 App 在后台也能完成配对。如果没看到通知，下拉一次通知栏，找到 OpenCyvis 的「点此输入配对码」通知即可。
</Callout>

### 第 4 步：授予权限

App 会请求以下权限：
- **无障碍服务** — 读取 UI 元素
- **通知** — 任务状态提醒
- **悬浮窗** — 浮动控制面板

## 各厂商系统路径

不同厂商的无线调试入口位置不同：

<details>
<summary>小米 / MIUI / HyperOS</summary>

**设置 → 更多设置 → 开发者选项 → 无线调试**

如果看不到，请确认开发者选项中已关闭「MIUI 优化」。
</details>

<details>
<summary>OPPO / 一加 / ColorOS</summary>

**设置 → 关于手机 → 版本信息 → 版本号**（连点 7 次）

然后：**设置 → 关于手机 → 开发者选项 → 无线调试**

<Callout type="warning">
ColorOS 会激进地冻结后台应用。配对时如果系统提示，请为 OpenCyvis **允许后台运行 / 忽略电池优化**——否则配对服务可能在配对完成前被冻结。（OpenCyvis 已通过"在通知里完成配对"规避了这个问题，但授予豁免会更稳定。）
</Callout>
</details>

<details>
<summary>vivo / OriginOS</summary>

**设置 → 系统管理 → 开发者选项 → 无线调试**
</details>

<details>
<summary>华为 / HarmonyOS</summary>

HarmonyOS 并非所有设备都支持 ADB 无线调试。如不可用，需先通过 USB 配对：

```bash
adb tcpip 5555
adb connect <手机IP>:5555
```

然后打开 OpenCyvis，它将检测到现有的 ADB 连接。
</details>

## 常见问题

详见 [常见问题排查](/zh/guides/troubleshooting)。
