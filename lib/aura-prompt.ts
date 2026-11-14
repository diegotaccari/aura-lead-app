export const AURA_SYSTEM_PROMPT = `
# Rol y Propósito
Eres "Aura", el Agente de Experiencia y Conversión de Leads para nuestro ecosistema de infoproductos y eventos de alto impacto enfocados en mindset, psicología y desarrollo personal/profesional. Tu objetivo principal no es solo "vender", sino **cualificar, generar empatía profunda, resolver objeciones con firmeza y guiar al lead hacia la acción** (inscripción a un evento o compra del programa).

# Personalidad y Tono
- **Tono:** Directo, empático, seguro de sí mismo, inspirador y cero corporativo/robótico. Hablas de tú a tú, con autoridad pero con total calidez humana.
- **Estilo de comunicación:** Mensajes ágiles y estructurados. Evita los bloques de texto gigantes. Usa viñetas o párrafos cortos si vas a dar varios puntos.
- **Filosofía:** No persigues a nadie; ayudas a la persona a darse cuenta de que el estancamiento cuesta más que la solución. Desafías amablemente las excusas comunes (tiempo, dinero, "lo voy a pensar").

# Objetivos de la Conversación
1. **Descubrir el Dolor Raíz:** Identificar exactamente qué obstáculo o frustración trajo al lead al embudo (ej. falta de claridad, bloqueo en su negocio, síndrome del impostor, desorganización, autosabotaje).
2. **Cualificar al Lead:** Evaluar sutilmente su nivel de compromiso y urgencia.
3. **Aterrizar la Solución:** Conectar su dolor directamente con el valor del infoproducto o evento.
4. **Llamada a la Acción (CTA) Clara:** Dirigirlo siempre hacia un único siguiente paso (ej: completar el registro, ver la clase, asegurar su cupo).

# Directrices de Comportamiento y Manejo de Objeciones
- **Escucha Activa:** Valida siempre lo que el usuario comparte antes de dar una respuesta o recomendación.
- **Manejo de Objeción de Dinero:** Recuadrale el costo de no resolver el problema actual. El foco es la inversión en su transformación, no un gasto. Hazle ver cuánto le cuesta seguir en la misma situación por 6 meses más.
- **Manejo de Objeción de Tiempo:** Recuadrale que el método está diseñado justamente para optimizar y recuperar tiempo, y que "no tener tiempo" suele ser síntoma de falta de prioridades claras o sobrecarga mental.
- **Límites:** Si el usuario hace preguntas técnicas complejas sobre facturación específica, reembolsos o soporte técnico duro que requieran intervención humana, deriva amablemente indicando que el equipo humano lo atenderá con gusto.
- **Cero Alucinaciones:** No inventes precios, fechas de eventos o características que no te hayan sido suministradas. Si no tienes el dato exacto, indícalo de forma transparente y sugiere asegurar su lugar en el enlace oficial.

# Formato de Salida
- Respuestas optimizadas para lectura rápida (ideal para WhatsApp o web chat).
- Utiliza negritas estratégicamente para resaltar conceptos clave.
- Termina siempre con una pregunta abierta o un llamado a la acción específico que mantenga la conversación avanzando.
`;

export interface FallbackRule {
  keywords: string[];
  reply: string;
  quickReplies?: string[];
  cta?: { label: string; url?: string; action?: 'register' | 'open_modal' };
}

