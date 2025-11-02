# Project Fabula Ultima - Deutsche Kompendium-Übersetzung
![Fabula Ultima Mod](https://need.games/wp-content/uploads/2024/06/FU-MOD-bgW-300x121.png)
## Vorwort
In einem Anfall von Arbeitswut habe ich mich dazu entschieden die Kompendien, die mit dem wundervollen System [Project FU](https://github.com/League-of-Fabulous-Developers/FoundryVTT-Fabula-Ultima) zusammen kommen per [Babele](https://gitlab.com/riccisi/foundryvtt-babele) zu übersetzen.
Da ich aber kein Entwickler bin – oder irgendwas von JavaScript verstehe – gibt es verschiedene Hürden, an denen ich bisher gescheitert bin.
In Anlehnung an die von den System-Entwicklern genutzte Lizenz, lasse ich dieses Modul ebenfalls unter der MIT Licence laufen.
## Manuelle Installation
Um das Modul in Foundry zu installieren sind wenige, simple Schritte notwendig:
1. Öffne die Setup-Seite deiner _FoundryVTT_ Instanz
2. Wechsele zum Tab _Add-on Modules_
3. Klicke auf _Install Module_
4. Füge diese URL bei _Manifest URL_ ein: `https://github.com/rustywrecks/pfu-babele-german/releases/latest/download/module.json`
5. Klicke auf _Install_
> [!WARNING]
> Damit das dieses Modul funktioniert, muss das Modul [Babele](https://gitlab.com/riccisi/foundryvtt-babele) installiert sein.
## Übersetzte Kompendien
Das hier sind die Kompendien, die ich bisher übersetze habe. Ich versuche, die Einschränkungen als Unterpunkte zu formulieren.
### **Bestiary**
- NSCs (NPCs)
  - Nur Namen übersetzt, kein Zugriff auf Effekte innerhalb des Akteurs
### **Character Creation**
- Klassen (Classes)
- Skills (Fähigkeiten)
  - Es gibt ein paar Felder, die nicht übernommen werden.
    - Zum Beispiel kann ich bei den Einflößungen den Zusatzschaden nicht manipulieren, was darin resultiert, dass die Vampir-Einflößung 5 Zusatzschaden bewirkt und manuell angepasst werden muss
- Zauber (Spells)
  - Kein Einfluss auf vorgefertigte Effekte.
    - Ich kann nur den Namen anpassen, nicht die Beschreibung.
### **Equipment**
- Standardausrüstung (Basic Equipmen)
- Verbrauchsgegenstände (Consumables)
- Technosphären (Technospheres)
  - Hoplosphären
    - Mehr als Name, Socketable in, Slots required und Quelle ist derzeit nicht übersetzbar, bzw. wird ignoriert
  - Mnemosphären
    - Sollten **DRINGEND** mit den übersetzten Fähigkeiten manuell erstellt werden
    - Keine Übersetzung der Fähigkeiten innerhalb der Mnemosphäre möglich
- Fahrzeugmodule (Vehicle Modules)
### **GM Tools**
- Spielleitung (Game Master)
- Würfeltabellen (Rollable Tables)
### **Journals**
- Handouts
  - Das Heldenhaften Fähigkeiten Journal fehlt noch. (Mache ich dann nach den Fähigkeiten selbst...)
## (Noch) Nicht übersetzte Kompendien
### **Character Creation**
- Heldenhafte Fähigkeiten (Heroic Skills)
### **Effects**
- Akteur Effekte (Actor Effects)
- Zustände (Conditions)
- Ausrüstungseffekte (Equipment Effects)
- Qualitäten (Qualities)
> [!NOTE]
> Bisher plane ich nicht, die Effekte zu übersetzen, da die meisten direkt durch das System genutzt werden.

> [!TIP]
> **Project FU** hat in einer früheren Version das [PDF Pager](https://github.com/farling42/fvtt-pdf-pager) Modul verwendet, um über einen Klick auf _Quelle / Source_ die Seite in einer hochgeladenen PDF zu öffnen.
> Dafür verwende ich die folgenden Codes und habe die Quellen angepasst:
> - GRW = Fabula Ultima Grundregelwerk
> - LU = Bonusheftchen Level-Up
> - AHF = Atlas: High Fantasy
> - ATF = Atlas: Techno Fantasy
> - ANF = Atlas: Natural Fantasy

# Project Fabula Ultima - German Compendium Translation
## Foreword
In a fit of workaholism, I decided to translate the compendiums that come with the wonderful [Project FU](https://github.com/League-of-Fabulous-Developers/FoundryVTT-Fabula-Ultima) system using [Babele](https://gitlab.com/riccisi/foundryvtt-babele).
However, since I am not a developer – nor do I understand anything about JavaScript – there are various hurdles that I have failed to overcome so far.
Following the license used by the system developers, I am also running this module under the MIT License.
## Manual installation
To install the module in Foundry, a few simple steps are necessary:
1. Open the setup page of your _FoundryVTT_ instance
2. Switch to the _Add-on Modules_ tab
3. Click on _Install Module_
4. Enter this URL in the _Manifest URL_ field: `https://github.com/rustywrecks/pfu-babele-german/releases/latest/download/module.json`
5. Click on _Install_
> [!WARNING]
> For this module to work, the [Babele](https://gitlab.com/riccisi/foundryvtt-babele) module must be installed.
## Translated compendiums
These are the compendiums I have translated so far. I will try to formulate the limitations as sub-points.
### **Bestiary**
- NPCs
  - Only names translated, no access to effects within the actor
### **Character Creation**
- Classes
- Skills
  - There are a few fields that are not transferred.
    - For example, I cannot manipulate the additional damage for the infusions, which results in the vampire infusion causing 5 additional damage and having to be adjusted manually.
- Spells
  - No influence on predefined effects.
    - I can only customize the name, not the description.
### **Equipment**
- Basic Equipment
- Consumables
- Technospheres
  - Hoplospheres
    - More than name, socketable in, slots required, and source is currently untranslatable or ignored.
  - Mnemospheres
    - Should **URGENTLY** be created manually with the translated abilities.
    - No translation of abilities within the Mnemosphere possible.
- Vehicle Modules
### **GM Tools**
- Game Master
- Rollable Tables
### **Journals**
- Handouts
  - Skipped the Heroic Skills Journal for now. (Will do them after I translated the Skills themselves)
## Compendiums not (yet) translated
### **Character Creation**
- Heroic Skills
### **Effects**
- Actor Effects
- Conditions
- Equipment Effects
- Qualities
> [!NOTE]
> So far, I do not plan to translate the effects, as most of them are used directly by the system.

> [!TIP]
> In an earlier version, **Project FU** used the [PDF Pager](https://github.com/farling42/fvtt-pdf-pager) module to open the page in an uploaded PDF by clicking on _Source_.
> I use the following codes for this and have adapted the sources:
> - GRW = Fabula Ultima Core Rulebook
> - LU = Level-Up Bonus Booklet
> - AHF = Atlas High Fantasy
> - ATF = Atlas Techno Fantasy
> - ANF = Atlas Natural Fantasy
