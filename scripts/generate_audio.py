#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
生成本地音频（泰语与中文），无需人工操作：
- 读取 audio-manifest.json
- 对缺失的 thAudio/zhAudio 路径用 gTTS 生成 mp3
- 生成后即可被 alphabet-local-audio.html 播放（每条会播放3遍）
"""

import json
import os
import time
from pathlib import Path

def safe_text(val):
    if val is None:
        return ""
    return str(val).strip()

def gen_tts_mp3(text, lang, out_path, retries=3, delay=0.8):
    from gtts import gTTS
    out_path.parent.mkdir(parents=True, exist_ok=True)
    last_err = None
    for i in range(retries):
        try:
            tts = gTTS(text=text, lang=lang, slow=False)
            tts.save(str(out_path))
            return True
        except Exception as e:
            last_err = e
            time.sleep(delay)
    print(f"[ERROR] gTTS failed ({lang}) for '{text}': {last_err}")
    return False

def main():
    repo_root = Path(__file__).resolve().parent.parent
    manifest_path = repo_root / "audio-manifest.json"
    if not manifest_path.exists():
        raise SystemExit("audio-manifest.json not found")

    data = json.loads(manifest_path.read_text("utf-8"))
    changed = False

    for item in data:
        thai_text = safe_text(item.get("thai"))
        zh_text = safe_text(item.get("chinese"))

        th_audio_rel = safe_text(item.get("thAudio"))
        zh_audio_rel = safe_text(item.get("zhAudio"))

        # 仅当提供了文本与目标路径时生成
        if thai_text and th_audio_rel:
            th_path = (repo_root / th_audio_rel).resolve()
            if not th_path.exists():
                print(f"[GEN] Thai  -> {th_audio_rel} | text: {thai_text}")
                ok = gen_tts_mp3(thai_text, "th", th_path)
                if ok:
                    changed = True
        if zh_text and zh_audio_rel:
            zh_path = (repo_root / zh_audio_rel).resolve()
            if not zh_path.exists():
                print(f"[GEN] Chinese -> {zh_audio_rel} | text: {zh_text}")
                ok = gen_tts_mp3(zh_text, "zh-CN", zh_path)
                if ok:
                    changed = True

        # 节流，防止请求过快
        time.sleep(0.2)

    if changed:
        print("[DONE] Audio files generated.")
    else:
        print("[SKIP] No audio was generated (all exist).")

if __name__ == "__main__":
    main()