---
title: "Disciplina del minimalismo editorial"
description: "Notas de diseño sobre cómo construí el sistema visual de oa.log y por qué la restricción es la feature."
date: 2026-03-25
publishDate: 2026-03-25
draft: false
kind: "write"
category: "Notas de diseño"
readingTime: "6 min"
weight: 3
tags: ["design", "typography", "editorial", "design system"]
---

La mayoría de los sitios personales están sobre-diseñados. No mal diseñados — *demasiado* diseñados. Tres tipografías, cinco colores, gradientes para "darle vida", hover states sorpresivos, animaciones de scroll. Y todo eso compite con el contenido en lugar de servirle.

Cuando empecé oa.log me di una sola instrucción: **quita hasta que duela**. Lo que quede es el sistema.

## 01 La referencia: editorial polaco

El punto de partida visual no fue Apple ni Stripe ni los sitios indie de Vercel. Fue una pieza específica: *Studio Zarach Portfolio Website* de Patryk Zarach (Polonia, 2022). Lo que me atrapó fue una sola decisión: tipografía neo-grotesca de un solo peso dominante, un solo rojo de acento, y todo numerado como manual técnico.

La tradición polaca de diseño editorial — de los carteles de los 60s hasta el branding contemporáneo — tiene una virtud rara: confianza en la composición pura. No necesita decorar porque *el layout es el diseño*.

> El minimalismo editorial no es ausencia. Es elección violenta de qué mostrar y qué no.

## 02 Las reglas que me di

<table style="width:100%;border-collapse:collapse;margin:28px 0;font-size:0.95em;">
<thead><tr><th style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--ink-300);text-align:left;padding:10px 14px 10px 0;border-bottom:1px solid var(--ink-300);font-weight:400;">Regla</th><th style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--ink-300);text-align:left;padding:10px 14px 10px 0;border-bottom:1px solid var(--ink-300);font-weight:400;">Detalle</th></tr></thead>
<tbody>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Una tipografía</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">Inter (en producción) como stand-in de PP Neue Montreal. Cero serif. Cero display. Una sola voz tipográfica para todo.</td></tr>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Dos pesos máx.</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">Regular (400) y Medium (500). Nunca bold 700. La fuente regular ya tiene presencia — el bold es ruido.</td></tr>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Monocromo + un acento</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">Negro, blancos cálidos, grises intermedios. Un solo rojo (#FF202B) que aparece máximo 1-2 veces por pantalla.</td></tr>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Todo numerado</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">Secciones, items, listas. El número es parte del diseño, no decoración. Aplica orden visual.</td></tr>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Hairlines</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">Líneas de 0.5px o 1px. Nunca bordes gruesos. Los divisores estructuran sin gritar.</td></tr>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Cero gradientes</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">Cero drop shadows. Cero glows. Cero blur. La identidad es <em>plana</em>.</td></tr>
<tr><td style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:11px;width:28%;vertical-align:top;padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);">Mono para data</td><td style="padding:14px 14px 14px 0;border-bottom:1px solid var(--ink-300);color:var(--ink-700);">JetBrains Mono para meta, fechas, métricas, claves. Sans para todo lo humano.</td></tr>
</tbody>
</table>

## 03 El color es una decisión política

