import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outputDirectory = path.resolve("public/images/projects");

const images = [
  {
    slug: "northstar-analytics",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=85",
    credit: "Lukas Blazek on Unsplash",
  },
  {
    slug: "nomad-notes",
    url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2400&q=85",
    credit: "freestocks on Unsplash",
  },
  {
    slug: "bloom-commerce",
    url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2400&q=85",
    credit: "Blake Wisz on Unsplash",
  },
  {
    slug: "careline",
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=85",
    credit: "Nastuh Aboott on Unsplash",
  },
  {
    slug: "pocket-pantry",
    url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=2400&q=85",
    credit: "Daniel Romero on Unsplash",
  },
  {
    slug: "signal-studio",
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2400&q=85",
    credit: "Andrew Neel on Unsplash",
  },
];

await mkdir(outputDirectory, { recursive: true });

for (const image of images) {
  const response = await fetch(image.url);
  if (!response.ok) {
    throw new Error(`Could not download ${image.slug}: ${response.status}`);
  }

  const source = Buffer.from(await response.arrayBuffer());
  await sharp(source)
    .resize(1600, 1000, { fit: "cover", position: "attention" })
    .webp({ quality: 82 })
    .toFile(path.join(outputDirectory, `${image.slug}.webp`));

  console.log(`${image.slug}.webp — credit: ${image.credit}`);
}
