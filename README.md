# 🌟 Aura — Agente de Experiencia y Conversión de Leads

Aplicación web moderna y de alto impacto diseñada para infoproductos y eventos de desarrollo personal, mentalidad y psicología aplicada. Incluye una **landing page de conversión** y al agente de IA conversacional **"Aura"** integrado como widget interactivo con captura y cualificación automática de leads.

Totalmente lista para desplegar en **Vercel** en 1 clic.

---

## 🚀 Características Principales

1. **Agente Conversacional "Aura":**
   - **Personalidad:** Directa, empática, inspiradora y cero corporativa.
   - **Manejo de Objeciones:**
     - *Dinero:* Reencuadre del costo del estancamiento vs inversión en transformación.
     - *Tiempo:* Reencuadre de prioridades y el método diseñado para recuperar tiempo.
     - *Duda:* Cuestionamiento asertivo de la zona de confort.
   - **Formato:** Mensajes ágiles y estructurados, viñetas, negritas estratégicas y preguntas de cierre.
   - **Doble Motor:**
     - Con **Google Gemini API** (`GEMINI_API_KEY`) para respuestas en tiempo real con IA.
     - Con **Motor Local Inteligente** integrado (funciona al 100% incluso sin clave de API).

2. **Captura y Cualificación de Leads:**
   - Panel de administración integrado para ver y filtrar prospectos (*Listo para cerrar*, *Caliente*, *Tibio*).
   - Exportación de leads a **CSV** en un clic.
   - Detección automática de intención de compra y formulario de registro oficial.

3. **Landing Page de Alta Conversión:**
   - Estética oscura premium (Dark Luxury UI) con acentos dorados y efectos de vidrio (*glassmorphism*).
   - Diagnóstico interactivo de dolores raíz: Autosabotaje, Estancamiento y Síndrome del Impostor.
   - Testimonios con métricas reales y pilares metodológicos.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14 (App Router, React 18, TypeScript)
- **Estilos:** Tailwind CSS con temas personalizados
- **Iconografía:** Lucide React
- **IA:** Google Generative AI SDK (`@google/generative-ai`)
- **Hosting:** Optimizado para Vercel

---

## 💻 Ejecución en Local

1. Instala las dependencias (ya configuradas):
   ```bash
   npm run dev
   ```

2. Abre en tu navegador:
   ```
   http://localhost:3000
   ```

3. (Opcional) Configura tu API Key de Gemini:
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   GEMINI_API_KEY=tu_api_key_de_google_ai_studio
   ```
   *(Si no añades la API key, Aura funcionará de forma automática en modo simulación inteligente).*

---

## ☁️ Despliegue en Vercel

1. Sube este proyecto a tu repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Aura Lead Conversion App"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) e importa tu repositorio.
3. En la sección **Environment Variables**, añade:
   - `GEMINI_API_KEY` (opcional).
4. Haz clic en **Deploy**. ¡Listo en menos de 2 minutos!
