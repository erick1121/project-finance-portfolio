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
  _template.xlsx               → misma plantilla, en Excel (mismas pestañas que un caso real)
  energia-renovable/
    aurora-offshore-wind.xlsx  → EDITA ESTE — fuente de datos del caso
    aurora-offshore-wind.js    → GENERADO desde el .xlsx de al lado, no lo edites a mano
  infraestructura-core/
    meridian-toll-road.xlsx    → EDITA ESTE
    meridian-toll-road.js      → GENERADO
  infraestructura-digital/
    nexus-data-center.xlsx     → EDITA ESTE
    nexus-data-center.js       → GENERADO

tools/
  build_data.py                → convierte cada data/<sector>/*.xlsx en su .js hermano (mismo nombre, misma carpeta)

assets/js/
  charts.js                   → gráficos SVG (barras, tornado, línea DSCR, waterfall) — sin librerías externas
  render.js                   → construye index.html y case-study.html a partir de los ficheros de data/

resume/
  Erick_Cordova_CV.pdf         → sube aquí tu CV (ver resume/README.md) — el botón del hero ya apunta ahí
```

## Cómo funciona

Cada fichero en `data/<sector>/tu-proyecto.js` hace `window.CASE_STUDIES.push({...})`
con todos los datos de un caso de estudio. `index.html` y `case-study.html`
cargan esos ficheros vía `<script>` y `assets/js/render.js` construye el HTML
(incluidos los 3 gráficos: barras de escenario P50–P99, tornado de
sensibilidades y perfil de DSCR) directamente desde esos datos. No hay que
tocar HTML/CSS nunca para añadir o editar un caso.

**Los `data/*.js` de los 3 casos de ejemplo ahora se generan desde el `.xlsx`
que está justo al lado** — ver la sección siguiente. Puedes seguir editando
un `data/*.js` a mano si prefieres (sigue siendo JS plano), pero si ese caso
también tiene su `.xlsx`, la próxima vez que ejecutes `build_data.py` tu
edición manual se sobrescribirá con lo que haya en el Excel.

## Editar los casos de estudio desde Excel (recomendado)

En vez de tocar JSON/JS a mano, puedes mantener cada caso de estudio en un
Excel con una pestaña por tipo de dato (Info, Metrics, Facts, ExecutiveSummary,
ScenarioTable, Callouts, Sensitivities, DebtProfile, InsightsPE,
InsightsLenders, CreditMetrics, CashFlowWaterfall, Assumptions, Sources) y
regenerar el `.js` con un comando.

Dos pestañas merecen explicación:
- **CreditMetrics** (Label, Value): DSCR Min./Avg., LLCR, PLCR, Concession
  Tail — se muestran junto a "Lenders' Perspective".
- **CashFlowWaterfall** (Label, Value, Type): la cascada CADS → deuda senior
  → reservas (DSRA/MRA) → dividendo para un año representativo. `Value`
  siempre en positivo; `Type` es `start` (primer escalón, ej. CADS),
  `outflow` (resta, ej. deuda o reservas), `inflow` (suma, si aplica) o `end`
  (último escalón, ej. Dividendo).
- En la pestaña **Info** también puedes rellenar `transactionRole` con uno
  de: `Bid Phase`, `Financial Close`, `Operations`, `Refinancing / M&A` —
  aparece como etiqueta junto al sector.

**Configuración única** (una sola vez en tu Mac):
```
python3 -m pip install --user openpyxl
```

**Flujo de trabajo normal:**
1. Abre el `.xlsx` de un caso en `data/<sector>/` (Excel, Numbers o Google
   Sheets) y edita los valores que quieras — no cambies los nombres de las
   pestañas ni las columnas de cabecera.
2. Guarda el archivo.
3. Desde la carpeta del proyecto, ejecuta:
   ```
   python3 tools/build_data.py
   ```
   Esto regenera **todos** los `data/<sector>/*.js` a partir de todos los
   `.xlsx` que encuentre bajo `data/`, cada uno en su misma carpeta.
4. Recarga el navegador para comprobar el resultado, y si todo está bien:
   ```
   git add -A
   git commit -m "Update case study data"
   git push
   ```

## Cómo añadir un caso de estudio nuevo (con Excel)

1. Copia `data/_template.xlsx` dentro de la carpeta de su sector con un
   nombre nuevo, ej. `data/energia-renovable/mi-proyecto.xlsx` — o crea una
   carpeta de sector nueva si hace falta.
2. Rellena las pestañas (mira `data/energia-renovable/aurora-offshore-wind.xlsx`
   como referencia de un caso ya completo).
3. Ejecuta `python3 tools/build_data.py` — esto crea automáticamente
   `data/energia-renovable/mi-proyecto.js` justo al lado del `.xlsx`.
4. Añade una tarjeta en `index.html` (copia un `<article class="case-card"
   data-sector="...">` existente) apuntando a
   `case-study.html?id=mi-proyecto`, y añade **una línea**
   `<script src="data/.../mi-proyecto.js"></script>` en **ambos**
   `index.html` y `case-study.html`, junto a los demás ficheros de datos
   (antes de `assets/js/charts.js`).
5. Recarga el navegador — la tarjeta aparece en el grid del portfolio y
   `case-study.html?id=mi-proyecto` renderiza el caso completo con sus
   gráficos.

### Cómo añadir un caso de estudio nuevo (a mano, sin Excel)

Si prefieres no usar Excel, sigue el mismo proceso pero copiando
`data/_template.js` (tiene comentarios en cada campo) en vez del `.xlsx`, y
sáltate el paso de `build_data.py`.

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
