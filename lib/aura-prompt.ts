export const AURA_SYSTEM_PROMPT = `
# Rol y Propósito
Eres "Aura", el Agente de Experiencia y Conversión de Leads para el ecosistema oficial de **Coral Mujaes** (coralmujaes.com), referente internacional en mentalidad imparable, disciplina de alto rendimiento, superación de adicciones/autosabotaje y negocios digitales de alta facturación.

Tu objetivo principal no es simplemente vender, sino **cualificar, conectar con el dolor real desde la verdad cruda, disolver objeciones con firmeza y guiar al lead hacia la acción inmediata** (inscripción a programas como Coral Mujaes University, eventos de inmersión en vivo o mentorías).

# Personalidad y Tono (ADN Coral Mujaes)
- **Tono:** Directo, empático, sin filtros, firme, inspirador y cero corporativo/complaciente. Hablas de tú a tú, con el estándar de una atleta de alto rendimiento y empresaria millonaria.
- **Estilo de comunicación:** Mensajes ágiles y estructurados. Párrafos cortos. Usa viñetas para enumerar. Cero rodeos.
- **Filosofía central:** 
  - La disciplina es libertad.
  - El estancamiento y las excusas ("no tengo dinero", "no tengo tiempo", "lo voy a pensar") cuestan mucho más caro que cualquier programa de transformación.
  - No persigues a nadie: quien no está listo para comprometerse con su propia vida, no califica para el ecosistema.

# Programas y Soluciones Clave de Coral Mujaes
1. **Coral Mujaes University (CMU):** Membresía de acceso total a más de 150 entrenamientos en mentalidad (*mindset*), salud/fitness de alto rendimiento y negocios digitales.
2. **Eventos & Inmersiones de Alto Rendimiento:** Entrenamientos en vivo intensivos para reprogramar patrones inconscientes de autosabotaje y multiplicar resultados.
3. **Mentorías de Negocios Digitales & Cashflow:** Cómo empaquetar conocimiento, crear infoproductos y facturar en grande con marca personal.
4. **Libros Best-Sellers de Coral:** *El poder de la disciplina*, *Cambio radical*, *Yo salí del abismo*, *La fórmula para ganar tu primer millón de dólares*.

# Manejo de Objeciones (Estilo Coral)
- **Objeción de Dinero:** 
  "¿Cuánto dinero ya estás perdiendo cada mes por operar con una mentalidad de escasez y estancamiento? Esto no es un gasto, es la inversión para dejar de conformarte con migajas. El que quiere busca cómo, el que no, busca excusas."
- **Objeción de Tiempo:** 
  "Decir 'no tengo tiempo' es la excusa favorita de la mente para no asumir responsabilidad. Todos tenemos las mismas 24 horas. El programa no te quita tiempo, te enseña a dejar de perderlo en tonterías y priorizar lo que realmente mueve tu aguja."
- **Objeción de 'Lo voy a pensar':**
  "¿Pensar qué exactamente? Pensar no cambia vidas; la acción decisiva sí. Llevas meses o años 'pensándolo' y estás en el mismo lugar. El momento de romper el patrón es ahora."

# Directrices y Restricciones
- **Escucha activa:** Valida siempre lo que comparte el lead antes de dar una respuesta tajante.
- **Límites:** Consultas técnicas complejas de facturación o soporte duro derívalas a soporte humano (soporte@coralmujaes.com).
- **Cero Alucinaciones:** Si no tienes el precio o fecha exacta de un evento específico en vivo, indícalo con transparencia e invítalo a revisar el cupo en el enlace oficial de coralmujaes.com.
- **Formato:** Respuestas optimizadas para lectura rápida en chat. Negritas estratégicas. Termina SIEMPRE con una pregunta abierta o un llamado a la acción específico.
`;

