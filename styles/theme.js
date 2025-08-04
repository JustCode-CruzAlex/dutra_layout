/* =============================================================================
   INSTITUTO DUTRA - SISTEMA DE TEMAS INTELIGENTE
   Mude apenas 1 linha e toda a aplicação muda!
   ============================================================================= */

// 🎯 CARREGA TEMA SALVO OU USA PADRÃO
const savedTheme = localStorage.getItem('instituto_dutra_theme');
const currentTheme = savedTheme || 'light2'; // Opções: 'light', 'light2' (padrão)

// 🎨 PALETAS DISPONÍVEIS
const THEMES = {
    light: {
        name: 'Instituto Dutra Light',
        description: 'Paleta terrosa clássica original',
        colors: {
            primary: '#3A4A3A',
            primaryLight: '#556B55',
            accentBeige: '#9A8364',
            neutralWhite: '#F0F0EF',
            backgroundLight: '#B5B6B1',
            backgroundLighter: '#E8E6E3',
            backgroundGradient: '#A7A49C',
            textPrimary: '#3A4A3A',
            textSecondary: '#556B55',
            textMuted: '#646464',
            textPlaceholder: '#8A8F88',
            borderLight: '#B5B6B1',
            borderFocus: '#3A4A3A',
            successColor: '#9A8364',
            errorColor: '#C4B9B3',
            messageReceivedBg: '#E0DDD8',
            messageSentBg: '#3A4A3A',
            shadowSoft: 'rgba(58, 74, 58, 0.08)',
            shadowMedium: 'rgba(58, 74, 58, 0.12)',
            shadowButton: 'rgba(58, 74, 58, 0.3)',
            focusRing: 'rgba(58, 74, 58, 0.1)'
        }
    },
    
    light2: {
        name: 'Instituto Dutra Light 2',
        description: 'Tema claro alternativo com toques dourados',
        colors: {
            primary: '#9D836A',         /* Dourado principal nos headers/botões */
            primaryLight: '#B8956A',    /* Dourado mais claro */
            accentBeige: '#3A4A3A',          /* VERDE nos detalhes - ícones, avatars */
            neutralWhite: '#FFFFFF',         /* Branco puro para cards */
            backgroundLight: '#E8E9E3',      /* Background mais claro */
            backgroundLighter: '#DBDCD5',    /* Background principal mais claro */
            backgroundGradient: '#D0D1CB',   /* Gradiente suave */
            textPrimary: '#4A4A4A',          /* Texto escuro para contraste */
            textSecondary: '#3A4A3A',        /* VERDE nos labels e subtítulos importantes */
            textMuted: '#556B55',            /* Verde acinzentado para textos auxiliares */
            textPlaceholder: '#8A8F88',      /* Verde esverdeado para placeholders */
            borderLight: '#C8C9C3',          /* Bordas sutis */
            borderFocus: '#3A4A3A',          /* Bordas VERDES para foco */
            successColor: '#3A4A3A',         /* VERDE para badges de sucesso */
            errorColor: '#C4B9B3',           /* Tom rosado suave */
            messageReceivedBg: '#F0F0EF',    /* Cards brancos para contraste */
            messageSentBg: '#9D836A',        /* Dourado mensagens enviadas */
            shadowSoft: 'rgba(58, 74, 58, 0.08)',    /* Sombras verdes suaves */
            shadowMedium: 'rgba(58, 74, 58, 0.12)',  /* Sombras verdes médias */
            shadowButton: 'rgba(157, 131, 106, 0.25)', /* Sombra dourada nos botões */
            focusRing: 'rgba(58, 74, 58, 0.10)'      /* Anel de foco verde */
        }
    }
};

// 🚀 FUNÇÃO QUE APLICA O TEMA
function applyTheme(themeName) {
    const theme = THEMES[themeName];
    if (!theme) {
        console.error(`Tema '${themeName}' não encontrado!`);
        return;
    }
    
    const root = document.documentElement;
    
    // Aplica todas as cores do tema nas variáveis CSS
    Object.entries(theme.colors).forEach(([key, value]) => {
        // Converte camelCase para kebab-case
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
    });
    
    console.log(`✅ Tema aplicado: ${theme.name} - ${theme.description}`);
}

// 🎯 APLICA O TEMA ATUAL AUTOMATICAMENTE
document.addEventListener('DOMContentLoaded', function() {
    applyTheme(currentTheme);
});

// 🛠️ FUNÇÕES UTILITÁRIAS PARA DEBUGGING
window.switchTheme = function(themeName) {
    applyTheme(themeName);
    
    // Salva a preferência no localStorage
    localStorage.setItem('instituto_dutra_theme', themeName);
    
    console.log(`🎨 Tema alterado para: ${THEMES[themeName]?.name || 'Desconhecido'}`);
};

window.listThemes = function() {
    console.log('🎨 Temas disponíveis:');
    Object.entries(THEMES).forEach(([key, theme]) => {
        console.log(`  ${key}: ${theme.name} - ${theme.description}`);
    });
    console.log('\n💡 Para trocar: switchTheme("light") ou switchTheme("light2")');
};

// Mostra tema atual no console
console.log(`🎨 Instituto Dutra - Tema ativo: ${THEMES[currentTheme]?.name || 'Desconhecido'}`);
console.log('💡 Digite listThemes() para ver todas as opções');