El rojo de oa.log no apareció por gusto estético. Apareció por economía de jerarquía. Cuando todo es monocromo, una sola cosa roja captura el ojo inmediatamente — y eso me da control de *dónde* debe ir el ojo del usuario.

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:24px 0;">
  <div style="display:flex;flex-direction:column;gap:4px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-500);letter-spacing:0.5px;"><div style="width:70px;height:70px;border:0.5px solid var(--ink-300);display:flex;align-items:flex-end;padding:6px;background:#131313;color:#F4F4F2;">#131313</div><div style="color:var(--ink-900);text-transform:uppercase;">INK 900</div><div>texto</div></div>
  <div style="display:flex;flex-direction:column;gap:4px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-500);letter-spacing:0.5px;"><div style="width:70px;height:70px;border:0.5px solid var(--ink-300);display:flex;align-items:flex-end;padding:6px;background:#474747;color:#F4F4F2;">#474747</div><div style="color:var(--ink-900);text-transform:uppercase;">INK 500</div><div>dim</div></div>
  <div style="display:flex;flex-direction:column;gap:4px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-500);letter-spacing:0.5px;"><div style="width:70px;height:70px;border:0.5px solid var(--ink-300);display:flex;align-items:flex-end;padding:6px;background:#BCBCBC;color:#131313;">#BCBCBC</div><div style="color:var(--ink-900);text-transform:uppercase;">INK 300</div><div>divisor</div></div>
  <div style="display:flex;flex-direction:column;gap:4px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-500);letter-spacing:0.5px;"><div style="width:70px;height:70px;border:0.5px solid var(--ink-900);display:flex;align-items:flex-end;padding:6px;background:#F4F4F2;color:#131313;">#F4F4F2</div><div style="color:var(--ink-900);text-transform:uppercase;">PAPER</div><div>fondo</div></div>
  <div style="display:flex;flex-direction:column;gap:4px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-500);letter-spacing:0.5px;"><div style="width:70px;height:70px;border:0.5px solid var(--ink-300);display:flex;align-items:flex-end;padding:6px;background:#FF202B;color:#F4F4F2;">#FF202B</div><div style="color:var(--ink-900);text-transform:uppercase;">ACCENT</div><div>acento</div></div>
</div>

El rojo aparece en exactamente cuatro lugares en oa.log:

- El punto en el wordmark — el **mark**.
- El indicador "ahora" en el log — la fila viva.
- El focus ring — accesibilidad.
- El día del Stage card — la fecha de la próxima charla.

Y nada más. Si quisiera usarlo en otro lado, primero tendría que negociar con uno de esos cuatro: "¿pierde su poder si añado un quinto?". La respuesta casi siempre es sí.

## 04 El numeral como sistema

En oa.log todo viene con número. Las secciones (`01 Stage · ahora`, `02 Log completo`). Los items de la tabla del log. Los pasos de cualquier ensayo numerados. Las charlas.

¿Por qué? Tres razones:

1. **Wayfinding.** Saber dónde estás en una lista de 15 items reduce ansiedad — sabes cuánto falta.
2. **Authority.** Lo numerado se siente curado, intencional. Las listas sin número se sienten dispersas.
3. **Visual rhythm.** Los números monoespaciados al borde aportan una columna vertical implícita que estructura sin necesitar marco.

## 05 El costo de la restricción

Toda restricción tiene un costo. Lo que *no* puedo hacer en oa.log:

- Highlights de color cuando un párrafo lo amerita — solo el rojo, y solo en sus 4 usos sagrados.
- Tipografía expresiva (cursive, condensed, slab) para momentos especiales.
- Ilustraciones decorativas. Solo diagramas funcionales si la idea lo pide.
- Backgrounds tonales para diferenciar secciones. Solo hairlines.

El costo es real. A veces escribo un párrafo que claramente quiere ser un callout amarillo, y tengo que pensar cómo lograr el mismo énfasis con un border-left rojo o una blockquote con fondo gris. Es más trabajo. Por eso la disciplina existe — para que la decisión no se tome cada vez.

## 06 El payoff

Después de tres meses con este sistema:

- **Publico más.** No hay decisión de diseño para una nueva entrada — todo encaja por default.
- **Compone solo.** Cualquier nueva sección se ve "del sitio" automáticamente. Cero pesado pasaba con cinco colores.
- **Edad bien.** No tiene tendencias 2025 que se ven cringe en 2027. Es atemporal porque es restringido.

---

El minimalismo editorial no es un estilo. Es una declaración: **"lo que importa es lo que escribo, no cómo lo decoré"**. Para un sitio personal cuyo punto es mostrar pensamiento, no había otra opción honesta.

El próximo founder armando su sitio: empieza por las restricciones, no por las funcionalidades. ¿Qué te niegas a hacer? Esa lista define tu identidad visual más que cualquier moodboard.
