# 本地音频放置与命名规范

本项目通过“本地 mp3 音频”实现泰语与中文播放，适配所有手机/电脑，无需依赖系统 TTS 或外部服务。

## 目录结构
```
assets/
  audio/
    th/
      consonants/
        ko_kai.mp3
        kho_khai.mp3
        kho_khuwat.mp3
        kho_khwai.mp3
        ngo_ngoo.mp3
        cho_chang.mp3
      vowels/
        ...（如需拓展元音）
    zh/
      consonants/
        ko_kai.zh.mp3
        kho_khai.zh.mp3
        kho_khuwat.zh.mp3
        kho_khwai.zh.mp3
        ngo_ngoo.zh.mp3
        cho_chang.zh.mp3
      vowels/
        ...
```

## 对应关系
- 清单文件：`/audio-manifest.json`，每一项提供：
  - `thAudio`: 泰语mp3路径
  - `zhAudio`: 中文mp3路径
- 页面：`/alphabet-local-audio.html` 会按清单顺序播放：泰语×3 + 中文×3

## 音频制作建议
- 格式：mp3，单声道，采样 44.1kHz，比特率 64~96 kbps
- 音量一致：导出时统一响度，避免忽大忽小
- 命名规则：使用示例中的 key，便于管理与扩展

## 如何快速验证
1. 将若干 mp3 放到上述目录
2. 确保 `audio-manifest.json` 的路径与文件名一致
3. 用浏览器打开：`/alphabet-local-audio.html`
4. 点击“播放”，应能在手机上稳定播放（不依赖系统TTS）

## 常见问题
- 播放按钮无效：请确保是手动点击（移动端自动播放限制）
- 某条目显示“缺音频”：对应 mp3 文件未放置或路径不匹配
- 仍想使用TTS：请改用服务器端TTS+后端代理，不建议在前端直接调用第三方TTS