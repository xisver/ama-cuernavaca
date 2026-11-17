# Publicar AMA en GitHub Pages

Preparado el 17 de noviembre de 2026 para `xisver/ama-cuernavaca`.

## Configuración preparada

- `vite.config.js` fija la base `/ama-cuernavaca/`, correspondiente a la URL del repositorio.
- Las imágenes creadas desde JavaScript usan `import.meta.env.BASE_URL` para mantener esa base.
- `.github/workflows/deploy.yml` instala dependencias, compila y publica solo `dist/`. Se ejecuta con cada push a `main` y también manualmente.
- El entorno usa Node.js 24 y las Actions oficiales, fijadas a commits.

La preparación y compilación local no publican cambios. El sitio público se actualizará cuando se configure Pages para Actions y se suba el workflow a `main`.

## Primera publicación

1. Abre [Settings → Pages](https://github.com/xisver/ama-cuernavaca/settings/pages).
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Desde la carpeta local del proyecto, revisa los cambios y súbelos:

```powershell
git diff
git add vite.config.js src/main.js .github/workflows/deploy.yml README.md docs/DEPLOY_GITHUB_PAGES.md
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

4. Abre [Actions](https://github.com/xisver/ama-cuernavaca/actions) y espera a que **Publicar AMA en GitHub Pages** termine en verde.
5. Revisa [https://xisver.github.io/ama-cuernavaca/](https://xisver.github.io/ama-cuernavaca/). La aparición inicial puede tardar unos minutos después de completar el despliegue.

Si el workflow ya estaba subido antes de cambiar el origen, abre **Actions → Publicar AMA en GitHub Pages → Run workflow**, selecciona `main` y ejecútalo.

## Actualizaciones

Después de esta configuración, cada push a `main` ejecuta la compilación y actualiza Pages. No subas `node_modules/` ni `dist/`: el workflow genera los archivos publicados.

## Revisión local

```powershell
npm ci
npm run build
npm run preview
```

Abre `http://127.0.0.1:3001/ama-cuernavaca/` y comprueba imágenes, menú, cursos y enlaces. El desarrollo también utiliza la ruta `/ama-cuernavaca/`, en el puerto 3000.

## Si algo falla

- **Se muestra una página vacía o el README:** confirma que **Source** sea **GitHub Actions** y revisa el último despliegue.
- **Las imágenes o estilos dan 404:** conserva `/ama-cuernavaca/` en `base`; si renombras el repositorio, actualiza ese valor.
- **El workflow falla:** abre el paso rojo dentro de Actions para ver el mensaje. Pages debe estar habilitado; la cuenta y las políticas del repositorio deben permitir GitHub Actions.
- **El push es rechazado porque el remoto tiene cambios nuevos:** revisa esos cambios e intégralos antes de reintentar. No uses force push.

Pages permite repositorios públicos en GitHub Free. Publicar desde un repositorio privado requiere un plan compatible. En este caso, el repositorio se observó público al revisar la configuración. El sitio publicado será accesible por Internet.

La página conserva `noindex, nofollow`, pues sigue siendo una propuesta. Esto solicita a los buscadores que no la indexen; no limita quién puede visitarla. Si se aprueba como sitio oficial, revisar metadatos y confirmar los datos comerciales antes de retirar esa etiqueta.

Fuentes oficiales: [Vite: despliegue en GitHub Pages](https://vite.dev/guide/static-deploy#github-pages), [GitHub: configuración de la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
