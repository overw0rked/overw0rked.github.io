---
title: "Por qué oa.log existe"
slug: "por-que-oalog-existe"
description: "Manifiesto. Por qué construí este sitio en lugar de seguir esparciendo identidad entre cinco plataformas que no se hablan."
date: 2026-04-10
publishDate: 2026-04-10
draft: false
entry_kind: "write"
category: "Manifiesto"
readingTime: "5 min"
weight: 2
tags: ["manifesto", "personal brand", "meta"]
---

Hasta hace tres meses mi presencia digital estaba esparcida en cinco lugares que no se hablaban entre sí. Y cada uno mostraba un Osvaldo distinto, incompleto, y sin contexto.

Mi código vivía en **GitHub**, donde un visitante veía un dev solitario con repos sin README. Mis posts más serios vivían en un **Medium abandonado**. Las charlas en **YouTube**, con thumbnails de hace años. El contenido visual en **Instagram**, donde la fuente de mi identidad pública debería estar — pero sin contexto técnico, sin link a nada que cierre el loop. Y una **landing de Creators Crate** que mostraba el founder pero no la persona.

Cinco identidades parciales. Ningún hilo que las conectara.

## 01 El costo de la fragmentación

La fragmentación tiene un costo emocional para quien la sufre, y un costo estratégico para quien la observa.

<div class="frag-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:28px 0;">
  <div style="border:0.5px solid var(--ink-300);padding:16px 18px;"><div style="font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--ink-500);font-family:'JetBrains Mono',monospace;margin-bottom:6px;">Para mí</div><div style="font-size:14px;color:var(--ink-900);line-height:1.5;">Cada plataforma me pedía ser una versión distinta. Tono distinto. Audiencia distinta. <b>Mantener cinco "yos" cansa.</b></div></div>
  <div style="border:0.5px solid var(--ink-300);padding:16px 18px;"><div style="font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--ink-500);font-family:'JetBrains Mono',monospace;margin-bottom:6px;">Para quien busca</div><div style="font-size:14px;color:var(--ink-900);line-height:1.5;">Inversionista, posible socio, organizador de evento — nadie quería juntar piezas. Si no contesto en una pieza, lo pierdo.</div></div>
  <div style="border:0.5px solid var(--ink-300);padding:16px 18px;"><div style="font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--ink-500);font-family:'JetBrains Mono',monospace;margin-bottom:6px;">Para el algoritmo</div><div style="font-size:14px;color:var(--ink-900);line-height:1.5;">Cada plataforma me empujaba a su nicho. <b>Posts virales en una</b>, irrelevantes en otra. Sin compounding.</div></div>
  <div style="border:0.5px solid var(--ink-300);padding:16px 18px;"><div style="font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--ink-500);font-family:'JetBrains Mono',monospace;margin-bottom:6px;">Para mi marca</div><div style="font-size:14px;color:var(--ink-900);line-height:1.5;">La through-line — "founder que construye en MX, escribe, habla, y hace contenido" — <b>no existía en ningún lado</b>.</div></div>
</div>

Y el costo más grande: **no podía construir compounding**. Cada plataforma era un cubo separado. Mis followers de Instagram no veían mis builds. Mis seguidores de GitHub no leían mis ensayos. Y yo no podía decir "ve mi log" porque no había un log.

## 02 La decisión: un solo log

La hipótesis: si todo lo que hago — código, escritos, charlas, contenido — vive en un solo lugar con un solo tag de tipo (`build`, `write`, `talk`, `make`), entonces la *persona* emerge sin que yo la cure. La emerge la suma.

> No soy un product person que también escribe. No soy un creator que también construye. Soy el log de todo eso junto. La distinción entre roles es del observador, no mía.

Es una decisión de identidad antes que de UX. Si mi sitio dice "aquí está mi código" y "aquí están mis escritos" en navegaciones separadas, estoy aceptando que esas son cosas diferentes. Y para mí no lo son. Son la misma persona haciendo cosas distintas el lunes y el jueves.

## 03 La estructura: kind tags > pages separadas

La arquitectura del sitio refleja la decisión:

- Una sola tabla — el log.
- Cuatro tipos de entrada: `build`, `write`, `talk`, `make`.
- Filtros para verlas separadas *cuando quieras*, pero el default es todo junto.
- Cada entrada con su slug propio si lo amerita.

El visitante que llega ve el log completo en orden cronológico. Lo más reciente es lo que estoy haciendo *ahora*. Si quiere solo charlas, filtra; si solo lectura, filtra. Pero el primer encuentro es la persona, no el cubo.

## 04 Tech choice: nada

El sitio es un solo `index.html` estático en GitHub Pages. Cero build step. Cero framework. Cero CMS. Cero hosting que pagar.

Esto es a propósito. Cuando el sitio es la cosa más simple que puede funcionar, no hay excusa para no actualizarlo. Agregar una entrada es agregar un `<tr>`. Editar el bio es editar un párrafo. `git push` y queda live.

La inversión en arquitectura técnica baja muchas veces es la excusa para no escribir. Si tu blog requiere 4 horas de setup mental para publicar, no vas a publicar. **Friction inversa: el sitio más simple gana porque lo actualizas más.**

## 05 El nombre: oa.log

Tres letras + un punto + una extensión que técnicamente no existe como TLD pero que tipográficamente lee como *archivo de logs*. Es lo que es: el log de Osvaldo Ayala. No es marca personal envuelta en metáforas. Es la cosa.

El punto está en rojo. Es el mark. Cuando ves `oa`<span style="color:var(--accent);">.</span>`log` entiendes inmediatamente lo que es: dato técnico, archivo abierto, no curaduría editorial. Eso es honesto.

---

Si todo esto suena demasiado teórico para algo tan simple como "una página personal", es porque la decisión es teórica. La página es solo el efecto.

El próximo founder que esté esparcido entre cinco plataformas — y son muchos — debería verlo y pensar: *"¿yo qué tan lejos estoy de tener mi propio log?"* Más cerca de lo que crees. Empieza por elegir el nombre.