export function generateAuraFallback(userMessage: string, messageHistoryLength: number): {
  content: string;
  quickReplies?: string[];
  cta?: { label: string; url?: string; action?: 'register' | 'open_modal' };
} {
  const text = userMessage.toLowerCase().trim();

  // Objeción de Dinero / Precio
  if (text.includes('precio') || text.includes('cuesta') || text.includes('caro') || text.includes('dinero') || text.includes('plata') || text.includes('costo')) {
    return {
      content: `Te voy a hablar con la verdad que nos caracteriza en el equipo de **Coral Mujaes**:\n\n**¿Cuánto dinero estás perdiendo cada mes por quedarte exactamente en el mismo nivel?**\n\nEl estancamiento mental, la falta de disciplina y el autosabotaje tienen un precio altísimo: oportunidades perdidas, frustración y operar por debajo de tu potencial real.\n\nEsto no es un gasto, es la inversión más rentable de tu vida: tu propia mente. ¿Te gustaría ver las opciones de acceso oficial a **Coral Mujaes University** o a nuestras inmersiones en vivo?`,
      quickReplies: ['Ver opciones de acceso a CMU', '¿Qué incluye la metodología?', 'Tengo dudas sobre mi caso'],
      cta: {
        label: 'Ver Programas Oficiales de Coral',
        action: 'register',
      }
    };
  }

  // Objeción de Tiempo
  if (text.includes('tiempo') || text.includes('ocupado') || text.includes('no alcanzo') || text.includes('no llego')) {
    return {
      content: `Te soy muy directa: **"no tengo tiempo" es el mayor síntoma de que necesitas la metodología de Coral urgente.**\n\nTodos tenemos exactamente las mismas 24 horas. La diferencia entre quien vive quebrado y quien factura en grande no es el tiempo, es la **disciplina implacable** y la claridad para no tolerar distracciones.\n\nEl método de Coral está diseñado para personas con agendas intensas: te enseñamos a eliminar el 80% del ruido mental para que tu ejecución sea letal.\n\n¿Estás dispuesto a dejar de negociar con tus excusas para recuperar tu foco?`,
      quickReplies: ['Sí, estoy listo para el cambio', '¿Cómo son los horarios y módulos?', 'Quiero registrarme ahora'],
      cta: {
        label: 'Asegurar Mi Acceso',
        action: 'register',
      }
    };
  }

  // Lo voy a pensar
  if (text.includes('pensar') || text.includes('despues') || text.includes('luego') || text.includes('duda')) {
    return {
      content: `Sé honesto contigo: **¿qué llevas 'pensando' los últimos 6 meses que todavía no has resuelto?**\n\nLa mente no entrenada siempre busca aplazar el compromiso porque le aterra salir de la zona de confort. Pero mientras tú lo piensas, otros están tomando acción y quedándose con tus resultados.\n\nCoral siempre dice: *"La disciplina es hacer lo que tienes que hacer, tengas ganas o no"*. ¿Vas a dar el paso hoy o seguirás postergando tu potencial?`,
      quickReplies: ['Tienes razón, voy a inscribirme', '¿Cómo inicio hoy mismo?', 'Hablar con un asesor']
    };
  }

  // Estancamiento o "2"
  if (text === '2' || text.includes('estancamiento') || text.includes('meseta') || text.includes('no avanzo')) {
    return {
      content: `Estar en una meseta trabajando sin parar es agotador. Pero aquí está la clave que enseña **Coral Mujaes**:\n\nEl estancamiento casi nunca es falta de esfuerzo físico; es operar con un **termostato financiero y mental desactualizado**. Estás tolerando un estándar que ya no te pertenece.\n\nPara poder orientarte al programa exacto de Coral: **¿tienes un negocio propio o buscas escalar profesionalmente tus ingresos?**`,
      quickReplies: ['Tengo un negocio/marca propia', 'Soy profesional independiente', 'Quiero crear mi negocio digital']
    };
  }

  // Autosabotaje / Procrastinación o "1"
  if (text === '1' || text.includes('autosabotaje') || text.includes('procrastin')) {
    return {
      content: `El autosabotaje es una trampa mental conocida. Sabes exactamente qué hacer, pero tu mente busca cualquier distracción para mantenerte a salvo en lo conocido.\n\nCoral misma superó batallas brutales de adicción y bulimia antes de construir su imperio de millones de dólares. Por eso aquí no enseñamos motivación barata, sino **reprogramación psicológica y disciplina férrea**.\n\n¿En qué área puntual sientes que más te estás saboteando hoy: en tus hábitos, en tus ventas o en tu visibilidad?`,
      quickReplies: ['En mis hábitos diarios', 'En mis ventas y precios', 'En lanzarme con visibilidad']
    };
  }

  // Falta de claridad o "3"
  if (text === '3' || text.includes('claridad') || text.includes('impostor') || text.includes('ideas')) {
    return {
      content: `Tener mil ideas y cero foco es la receta para la frustración. Y el **síndrome del impostor** aparece cuando tu autoimagen todavía no se cree el nivel al que quieres llegar.\n\nEn el ecosistema de Coral trabajamos en elevar tu identidad y darte una arquitectura de prioridades para que cobres con autoridad y lideres tu nicho.\n\n¿Te frena más no tener una estructura clara o la inseguridad interna al momento de cobrar lo que vales?`,
      quickReplies: ['Me falta estructura y método', 'Me frena la inseguridad interna', 'Ambas cosas']
    };
  }

  // Registro / Unirme
  if (text.includes('registrar') || text.includes('inscribir') || text.includes('unirme') || text.includes('comprar') || text.includes('cmu') || text.includes('cupo')) {
    return {
      content: `¡Esa es la postura de quien decide ganar y dejar de negociar con la mediocridad! 🔥\n\nEl siguiente paso es asegurar tu lugar en el programa oficial. Te enviaremos de inmediato los accesos a la plataforma privada y la bienvenida al ecosistema de **Coral Mujaes**.\n\n¿Damos el salto ahora mismo?`,
      cta: {
        label: 'Asegurar Acceso Oficial en coralmujaes.com',
        action: 'register'
      },
      quickReplies: ['Completar mi acceso ahora', '¿Qué métodos de pago aceptan?', 'Quiero hablar con un asesor']
    };
  }

  // Saludo o entrada inicial
  if (messageHistoryLength <= 1 || text.includes('hola') || text.includes('buenas') || text.includes('coral') || text.includes('info')) {
    return {
      content: `¡Hola! Qué gusto saludarte. Soy **Aura**, del equipo oficial de **Coral Mujaes**.\n\nAquí no venimos a perder el tiempo con rodeos ni motivación pasajera. Estamos para ayudarte a quebrar de raíz los bloqueos que te tienen operando a media máquina.\n\nPara ir directo al grano: **¿cuál de estos 3 obstáculos describe mejor tu situación actual?**`,
      quickReplies: [
        '1. Autosabotaje y falta de disciplina',
        '2. Estancamiento (mucho esfuerzo, ingresos en meseta)',
        '3. Falta de claridad y síndrome del impostor'
      ]
    };
  }

  // Fallback genérico
  return {
    content: `Te entiendo perfectamente. Como siempre repite Coral: *"El dolor de la disciplina pesa onzas, pero el dolor del arrepentimiento pesa toneladas"*\n\nNuestros programas como **Coral Mujaes University** y las mentorías de alto rendimiento están creados precisamente para darte las herramientas psicológicas y estratégicas que destruyen ese bloqueo.\n\nSi solucionaras esto en los próximos 30 días: **¿cuál sería tu siguiente gran meta financiera o profesional?**`,
    quickReplies: [
      'Multiplicar mis ingresos digitales',
      'Desarrollar disciplina inquebrantable',
      'Ver los programas disponibles'
    ]
  };
}
