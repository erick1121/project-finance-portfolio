# Erick Córdova · Project Finance Portfolio

Sitio estático (HTML + CSS + JS vanilla, sin build ni frameworks) que se
alimenta de ficheros de datos por caso de estudio. Se abre con doble clic en
`index.html` — no necesita servidor.

## Archivos

```
index.html                  → página principal (home)
case-study.html              → plantilla dinámica de caso (una sola, ?id=... la rellena)
styles.css                   → sistema de diseño compartido
script.js                    → filtro de sectores + reveal on scroll + scroll-spy del TOC

data/
  _template.js                → plantilla de referencia con TODOS los campos (no se carga en la web)
  energia-renovable/
    aurora-offshore-wind.js   → caso de ejemplo
  infraestructura-core/
    meridian-toll-road.js     → caso de ejemplo
  infraestructura-digital/
    nexus-data-center.js      → caso de ejemplo

assets/js/
  charts.js                   → gráficos SVG (barras, tornado, línea de DSCR) — sin librerías externas
  render.js                   → construye index.html y case-study.html a partir de los ficheros de data/
```

## Cómo funciona

Cada fichero en `data/<sector>/tu-proyecto.js` hace `window.CASE_STUDIES.push({...})`
con todos los datos de un caso de estudio. `index.html` y `case-study.html`
cargan esos ficheros vía `<script>` y `assets/js/render.js` construye el HTML
(incluidos los 3 gráficos: barras de escenario P50–P99, tornado de
sensibilidades y perfil de DSCR) directamente desde esos datos. No hay que
tocar HTML/CSS nunca para añadir o editar un caso.

## Cómo añadir un caso de estudio nuevo

1. Copia `data/_template.js` (tiene comentarios en cada campo) dentro de la
   carpeta de su sector — o crea una carpeta de sector nueva si hace falta:
   - `data/energia-renovable/`
   - `data/infraestructura-core/`
   - `data/infraestructura-digital/`
2. Renómbralo con un slug único, ej. `mi-proyecto.js`, y rellena los campos.
3. Añade **una línea** `<script src="data/.../mi-proyecto.js"></script>` en
   **ambos** `index.html` y `case-study.html`, junto a los demás ficheros de
   datos (antes de `assets/js/charts.js`).
4. Guarda y recarga el navegador — la tarjeta aparece sola en el grid del
   portfolio y `case-study.html?id=mi-proyecto` renderiza el caso completo
   con sus gráficos.

## Qué preparar por cada caso de estudio futuro

Revisa `data/_template.js` para el detalle exacto de cada campo. En resumen:

- **Datos del proyecto**: ubicación, tamaño, mecanismo de ingresos, sponsors,
  capex total, estructura de financiación, plazo de operación/concesión
- **3 métricas del hero**: Equity IRR, Gearing Ratio, Cash-on-Cash Multiple (u
  otras que apliquen)
- **Resultados por escenario** P50/P75/P90/P99 → alimenta el gráfico de barras
- **Sensibilidades** (variable + impacto bajista/alcista en puntos porcentuales
  de IRR) → alimenta el gráfico tornado
- **Perfil de DSCR** por año de operación + covenant mínimo → alimenta el
  gráfico de línea
- **3 conclusiones desde la perspectiva de equity** y **3 desde la
  perspectiva de los prestamistas**
- **Supuestos clave con su fuente**, agrupados en Ingresos / Capex / Opex /
  Deuda / Equity
- **Fuentes y referencias**, y el archivo `.xlsx` del modelo si vas a
  ofrecerlo para descarga directa

## Sectores del filtro

El filtro de la home usa tres valores de `sector` (el mismo campo que en cada
fichero de datos):

- `renewable` → Energía Renovable
- `core` → Infraestructura Core (agua, transporte, carreteras)
- `digital` → Infraestructura Digital (data centers, fibra)

Si añades un sector nuevo, crea su carpeta en `data/`, usa un `sector` propio
en tus ficheros, y agrega un botón más en `.filter-pills` de `index.html` con
ese mismo valor en `data-filter`.

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos y carpetas (incluida `data/`) a la raíz del
   repositorio, o a una carpeta `docs/`
3. En el repositorio: **Settings → Pages**
4. En "Source", selecciona la rama (`main`) y la carpeta (`/root` o `/docs`)
5. Guarda — GitHub te dará una URL del tipo
   `https://tu-usuario.github.io/tu-repositorio/`

No hace falta build step, `npm install` ni configuración adicional.
