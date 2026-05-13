---
title: "Cómo construir un agente de WhatsApp con memoria"
description: "Lessons learned construyendo kapso: el stack, las trampas de Meta, y por qué la memoria persistente cambia todo en B2B mexicano."
date: 2026-04-22
publishDate: 2026-04-22
draft: false
kind: "talk"
status: "past"
category: "Talk · Founders MX Live"
event: "Founders MX Live"
venue: ""
location: "Ciudad de México"
duration: "20 min"
language: "ES"
tags: ["whatsapp", "agentes IA", "Claude", "B2B", "México", "kapso"]
---

WhatsApp es el canal con mejor ROI de IA en México, pero el ecosistema de Meta para Business API es un agujero negro de burocracia. Esta charla repasa cómo construí **kapso** — un agente con memoria persistente que recuerda a tus clientes entre conversaciones — sin morir en el intento.

## 01 El stack

- **WhatsApp Business API** vía un BSP confiable (no te encariñes con el primero — habrá churn).
- **Anthropic Claude** para el agente con system prompts especializados por vertical.
- **Supabase pgvector** para memoria semántica de clientes.
- **Redis** para session state durante la ventana de 24h de Meta.

## 02 La trampa de Meta

Meta Business Platform tiene tres trampas que cuestan tiempo:

- **BSPs (Business Solution Providers)** — todos cobran feature negotiation, no precio.
- **Plantillas aprobadas** — cualquier mensaje fuera de la ventana de 24h necesita pre-approval. Aprobaciones tardan 2-5 días.
- **La ventana 24h** — solo puedes responder libremente las primeras 24h después del último mensaje del cliente. Después: plantillas.

## 03 Memoria persistente: el unlock

El agente que recuerda al cliente entre conversaciones cierra **3× más** que uno reactivo en mis tests. La memoria que importa:

- Lo que ya cotizó.
- Las objeciones que mencionó la última vez.
- El nombre de su producto, su industria, su Q.
- Si está en exploración o en compra.

Eso lo metes en un vector store por `customer_id` y lo retrieves al inicio de cada conversación. Cambia totalmente el feel — el cliente siente continuidad, no soporte tier 1.

## 04 Numbers from the field

12,000 conversaciones procesadas en producción a la fecha de la charla. Métricas:

- **87%** resolución en primer touch (sin escalation humana).
- **42 seg** tiempo medio de respuesta.
- **3.1×** conversion vs. el agente reactivo que tenía antes.

---

Si construyes en B2B mexicano, WhatsApp + agente con memoria es probablemente el ROI más alto que vas a sacar de IA este año. Pero el costo de entrada (Meta, BSPs, plantillas) es real. Empieza con esta charla como atajo.

> Grabación pendiente — el evento fue privado. Las slides están a petición. Escribe a [osvaldo@creatorscrate.cc](mailto:osvaldo@creatorscrate.cc).
