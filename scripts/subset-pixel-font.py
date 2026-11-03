"""Build a self-hosted pixel font containing this page's Chinese and English copy."""
from io import BytesIO
from pathlib import Path
from urllib.request import urlopen
from zipfile import ZipFile

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
VERSION = "2026.10.25"
ARCHIVE = f"fusion-pixel-font-12px-proportional-otf.woff2-v{VERSION}.zip"
URL = f"https://github.com/TakWolf/fusion-pixel-font/releases/download/{VERSION}/{ARCHIVE}"


def main():
    """Subset the pinned upstream font, rejecting copy with unavailable glyphs."""
    with urlopen(URL, timeout=30) as response:
        archive = ZipFile(BytesIO(response.read()))
    font = TTFont(BytesIO(archive.read("fusion-pixel-12px-proportional-zh_hans.otf.woff2")))
    text = (ROOT / "index.html").read_text() + (ROOT / "site.js").read_text()
    text += "".join(chr(code) for code in range(32, 127))
    characters = {ord(char) for char in text if ord(char) > 32}
    # Source markup also contains code punctuation; visible CJK and Latin glyphs must exist.
    missing = {chr(code) for code in characters if code not in font.getBestCmap()}
    if missing:
        raise ValueError(f"Pixel font lacks characters: {sorted(missing)}")
    options = subset.Options()
    options.flavor = "woff2"
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(text=text)
    subsetter.subset(font)
    font.flavor = "woff2"
    # Give the locally modified font a distinct family name.
    for record in font["name"].names:
        if record.nameID in (1, 4, 6):
            record.string = ("YJPixelWorkshop" if record.nameID == 6 else "YJ Pixel Workshop").encode(record.getEncoding())
    font.save(ROOT / "assets/pixel-ui.woff2")
    for name in archive.namelist():
        if name.endswith(".txt"):
            target = ROOT / "assets/pixel-font-licenses" / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(archive.read(name))
    print(f"Pixel font: {(ROOT / 'assets/pixel-ui.woff2').stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
