// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.1
// PREGUNTAS DEL JUEGO
// =========================================


// =========================================
// PREGUNTAS GENERALES
// =========================================

const preguntasGenerales = [

    {
        texto: "🔥 Fuego",
        accion: () => filtrarTipo("Fuego")
    },

    {
        texto: "💧 Agua",
        accion: () => filtrarTipo("Agua")
    },

    {
        texto: "🌱 Planta",
        accion: () => filtrarTipo("Planta")
    },

    {
        texto: "⚡ Eléctrico",
        accion: () => filtrarTipo("Eléctrico")
    },

    {
        texto: "🐉 Dragón",
        accion: () => filtrarTipo("Dragón")
    },

    {
        texto: "⭐ Legendario",
        accion: () => filtrarCategoria(
            "legendario",
            "Legendario"
        )
    },

    {
        texto: "✨ Mítico",
        accion: () => filtrarCategoria(
            "mitico",
            "Mítico"
        )
    },

    {
        texto: "🐉 Pseudo",
        accion: () => filtrarCategoria(
            "pseudo",
            "Pseudolegendario"
        )
    },

    {
        texto: "👽 Ultraente",
        accion: () => filtrarCategoria(
            "ultraente",
            "Ultraente"
        )
    },

    {
        texto: "⏳ Paradoja",
        accion: () => filtrarCategoria(
            "paradoja",
            "Paradoja"
        )
    },

    {
        texto: "🌈 Eeveelución",
        accion: () => filtrarCategoria(
            "eevee",
            "Eeveelución"
        )
    },

    {
        texto: "🔥 Inicial",
        accion: () => filtrarCategoria(
            "inicial",
            "Inicial"
        )
    }

];


// =========================================
// PREGUNTAS SOLO LEGENDARIOS
// =========================================

const preguntasLegendarios = [

    {
        texto: "🌍 ¿Es de Kanto?",
        accion: () => filtrarGeneracion(1)
    },

    {
        texto: "⚡ ¿Es de Johto?",
        accion: () => filtrarGeneracion(2)
    },

    {
        texto: "💎 ¿Es de Hoenn?",
        accion: () => filtrarGeneracion(3)
    }

];


// =========================================
// PREGUNTAS SOLO PARADOJAS
// =========================================

const preguntasParadojas = [

    {
        texto: "🦖 Pasado",
        accion: () => filtrarPasado()
    },

    {
        texto: "🤖 Futuro",
        accion: () => filtrarFuturo()
    }

];


// =========================================
// PREGUNTAS SOLO PSEUDOS
// =========================================

const preguntasPseudo = [

    {
        texto: "🐉 Dragón",
        accion: () => filtrarTipo("Dragón")
    },

    {
        texto: "🛡️ Acero",
        accion: () => filtrarTipo("Acero")
    }

];


// =========================================
// PREGUNTAS SOLO MITICOS
// =========================================

const preguntasMiticos = [

    {
        texto: "✨ ¿Es de Kanto?",
        accion: () => filtrarGeneracion(1)
    }

];


// =========================================
// PREGUNTAS SOLO INICIALES
// =========================================

const preguntasIniciales = [

    {
        texto: "🔥 Fuego",
        accion: () => filtrarTipo("Fuego")
    },

    {
        texto: "💧 Agua",
        accion: () => filtrarTipo("Agua")
    },

    {
        texto: "🌱 Planta",
        accion: () => filtrarTipo("Planta")
    }

];


// =========================================
// PREGUNTAS SOLO EEVEE
// =========================================

const preguntasEevee = [

    {
        texto: "⚡ Eléctrico",
        accion: () => filtrarTipo("Eléctrico")
    },

    {
        texto: "❄️ Hielo",
        accion: () => filtrarTipo("Hielo")
    },

    {
        texto: "🌿 Planta",
        accion: () => filtrarTipo("Planta")
    }

];