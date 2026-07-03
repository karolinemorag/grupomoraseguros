"""
SPRINT VISUAL 9C: Image preparation script
Converts Pexels downloads to optimized WebP assets
"""

import os
import sys
from pathlib import Path
from PIL import Image, ImageOps

DOWNLOADS = Path(r"C:\Users\34645\Downloads")
REPO_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_IMAGES = REPO_ROOT / "public" / "images"

# Mapping: pexels_id -> (dest_folder, dest_name, max_width, quality)
IMAGE_MAP = {
    # Home
    "35729663": ("home", "hero-madrid-cuatro-torres", 1900, 84),
    # Hub
    "27068172": ("insurance", "insurance-modern-building", 1600, 84),
    # Health
    "33812023": ("health", "health-medical-corridor", 1400, 82),
    "19921278": ("health", "health-patient-consultation", 1200, 82),
    # Life
    "9869637": ("life", "life-reviewing-documents", 1400, 82),
    "8441854": ("life", "life-planning-senior", 1200, 80),
    # International
    "30875644": ("international", "international-madrid-street", 1900, 84),
    "35388176": ("international", "international-madrid-alt", 1600, 84),
    "3885536": ("international", "international-arrival-luggage", 1400, 82),
    # Decesos
    "36721147": ("decesos", "decesos-memorial-room", 1600, 82),
    "1876585": ("decesos", "decesos-floral-detail", 1200, 80),
    # Mascotas
    "16620453": ("pets", "pets-human-dog-bond", 1600, 84),
    "10892519": ("pets", "pets-domestic-environment", 1400, 82),
    # Sobre Karoline
    "7731326": ("editorial", "editorial-documents-meeting", 1400, 82),
    "7735625": ("editorial", "editorial-professional-consultation", 1400, 82),
    # Contacto
    "8441780": ("editorial", "editorial-client-guidance", 1400, 82),
    "7821684": ("editorial", "editorial-document-exchange", 1200, 80),
    # Guías
    "6170858": ("guides", "guides-planning-calendar", 1400, 82),
    # Asistencia
    "35736048": ("editorial", "editorial-interior-professional", 1400, 82),
}

# File patterns for locating downloads (id -> known filename)
KNOWN_FILES = {
    "35729663": "pexels-freestockpro-35729663.jpg",
    "3885536": "pexels-gustavo-fring-3885536.jpg",
    "30875644": "pexels-juan-garcia-84744800-30875644.jpg",
    "35388176": "pexels-travel-photographer-127255675-35388176.jpg",
    "33812023": "pexels-jinshu-pulpatta-2151876856-33812023.jpg",
    "19921278": "pexels-wutthichai-charoenburi-553075115-19921278.jpg",
    "9869637": "pexels-ron-lach-9869637.jpg",
    "8441854": "pexels-kampus-8441854.jpg",
    "7735625": "pexels-mikhail-nilov-7735625.jpg",
    "7731326": "pexels-mikhail-nilov-7731326.jpg",
    "8441780": "pexels-kampus-8441780.jpg",
    "7821684": "pexels-rdne-7821684.jpg",
    "36721147": "pexels-brunxs-36721147.jpg",
    "1876585": "pexels-elina-sazonova-1876585.jpg",
    "16620453": "pexels-eduardo-lopez-242403618-16620453.jpg",
    "10892519": "pexels-julissapires-10892519.jpg",
    "27068172": "pexels-gerxrd-25-1469882273-27068172.jpg",
    "35736048": "pexels-ujo-partners-719697118-35736048.jpg",
    "6170858": "pexels-rdne-6170858.jpg",
}

NOT_FOUND = ["38058568"]


def find_source(pexels_id: str) -> Path | None:
    """Find the source image for a given Pexels ID."""
    # Try known filename
    if pexels_id in KNOWN_FILES:
        p = DOWNLOADS / KNOWN_FILES[pexels_id]
        if p.exists():
            return p

    # Try wildcard search
    for f in DOWNLOADS.iterdir():
        if pexels_id in f.name and f.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp"):
            return f

    return None


def validate_image(path: Path) -> tuple[int, int] | None:
    """Validate and return dimensions (width, height)."""
    try:
        with Image.open(path) as img:
            img.verify()
        with Image.open(path) as img:
            return img.size
    except Exception as e:
        print(f"  ERROR: {e}")
        return None


def convert_image(source: Path, dest: Path, max_width: int, quality: int) -> bool:
    """Convert and optimize image to WebP."""
    try:
        dest.parent.mkdir(parents=True, exist_ok=True)

        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")

            w, h = image.size
            if w > max_width:
                new_h = round(h * max_width / w)
                image = image.resize((max_width, new_h), Image.Resampling.LANCZOS)

            image.save(dest, "WEBP", quality=quality, method=6)

        fs = dest.stat().st_size
        print(f"  -> {dest.name} ({fs // 1024} KB)")
        return True
    except Exception as e:
        print(f"  CONVERSION ERROR: {e}")
        return False


def main():
    print("=" * 60)
    print("SPRINT 9C: IMAGE PREPARATION")
    print("=" * 60)

    # Step 1: Locate and validate all images
    print("\n[1/3] Locating and validating source images...")
    inventory = {}

    for pid in sorted(IMAGE_MAP.keys()):
        src = find_source(pid)
        if src is None:
            print(f"  {pid}: NOT FOUND")
            inventory[pid] = None
            continue

        fs = src.stat().st_size
        dims = validate_image(src)

        if dims is None:
            print(f"  {pid}: INVALID FILE")
            inventory[pid] = None
            continue

        w, h = dims
        print(f"  {pid}: {src.name} | {fs // 1024} KB | {w}x{h}")
        inventory[pid] = (src, dims, fs)

    print(f"\n  Found: {sum(1 for v in inventory.values() if v is not None)}/{len(IMAGE_MAP)}")

    # Step 2: Create directories
    print("\n[2/3] Creating directory structure...")
    dirs = set()
    for pid, (dest_folder, _, _, _) in IMAGE_MAP.items():
        d = PUBLIC_IMAGES / dest_folder
        dirs.add(d)
        d.mkdir(parents=True, exist_ok=True)
    for d in sorted(dirs):
        print(f"  {d.relative_to(REPO_ROOT)}")

    # Step 3: Convert and save
    print("\n[3/3] Converting to WebP...")
    converted = 0
    skipped = 0
    failed = 0

    for pid, (dest_folder, dest_name, max_width, quality) in sorted(IMAGE_MAP.items()):
        info = inventory.get(pid)
        if info is None:
            print(f"  {pid}: SKIPPED (not found)")
            skipped += 1
            continue

        src, (w, h), fs = info
        dest = PUBLIC_IMAGES / dest_folder / f"{dest_name}.webp"

        if dest.exists() and dest.stat().st_size > 10000:
            print(f"  {dest.relative_to(REPO_ROOT)} already exists ({dest.stat().st_size // 1024} KB)")
            skipped += 1
            continue

        print(f"  Converting {pid} ({src.name}) -> {dest_folder}/{dest_name}.webp...")
        if convert_image(src, dest, max_width, quality):
            converted += 1
        else:
            failed += 1

    # Summary
    print("\n" + "=" * 60)
    print(f"SUMMARY: {converted} converted, {skipped} skipped, {failed} failed")
    print("=" * 60)


if __name__ == "__main__":
    main()