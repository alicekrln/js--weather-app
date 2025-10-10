# 🤖 JavaScript & TypeScript i praktiken - Weather app

Väderappen är en övning i objektmetoder, import av moduler och generering av HTML med hjälp av JavaScript. Om fler av dessa koncept känns främmande eller svåra är det rekommenderat att göra uppgiften i grupp. Det är upp till er som grupp att själva bestämma.

## ☀️ Uppgifter

- Ta bort alla HTML-element med textinnehåll
- Skriv all JavaScript i `script.js`
- Exportera datan med plats- och väderinformation och importera den i `script.js`
  - Tänk på att om du använder modern ES6-syntax krävs det att `type`-attributet på din script tag är korrekt
- Generera HTML-element med värdena från `data.js`

### 💻 Förväntat resultat

- Det går att importera och använda "väderdatan"
- Alla element utom `container`och `sun` genereras med JavaScript
- Textinnehållet kommer från objektet i `data.js`

## 🎁 Bonusuppgifter

- Ändra från sol till måne efter en viss tid på dygnet
  - Använd JavaScript för att hämta tiden just nu
  - Använd JavaScript för att justera stylingen
- Experimentera med andra färger, typsnitt, layout m.m. för att sätta din personliga prägel
- Lägg till flera platser/städer i `response`-objektet och generera dynamisk ett element (Exempelvis en `<select>`) som låter dig byta mellan dem
