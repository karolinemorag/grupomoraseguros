from pathlib import Path
from PIL import Image, ImageOps

# Source: Pexels 35388176 — clean Madrid skyline
src = Path(r"C:\Users\34645\Downloads\pexels-travel-photographer-127255675-35388176.jpg")
dest = Path(r"c:\Users\34645\Desktop\grupo-mora\public\images\home\hero-madrid-clean-skyline.webp")

dest.parent.mkdir(parents=True, exist_ok=True)

with Image.open(src) as img:
    img = ImageOps.exif_transpose(img).convert("RGB")

    # Resize width to 1600px
    target_w = 1600
    w, h = img.size
    ratio = target_w / w
    img = img.resize((target_w, round(h * ratio)), Image.Resampling.LANCZOS)

    # Crop to 16:9 from top (keep skyline, reduce street/sky)
    w, h = img.size
    crop_h = round(w * 9 / 16)
    img = img.crop((0, 0, w, min(crop_h, h)))

    img.save(dest, "WEBP", quality=82, method=6)

print(f"Created: {dest.name} ({dest.stat().st_size // 1024} KB, {img.size})")