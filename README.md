# Botones de Sonido 🔊

Tablón de botones de sonido, *mobile first* y con estética neo-brutalista. Cada botón reproduce el audio correspondiente al presionarlo. Es una **PWA instalable**: funciona sin conexión y se puede añadir a la pantalla de inicio.

## Características

- Botones generados automáticamente a partir de los archivos de audio en `./src/sonidos`.
- Estilo visual con [NeoBrutalismCSS](https://matifandy8.github.io/NeoBrutalismCSS/).
- Diseño *mobile first* responsivo (2 → 3 → 4 columnas).
- **PWA instalable** (`vite-plugin-pwa`): manifest, service worker y precacheo de audios para uso offline.
- Icono de la app y favicon con el mismo diseño.
- Botón de instalación en pantalla vía `beforeinstallprompt`.
- Entorno con [Bun](https://bun.sh).

## Requisitos

- [Bun](https://bun.sh) >= 1.4

## Instalación

```bash
bun install
```

## Desarrollo

```bash
bun run dev
```

## Build de producción

```bash
bun run build
bun run preview
```

El build genera en `dist/` los archivos PWA (`manifest.webmanifest`, `sw.js` y los iconos).

## Lint

```bash
bun run lint
```

## Añadir sonidos

Agregá archivos `.mp3` dentro de `src/sonidos/`. La app detecta automáticamente cada archivo al recompilar y crea un botón con su nombre (sin la extensión) para reproducirlo.

## Tecnologías

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [NeoBrutalismCSS](https://matifandy8.github.io/NeoBrutalismCSS/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- [Bun](https://bun.sh)