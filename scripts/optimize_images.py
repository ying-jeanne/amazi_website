import os
from PIL import Image

def optimize_image(input_path, output_dir, base_name, max_width=None):
    """
    Optimizes an image by resizing and saving as WebP and JPEG.
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB (in case of RGBA/P mode which JPEG doesn't support)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            # Resize if max_width is specified and image is wider
            if max_width and img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {base_name} to {max_width}px width.")

            # Save as WebP
            webp_path = os.path.join(output_dir, f"{base_name}.webp")
            img.save(webp_path, 'WEBP', quality=85)
            print(f"Saved {webp_path}")

            # Save as JPEG
            jpg_path = os.path.join(output_dir, f"{base_name}.jpg")
            img.save(jpg_path, 'JPEG', quality=85, optimize=True)
            print(f"Saved {jpg_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    images_dir = os.path.join(base_dir, 'static', 'images')
    
    # Define images to process: (Filename, BaseName, MaxWidth)
    images_to_process = [
        ('hero-bg-original.jpg', 'hero-bg', 1920),
        ('about-original.jpg', 'about', 1000)
    ]

    for filename, base_name, max_width in images_to_process:
        input_path = os.path.join(images_dir, filename)
        if os.path.exists(input_path):
            print(f"Processing {filename}...")
            optimize_image(input_path, images_dir, base_name, max_width)
        else:
            print(f"Warning: {filename} not found in {images_dir}")

if __name__ == "__main__":
    main()
