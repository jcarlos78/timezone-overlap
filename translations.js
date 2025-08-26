// Internationalization (i18n) translations
const translations = {
    en: {
        // Page title and main headers
        pageTitle: 'Time Zone Visualizer - Team Overlap',
        mainTitle: 'Time Zone Overlap Visualizer',
        mainSubtitle: 'Find ideal times for meetings between global teams',
        
        // Time zone selector
        addTimezone: 'Add Time Zone',
        searchTimezone: 'Search Time Zone',
        typeCityName: 'Type the city name...',
        selectTimezone: 'Select a time zone...',
        workStartTime: 'Work Start Time',
        workEndTime: 'Work End Time',
        
        // Time zones
        timezones: {
            'America/Sao_Paulo': 'São Paulo, Brazil',
            'America/New_York': 'New York, USA',
            'America/Los_Angeles': 'Los Angeles, USA',
            'Europe/London': 'London, United Kingdom',
            'Europe/Paris': 'Paris, France',
            'Europe/Amsterdam': 'Amsterdam, Netherlands',
            'Asia/Tokyo': 'Tokyo, Japan',
            'Asia/Shanghai': 'Shanghai, China',
            'Asia/Kolkata': 'Mumbai, India',
            'Australia/Sydney': 'Sydney, Australia',
            'Pacific/Auckland': 'Auckland, New Zealand',
            'America/Mexico_City': 'Mexico City, Mexico',
            'America/Argentina/Buenos_Aires': 'Buenos Aires, Argentina',
            'Europe/Berlin': 'Berlin, Germany',
            'Africa/Cairo': 'Cairo, Egypt'
        },
        
        // Availability matrix
        availabilityDuring: 'Availability During Your Work Hours',
        seeWhoAvailable: 'See who is available during each hour of your work schedule to plan meetings:',
        yourTime: 'Your Time',
        available: 'available',
        idealMeetingTime: 'Ideal meeting time',
        working: 'Working',
        offHours: 'Off hours',
        bestMeetingTimes: 'Best Meeting Times',
        people: 'people',
        
        // Current times
        currentTimes: 'Current Times',
        workHours: 'Work Hours',
        globalOverlapFound: 'Global Overlap Window Found:',
        idealTimeEveryone: 'Ideal time - everyone is working',
        partialOverlaps: 'Partial Overlaps',
        noSimultaneousTime: 'There is no time when everyone works simultaneously, but there are overlaps between some time zones. Use the availability matrix below to find the best times.',
        noOverlap: 'No Overlap',
        noCommonHours: 'There are no common hours between the selected time zones. Consider adjusting work hours to create collaboration windows.',
        
        // Management
        manageTimezones: 'Manage Time Zones',
        timezonesAdded: 'time zones added',
        selectPrimaryTimezone: 'Select your primary time zone to see availability of others during your work hours:',
        removeTimezone: 'Remove time zone',
        primary: 'Primary',
        addMoreZones: 'Add more zones to compare',
        noTimezonesYet: 'No time zones added yet.',
        useFormAbove: 'Use the form above to add time zones.',
        
        // Timeline and legend
        timezoneTimeline: 'Time Zone Timeline',
        legend: 'Legend:',
        workHoursLegend: 'Work Hours',
        allTimezonesOverlap: 'All Time Zones Overlap',
        currentTime: 'Current Time',
        
        // Welcome message
        welcomeTitle: 'Welcome to the Time Zone Visualizer',
        welcomeMessage: 'Add at least two time zones to visualize overlaps and find the best times for global meetings.',
        tipMessage: 'Tip: Start by adding your team\'s time zones using the form above',
        
        // Languages
        language: 'Language',
        english: 'English',
        portuguese: 'Português',
        dutch: 'Nederlands'
    },
    pt: {
        // Títulos da página e cabeçalhos principais
        pageTitle: 'Visualizador de Fusos Horários - Overlap de Equipes',
        mainTitle: 'Visualizador de Sobreposição de Fusos Horários',
        mainSubtitle: 'Encontre os horários ideais para reuniões entre equipes globais',
        
        // Seletor de fuso horário
        addTimezone: 'Adicionar Fuso Horário',
        searchTimezone: 'Pesquisar Fuso Horário',
        typeCityName: 'Digite o nome da cidade...',
        selectTimezone: 'Selecione um fuso horário...',
        workStartTime: 'Início do Expediente',
        workEndTime: 'Fim do Expediente',
        
        // Fusos horários
        timezones: {
            'America/Sao_Paulo': 'São Paulo, Brasil',
            'America/New_York': 'Nova York, EUA',
            'America/Los_Angeles': 'Los Angeles, EUA',
            'Europe/London': 'Londres, Reino Unido',
            'Europe/Paris': 'Paris, França',
            'Europe/Amsterdam': 'Amsterdã, Holanda',
            'Asia/Tokyo': 'Tóquio, Japão',
            'Asia/Shanghai': 'Xangai, China',
            'Asia/Kolkata': 'Mumbai, Índia',
            'Australia/Sydney': 'Sydney, Austrália',
            'Pacific/Auckland': 'Auckland, Nova Zelândia',
            'America/Mexico_City': 'Cidade do México, México',
            'America/Argentina/Buenos_Aires': 'Buenos Aires, Argentina',
            'Europe/Berlin': 'Berlim, Alemanha',
            'Africa/Cairo': 'Cairo, Egito'
        },
        
        // Matriz de disponibilidade
        availabilityDuring: 'Disponibilidade Durante Seu Expediente',
        seeWhoAvailable: 'Veja quem está disponível durante cada hora do seu expediente para agendar reuniões:',
        yourTime: 'Seu Horário',
        available: 'disponível',
        idealMeetingTime: 'Horário ideal para reunião',
        working: 'Trabalhando',
        offHours: 'Fora do expediente',
        bestMeetingTimes: 'Melhores Horários para Reuniões',
        people: 'pessoas',
        
        // Horários atuais
        currentTimes: 'Horários Atuais',
        workHours: 'Expediente',
        globalOverlapFound: 'Janela de Sobreposição Global Encontrada:',
        idealTimeEveryone: 'Horário ideal - todos estão trabalhando',
        partialOverlaps: 'Sobreposições Parciais',
        noSimultaneousTime: 'Não há um horário em que todos trabalhem simultaneamente, mas há sobreposições entre alguns fusos horários. Use a matriz de disponibilidade abaixo para encontrar os melhores horários.',
        noOverlap: 'Nenhuma Sobreposição',
        noCommonHours: 'Não há nenhum horário em comum entre os fusos horários selecionados. Considere ajustar os horários de trabalho para criar janelas de colaboração.',
        
        // Gerenciamento
        manageTimezones: 'Gerenciar Fusos Horários',
        timezonesAdded: 'fusos adicionados',
        selectPrimaryTimezone: 'Selecione seu fuso horário principal para ver a disponibilidade dos outros durante seu expediente:',
        removeTimezone: 'Remover fuso horário',
        primary: 'Principal',
        addMoreZones: 'Adicione mais fusos para comparar',
        noTimezonesYet: 'Nenhum fuso horário adicionado ainda.',
        useFormAbove: 'Use o formulário acima para adicionar fusos horários.',
        
        // Timeline e legenda
        timezoneTimeline: 'Timeline de Fusos Horários',
        legend: 'Legenda:',
        workHoursLegend: 'Horário de Trabalho',
        allTimezonesOverlap: 'Sobreposição de Todos os Fusos',
        currentTime: 'Horário Atual',
        
        // Mensagem de boas-vindas
        welcomeTitle: 'Bem-vindo ao Visualizador de Fusos Horários',
        welcomeMessage: 'Adicione pelo menos dois fusos horários para visualizar as sobreposições e encontrar os melhores horários para reuniões globais.',
        tipMessage: 'Dica: Comece adicionando os fusos horários da sua equipe usando o formulário acima',
        
        // Idiomas
        language: 'Idioma',
        english: 'English',
        portuguese: 'Português',
        dutch: 'Nederlands'
    },
    nl: {
        // Paginatitel en hoofdkoppen
        pageTitle: 'Tijdzone Visualizer - Team Overlap',
        mainTitle: 'Tijdzone Overlap Visualizer',
        mainSubtitle: 'Vind ideale tijden voor vergaderingen tussen wereldwijde teams',
        
        // Tijdzone selector
        addTimezone: 'Tijdzone Toevoegen',
        searchTimezone: 'Tijdzone Zoeken',
        typeCityName: 'Typ de stadsnaam...',
        selectTimezone: 'Selecteer een tijdzone...',
        workStartTime: 'Werk Begintijd',
        workEndTime: 'Werk Eindtijd',
        
        // Tijdzones
        timezones: {
            'America/Sao_Paulo': 'São Paulo, Brazilië',
            'America/New_York': 'New York, VS',
            'America/Los_Angeles': 'Los Angeles, VS',
            'Europe/London': 'Londen, Verenigd Koninkrijk',
            'Europe/Paris': 'Parijs, Frankrijk',
            'Europe/Amsterdam': 'Amsterdam, Nederland',
            'Asia/Tokyo': 'Tokyo, Japan',
            'Asia/Shanghai': 'Shanghai, China',
            'Asia/Kolkata': 'Mumbai, India',
            'Australia/Sydney': 'Sydney, Australië',
            'Pacific/Auckland': 'Auckland, Nieuw-Zeeland',
            'America/Mexico_City': 'Mexico-Stad, Mexico',
            'America/Argentina/Buenos_Aires': 'Buenos Aires, Argentinië',
            'Europe/Berlin': 'Berlijn, Duitsland',
            'Africa/Cairo': 'Caïro, Egypte'
        },
        
        // Beschikbaarheidsmatrix
        availabilityDuring: 'Beschikbaarheid Tijdens Uw Werktijden',
        seeWhoAvailable: 'Zie wie beschikbaar is tijdens elk uur van uw werkschema om vergaderingen te plannen:',
        yourTime: 'Uw Tijd',
        available: 'beschikbaar',
        idealMeetingTime: 'Ideale vergadertijd',
        working: 'Aan het werk',
        offHours: 'Buiten werktijd',
        bestMeetingTimes: 'Beste Vergadertijden',
        people: 'mensen',
        
        // Huidige tijden
        currentTimes: 'Huidige Tijden',
        workHours: 'Werktijden',
        globalOverlapFound: 'Wereldwijde Overlap Venster Gevonden:',
        idealTimeEveryone: 'Ideale tijd - iedereen werkt',
        partialOverlaps: 'Gedeeltelijke Overlaps',
        noSimultaneousTime: 'Er is geen tijd waarop iedereen tegelijkertijd werkt, maar er zijn overlaps tussen sommige tijdzones. Gebruik de beschikbaarheidsmatrix hieronder om de beste tijden te vinden.',
        noOverlap: 'Geen Overlap',
        noCommonHours: 'Er zijn geen gemeenschappelijke uren tussen de geselecteerde tijdzones. Overweeg het aanpassen van werktijden om samenwerkingsvensters te creëren.',
        
        // Beheer
        manageTimezones: 'Tijdzones Beheren',
        timezonesAdded: 'tijdzones toegevoegd',
        selectPrimaryTimezone: 'Selecteer uw primaire tijdzone om de beschikbaarheid van anderen tijdens uw werktijden te zien:',
        removeTimezone: 'Tijdzone verwijderen',
        primary: 'Primair',
        addMoreZones: 'Voeg meer zones toe om te vergelijken',
        noTimezonesYet: 'Nog geen tijdzones toegevoegd.',
        useFormAbove: 'Gebruik het formulier hierboven om tijdzones toe te voegen.',
        
        // Timeline en legenda
        timezoneTimeline: 'Tijdzone Tijdlijn',
        legend: 'Legenda:',
        workHoursLegend: 'Werktijden',
        allTimezonesOverlap: 'Alle Tijdzones Overlap',
        currentTime: 'Huidige Tijd',
        
        // Welkomstbericht
        welcomeTitle: 'Welkom bij de Tijdzone Visualizer',
        welcomeMessage: 'Voeg ten minste twee tijdzones toe om overlaps te visualiseren en de beste tijden voor wereldwijde vergaderingen te vinden.',
        tipMessage: 'Tip: Begin met het toevoegen van de tijdzones van uw team met behulp van het formulier hierboven',
        
        // Talen
        language: 'Taal',
        english: 'English',
        portuguese: 'Português',
        dutch: 'Nederlands'
    }
};