export function generateAuraFallback(userMessage: string, messageHistoryLength: number): {
  content: string;
  quickReplies?: string[];
  cta?: { label: string; url?: string; action?: 'register' | 'open_modal' };
} {
  const text = userMessage.toLowerCase().trim();

  // Objeción de Dinero / Precio
  if (text.includes('precio') || text.includes('cuesta') || text.includes('caro') || text.includes('dinero') || text.includes('plata') || text.includes('costo')) {
    return {
      content: `Totalmente entendible que cuides tu inversión. Pero déjame hacerte una pregunta honesta:\n\n**¿Cuánto te está costando quedarte exactamente en el mismo lugar los próximos 6 meses?**\n\nEl estancamiento mental y operativo tiene un precio altísimo: oportunidades perdidas, energía desgastada y la frustración diaria de saber que das para mucho más.\n\nEsto no es un gasto, es la palanca para destrabar tu siguiente nivel. El acceso al evento de inmersión tiene un valor simbólico frente al impacto que genera. ¿Te gustaría ver los detalles del pase oficial?`,
      quickReplies: ['Quiero ver los cupos disponibles', '¿Qué incluye exactamente el programa?', 'Todavía tengo dudas'],
      cta: {
        label: 'Ver Cupos y Registro Oficial',
        action: 'register',
      }
    };
  }

  // Objeción de Tiempo
  if (text.includes('tiempo') || text.includes('ocupado') || text.includes('no alcanzo') || text.includes('no llego')) {
    return {
      content: `Te soy muy directa: **"no tener tiempo" es el mayor síntoma de que necesitas esto con urgencia.**\n\nCuando no tienes un sistema de claridad y enfoque, tu energía se dispersa apagando fuegos en vez de construir resultados.\n\nEl método está diseñado específicamente para personas ocupadas: no se trata de sumar más tareas a tu agenda, sino de **eliminar el 80% de la fricción mental** que te drena el día.\n\nSi pudieras recuperar 2 horas diarias de enfoque real, ¿valdría la pena dedicar una tarde a reestructurarte?`,
      quickReplies: ['Totalmente, necesito ese enfoque', '¿En qué horarios se realiza?', 'Quiero registrarme ahora'],
      cta: {
        label: 'Asegurar mi Pase',
        action: 'register',
      }
    };
  }

  // Lo voy a pensar / Duda
  if (text.includes('pensar') || text.includes('despues') || text.includes('luego') || text.includes('duda')) {
    return {
      content: `Respeto tu espacio, pero quiero que te hagas una pregunta con total sinceridad:\n\n**¿Qué información adicional necesitas realmente que no tengas ahora mismo?**\n\nCasi siempre "lo voy a pensar" es la mente intentando mantenernos en la zona cómoda, donde nada cambia pero todo sigue costando. El cambio no ocurre cuando estás 100% seguro, ocurre cuando decides dar el primer paso.\n\nLos cupos son limitados por la dinámica en vivo. ¿Prefieres asegurar tu lugar hoy o correr el riesgo de quedarte fuera?`,
      quickReplies: ['Tienes razón, voy a registrarme', '¿Qué pasa si no puedo asistir en vivo?', 'Contáctame más tarde']
    };
  }

  // Selección de dolor: Estancamiento o "2"
  if (text === '2' || text.includes('estancamiento') || text.includes('meseta') || text.includes('no avanzo')) {
    return {
      content: `El **estancamiento** es brutalmente desgastante. Trabajar de sol a sol y sentir que la aguja no se mueve drena cualquier motivación.\n\nCasi siempre el problema **no es tu disciplina ni tu talento**, sino estar operando bajo patrones de saturación y falta de tracción estratégica.\n\nPara poder orientarte con precisión: **¿a qué te dedicas actualmente y cuánto tiempo llevas sintiendo esta meseta?**`,
      quickReplies: ['Soy profesional independiente', 'Tengo un negocio/emprendimiento', 'Trabajo en relación de dependencia']
    };
  }

  // Selección de dolor: Autosabotaje / Procrastinación o "1"
  if (text === '1' || text.includes('autosabotaje') || text.includes('procrastin')) {
    return {
      content: `El **autosabotaje** es frustrante porque sabes de sobra lo que deberías hacer, pero hay un freno invisible que te desconecta al momento de ejecutar.\n\nEso no es pereza; es una respuesta psicológica a la incertidumbre, el miedo al juicio o la sobreexigencia.\n\nEn nuestro programa desarmamos ese disparador desde la raíz cognitiva para que la acción sea natural y sostenida.\n\nCuéntame: **¿en qué proyecto o meta sientes que más te estás frenando hoy?**`,
      quickReplies: ['Lanzar mi propio proyecto', 'Escalar mis ventas y clientes', 'Organizar mis hábitos diarios']
    };
  }

  // Selección de dolor: Falta de claridad / Impostor o "3"
  if (text === '3' || text.includes('claridad') || text.includes('impostor') || text.includes('ideas')) {
    return {
      content: `Tener mil ideas y cero tracción es una trampa mental muy común. Y cuando el **síndrome del impostor** se cuela, dudas de cobrar lo que vales o de dar ese siguiente paso que sabes que mereces.\n\nLa claridad no se piensa: **la claridad se construye con método**.\n\n¿Sientes que te falta una estructura paso a paso para priorizar, o más bien la confianza interna para dar el salto?`,
      quickReplies: ['Me falta una estructura clara', 'Me frena la inseguridad interna', 'Ambas cosas']
    };
  }

  // Registro / Quiero unirme
  if (text.includes('registrar') || text.includes('inscribir') || text.includes('unirme') || text.includes('comprar') || text.includes('cupo')) {
    return {
      content: `¡Esa es la actitud de quien toma el control de su vida! 🚀\n\nEl siguiente paso es muy simple: completa tu registro en el enlace oficial para que el sistema te reserve el cupo y te envíe los accesos exclusivos por correo y WhatsApp.\n\n¿Estás listo para dar el salto definitivo?`,
      cta: {
        label: 'Completar Registro Ahora',
        action: 'register'
      },
      quickReplies: ['Completar mi registro', '¿Cuánto tiempo dura el evento?', '¿Se graban las sesiones?']
    };
  }

  // Saludo o entrada inicial
  if (messageHistoryLength <= 1 || text.includes('hola') || text.includes('buenas') || text.includes('info')) {
    return {
      content: `¡Hola! Qué gusto saludarte. Soy **Aura**.\n\nEstoy aquí para ayudarte a identificar qué patrones o bloqueos te están impidiendo alcanzar el siguiente nivel en tu desarrollo y resultados.\n\nPara ir al grano y darte el máximo valor: **¿qué obstáculo sientes que más te está costando resolver en este momento?**`,
      quickReplies: [
        '1. Autosabotaje y postergación',
        '2. Estancamiento (trabajo mucho, poco avance)',
        '3. Falta de claridad y síndrome del impostor'
      ]
    };
  }

  // Respuesta por defecto con validación y pregunta de cualificación
  return {
    content: `Te escucho con total atención. Reconocer ese punto es el 50% de la solución, porque la mayoría de las personas prefieren ignorarlo hasta que el dolor es insostenible.\n\nLo que trabajamos en este ecosistema no es teoría motivacional vacía, sino **herramientas de psicología aplicada y reprogramación de hábitos** diseñadas para que la ejecución sea implacable.\n\nSi hoy resolvieras este obstáculo de raíz: **¿qué impacto concreto tendría en tus ingresos o en tu tranquilidad en los próximos 90 días?**`,
    quickReplies: [
      'Multiplicaría mis resultados',
      'Recuperaría mi paz mental',
      'Quiero ver el programa completo'
    ]
  };
}
