
# Europäische NATO Mitglieder

In dieser Übung werden wir die NATO Mitgliedstaaten Europas visualisieren. Der Kartentyp in diesem Fall ist eine kategorische Choroplethenkarte.

Die geografischen Daten kommen von [NaturalEarth](https://www.naturalearthdata.com/downloads/), und die Informationen über NATO-Mitgliedstaaten kommen von der [NATO website](https://www.nato.int/cps/em/natohq/topics_52044.htm).

## Aufgabe

1. Erstelle eine Karte mit einem 4:3 Format (800x600), die auf Europa fokussiert ist. Wähle dabei eine geeignete Karteprojektion für eine Choroplethenkarte.

2. Färbe die NATO Mitgliedstaaten dunkelblau (`#004990`) ein (siehe [NATO style guidelines](https://www.nato.int/vigs/pdf/NATO-VIGs-2016-en.pdf)).

3. Erstelle eine Legende für die Farben in deiner Karte.

4. Gib deiner Karte einen Titel.

5. Füge Anmerkungen, disclaimer, und Datenquellen hinzu, wo nötig.

## Hinweise

#### 1. Kartenprojektion

Ein guter Einstiegspunkt zu Kartenprojektionen für Europa ist [dieses observable notebook](https://observablehq.com/@toja/five-map-projections-for-europe).

#### 2. Javascript objekte durchsuchen

In dieser Übung musst du einen Array von Javascript Objekten dursuchen, um herauszufinden welche Länder NATO-Mitglieder sind. Du kannst einen Array mit der `.find` methode durchsuchen.

```js

const data = [
  { NAME: "France", ADM0_A3: "FRA" },
  { NAME: "Germany", ADM0_A3: "DEU" },
  { NAME: "Switzerland", ADM0_A3: "CHE" },
]

const country = data.find(function(dataPoint) {
  return dataPoint.ADM0_A3 === "CHE"
})

// => country = { NAME: "Switzerland", ADM0_A3 }

const country2 = data.find(function(dataPoint) {
  return dataPoint.ADM0_A3 === "CHN"
})

// => country2 = undefined

```

Du kannst das auch verkürzen mit einer Pfeilfunktion:

```js
const country = data.find(d => d.ADM0_A3 === "CHE")
```

#### 3. Data-driven fill

Um eine Form anhand der verbundenen Datenattribute mit einer Farbe zu füllen musst du eine Funktion in `.attr()` benutzen.

```js

const members = [
  { NAME: "France", iso3: "FRA" },
  { NAME: "Germany", iso3: "DEU" },
  {...}
]

const shapes = svg.selectAll("path")
  .data(countries.features)
  .enter()
  .append("path")
    .attr("d", pathGenerator)
    .attr("fill", function(d) {
      
      // Finde die nato daten für ein Land:
      const natoMetaData = members.find(member => member.iso3 === d.ADM0_A3)
      
      // Wenn das Land kein NATO Mitglied ist (wenn 
      // `natoMetaData` nichts findet), wird es auf
      // der Karte grau eingefüllt
      return natoMetaData ? "#004990" : "#DDDDDD"
    })

```

> ⚠️ Die Funktion in `.attr()` wird für jeden Datenpunkt einmal ausgeführt.


## Weiteres

Wenn dir diese Aufgabe zu einfach ist, dann kannst du versuchen den [Hauptsitz von NATO in Brüssel](https://en.wikipedia.org/wiki/NATO_headquarters) auf deiner Karte anzuzeigen.

