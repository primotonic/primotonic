#!/usr/bin/env python3
"""Generate Primotonic Fiverr intro video with AI voiceover (edge-tts)."""

from __future__ import annotations

import asyncio
import re
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
import edge_tts
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'fiverr' / 'primotonic-intro.mp4'
SILENT = ROOT / 'fiverr' / 'primotonic-intro-silent.mp4'
VOICE_MP3 = ROOT / 'fiverr' / 'primotonic-intro-voice.mp3'
FACE = ROOT / 'public' / 'logo-face.png'

VOICE = 'en-US-AndrewNeural'
SCRIPT = """Hi — I'm Von from Primotonic, based in the Philippines.
I build full-stack systems that actually run the work — web apps, APIs, ops platforms — and I secure them with real penetration testing.
React, Node, TypeScript, Rails — from idea to production.
If you need something shipped and hardened, let's talk.
"""

W, H = 1280, 720
FPS = 30
CREAM = (250, 246, 240)
ORANGE = (255, 106, 0)
INK = (22, 20, 18)
SOFT = (106, 97, 88)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    path = (
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
        if bold
        else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
    )
    return ImageFont.truetype(path, size)


def center_text(draw: ImageDraw.ImageDraw, text: str, y: int, f, fill=INK) -> None:
    bbox = draw.textbbox((0, 0), text, font=f)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, y), text, font=f, fill=fill)


def base() -> Image.Image:
    img = Image.new('RGB', (W, H), CREAM)
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, 16, H), fill=ORANGE)
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    od.ellipse((900, -100, 1400, 320), fill=(255, 106, 0, 30))
    od.ellipse((-100, 450, 480, 860), fill=(255, 106, 0, 18))
    return Image.alpha_composite(img.convert('RGBA'), ov).convert('RGB')


def media_duration(ffmpeg: str, path: Path) -> float:
    info = subprocess.run(
        [ffmpeg, '-i', str(path)], capture_output=True, text=True
    ).stderr
    m = re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)', info)
    if not m:
        raise RuntimeError(f'Could not read duration for {path}')
    h, mi, sec = m.groups()
    return int(h) * 3600 + int(mi) * 60 + float(sec)


async def synthesize_voice() -> None:
    communicate = edge_tts.Communicate(SCRIPT.strip(), VOICE, rate='-5%')
    await communicate.save(str(VOICE_MP3))


def mux_voice(ffmpeg: str, silent: Path, audio: Path, dest: Path) -> None:
    pad = max(0.0, media_duration(ffmpeg, audio) - media_duration(ffmpeg, silent) + 0.25)
    tmp = dest.with_name('_tmp_voiced.mp4')
    cmd = [ffmpeg, '-y', '-i', str(silent), '-i', str(audio)]
    if pad > 0.05:
        cmd += ['-vf', f'tpad=stop_mode=clone:stop_duration={pad:.3f}']
    cmd += [
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20',
        '-c:a', 'aac', '-b:a', '192k',
        '-shortest', '-movflags', '+faststart',
        str(tmp),
    ]
    subprocess.check_call(cmd)
    dest.write_bytes(tmp.read_bytes())
    tmp.unlink(missing_ok=True)


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    face = Image.open(FACE).convert('RGBA').resize((140, 154), Image.Resampling.LANCZOS)

    slides: list[tuple[Image.Image, float]] = []

    s1 = base()
    d = ImageDraw.Draw(s1)
    s1.paste(face, ((W - 140) // 2, 160), face)
    center_text(d, 'PRIMOTONIC', 360, font(64, True), ORANGE)
    center_text(d, '@nero_maniq', 450, font(28), SOFT)
    slides.append((s1, 3.5))

    s2 = base()
    d = ImageDraw.Draw(s2)
    center_text(d, 'Full-stack systems that', 250, font(42, True), INK)
    center_text(d, 'actually run the work', 320, font(42, True), INK)
    center_text(d, 'Web  ·  APIs  ·  Ops  ·  Pentesting', 430, font(26), ORANGE)
    slides.append((s2, 4.5))

    s3 = base()
    d = ImageDraw.Draw(s3)
    center_text(d, 'Production outcomes', 180, font(28), ORANGE)
    y = 260
    for value, label in [
        ('10K+', 'Users in production'),
        ('$80K–$325K', 'Platform revenue managed'),
        ('500+', 'Vulnerabilities researched'),
    ]:
        center_text(d, value, y, font(40, True), INK)
        center_text(d, label, y + 52, font(22), SOFT)
        y += 120
    slides.append((s3, 5.0))

    s4 = base()
    d = ImageDraw.Draw(s4)
    s4.paste(face, ((W - 140) // 2, 120), face)
    center_text(d, 'Philippines  ·  Speaks English', 310, font(30, True), INK)
    center_text(d, 'Let’s build something reliable.', 380, font(34, True), ORANGE)
    center_text(d, 'primotonic.com', 470, font(28), SOFT)
    center_text(d, 'Fiverr · nero_maniq', 530, font(24), SOFT)
    slides.append((s4, 5.0))

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

    with tempfile.TemporaryDirectory() as tmp:
        frame_dir = Path(tmp)
        idx = 0
        for slide, duration in slides:
            for _ in range(int(duration * FPS)):
                slide.save(frame_dir / f'frame_{idx:05d}.png')
                idx += 1

        subprocess.check_call(
            [
                ffmpeg, '-y',
                '-framerate', str(FPS),
                '-i', str(frame_dir / 'frame_%05d.png'),
                '-c:v', 'libx264',
                '-pix_fmt', 'yuv420p',
                '-movflags', '+faststart',
                '-crf', '20',
                str(SILENT),
            ]
        )

    print(f'Silent base → {SILENT}')
    asyncio.run(synthesize_voice())
    print(f'Voice ({VOICE}) → {VOICE_MP3}')
    mux_voice(ffmpeg, SILENT, VOICE_MP3, OUT)
    print(f'Voiced intro → {OUT} ({OUT.stat().st_size // 1024} KB, {media_duration(ffmpeg, OUT):.1f}s)')


if __name__ == '__main__':
    main()
