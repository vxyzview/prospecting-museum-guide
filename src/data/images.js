// Real specimen images from the Official Prospecting! Wiki (CC BY-NC-SA 4.0).
// Served from public/img; BASE_URL keeps them correct under the Pages subpath.

const imgb = import.meta.env.BASE_URL

export const img = (name) => `${imgb}img/${name}`

export const SPECIMENS = {
  keyOfLife: 'icon-key-of-life.png',
  vortessence: 'icon-vortessence.png',
  solarium: 'icon-solarium.png',
  adamantine: 'icon-adamantine.png',
  eyeOfTheSands: 'icon-eye-of-the-sands.png',
}

export const SCENES = {
  sandstoneStreamBanner: 'sandstone-stream-banner.png',
  sandstoneStream: 'sandstone-stream.png',
  lifespringOasis: 'lifespring-oasis.png',
  mysticFloodplains: 'mystic-floodplains.png',
  mutationForge: 'mutation-forge.png',
}

export function specimen(name) {
  return img(SPECIMENS[name] ?? name)
}

export function scene(name) {
  return img(SCENES[name] ?? name)
}

/* Specimen icons are cropped from the wiki icons (top label band removed)
   so they stay legible at 38px; the originals are credited below. */
export const CREDITS = [
  { src: 'icon-key-of-life.png', label: 'Key of Life (specimen icon, cropped)', file: 'File:Key_of_Life_collection_small.png' },
  { src: 'icon-vortessence.png', label: 'Vortessence (specimen icon, cropped)', file: 'File:Vortessence.png' },
  { src: 'icon-solarium.png', label: 'Solarium (specimen icon, cropped)', file: 'File:Solarium.png' },
  { src: 'icon-adamantine.png', label: 'Adamantine (specimen icon, cropped)', file: 'File:Adam.PNG' },
  { src: 'icon-eye-of-the-sands.png', label: 'Eye of the Sands (specimen icon, cropped)', file: 'File:Eye_of_the_Sands_collection_small.png' },
  { src: 'lifespring-oasis.png', label: 'Lifespring Oasis (digsite scene)', file: 'File:Lifespring_Oasis.png' },
  { src: 'sandstone-stream.png', label: 'Sandstone Stream (digsite scene)', file: 'File:Sandstone_Stream.png' },
  { src: 'mystic-floodplains.png', label: 'Mystic Floodplains (digsite scene)', file: 'File:Mystic_Floodplains.png' },
  { src: 'sandstone-stream-banner.png', label: 'Sandstone Stream (hero scene)', file: 'File:Sandstone_Stream_banner.png' },
  { src: 'mutation-forge.png', label: 'Mutation Forge (Frozen Peak)', file: 'File:MutationForge.png.png' },
].map((c) => ({ ...c, url: `https://prospecting.miraheze.org/wiki/${c.file}` }))
