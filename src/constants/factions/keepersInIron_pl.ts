
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const keepersInIron_pl: Faction = {
  id: FactionId.KEEPERS_IN_IRON,
  name: 'Żelazna Straż',
  reach: 8,
  type: FactionType.MILITANT,
  tagline: 'Poszukujący Rycerze. Odzyskaj zaginione relikty kniei, aby przywrócić honor swojemu starożytnemu zakonowi.',
  howToWin: 'Zdobywaj punkty zwycięstwa, odzyskując Relikty. Musisz je znaleźć w lasach, przenieść do Posterunku odpowiedniego typu, a następnie wykonać akcję Odzyskania. Zdobywasz punkty na podstawie wartości Reliktu oraz za skompletowanie zestawów wszystkich trzech typów reliktów.',
  mechanics: 'Żelazna Straż to frakcja poszukiwaczy skupiona na odzyskiwaniu starożytnych Reliktów ukrytych w lasach. Każdy z twoich wojowników może nosić jeden relikt podczas ruchu. Aby zdobyć punkt za relikt, musisz go przenieść do jednego ze swoich Posterunków, specjalnego budynku, który można postawić za pomocą akcji Obozowania. Posterunki występują w trzech typach (odpowiadających trzem typom reliktów) i można je również zamienić z powrotem na wojowników za pomocą akcji Zwinięcia Posterunku. Struktura twojej tury jest determinowana przez twoją Świtę, zestaw trzech kolumn, w których umieszczasz karty z ręki, aby zaprogramować akcje na następną turę. Każda kolumna ma określony zestaw akcji (np. Ruch, Walka, Odnajdywanie, Odzyskanie), a liczba kart w kolumnie decyduje, ile razy możesz wykonać te akcje.',
  howToPlay: 'Żelazna Straż to powolna, metodyczna frakcja na świętej misji. Cała twoja gra kręci się wokół zarządzania przepływem starożytnych Reliktów z lasów do twoich Posterunków. To gra logistyczna i ostrożnego pozycjonowania. Musisz starannie planować swoją Świtę, aby stworzyć efektywną ścieżkę dla swoich reliktów, jednocześnie broniąc ich przed wrogami. Twoi wojownicy to twardzi bojownicy, zwłaszcza gdy w pobliżu znajduje się relikt, dzięki zdolności Oddani Rycerze.',
  strategy: 'Wydajność jest kluczowa. Użyj akcji Obozowania, aby umieścić Posterunki w bezpiecznych, centralnych lokalizacjach, które odpowiadają typom reliktów, które próbujesz odzyskać. Pamiętaj, że każdy wojownik może nosić relikt, więc możesz tworzyć karawany, aby przemieszczać wiele reliktów naraz. Twoje punktowanie jest początkowo powolne, ale przyspiesza, gdy odzyskujesz cenniejsze relikty i kompletujesz zestawy wszystkich trzech typów. Nie zaniedbuj wytwarzania, ponieważ Posterunki są również doskonałymi punktami rzemiosła. Twoim największym wyzwaniem jest powolne tempo, więc musisz być bardzo wydajny w swoich akcjach.',
  specialAbilities: [
    { title: 'Relikty', description: 'Poszukujesz 12 reliktów ukrytych w lasach. Każdy ma ukrytą wartość 1, 2 lub 3. Muszą być fizycznie przeniesione przez mapę, aby zdobyć za nie punkty.' },
    { title: 'Posterunki', description: 'Twoje unikalne budynki. Możesz Obozować (zamienić wojownika na posterunek) lub Zwinąć Posterunek (zamienić posterunek na wojownika). Są wymagane do odzyskiwania reliktów.' },
    { title: 'Oddani Rycerze', description: 'W walce, w której obecny jest relikt, ignorujesz pierwsze otrzymane trafienie. Ponadto, podczas ruchu, każdy z twoich wojowników może nosić jeden relikt.' },
    { title: 'Cenne Trofea', description: 'Jeśli wróg usunie jeden z twoich reliktów, musi go umieścić w lesie, a ty zdobywasz dodatkowy punkt zwycięstwa.' },
  ],
  setup: [
    "Umieść Początkowe Relikty: Potasuj 12 żetonów reliktów i umieść po jednym losowo w każdym lesie.",
    "Zbierz Wojowników: Utwórz zapas 15 wojowników.",
    "Umieść Wojowników: Umieść 4 wojowników na polanie w narożniku i 4 kolejne na sąsiedniej polanie przy krawędzi mapy.",
    "Wsuń Wiernych Sług: Wsuń po jednej karcie Wiernego Sługi do każdej kolumny Świty na swojej planszy.",
    "Umieść Posterunki: Umieść swoje trzy żetony Posterunków na planszy frakcji.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Zarządzaj Obecnością',
          description: 'Możesz wykonać Obozowanie, Zwinięcie Posterunku i Werbunek w dowolnej kolejności.',
          order: OrderType.ORDERED,
          details: [
              'Podczas Świtu możesz dostosować swoje siły. Możesz Obozować lub Zwinąć Posterunek raz na polanę. Możesz Werbować wielokrotnie, jeśli masz karty.'
          ]
        },
        {
          title: 'Obozowanie',
          description: 'Raz na polanę, zamień wojownika na posterunek.',
          order: OrderType.UNORDERED,
          details: ['Wybierz jednego ze swoich wojowników na mapie. Zamień go na posterunek ze swojej planszy. Wybierasz, która strona (typ reliktu) jest odkryta. W ten sposób przygotowujesz swoje punkty odzyskiwania.']
        },
        {
          title: 'Zwinięcie Posterunku',
          description: 'Raz na polanę, zamień posterunek na wojownika.',
          order: OrderType.UNORDERED,
          details: ["Na dowolnej polanie z jednym z twoich posterunków możesz go usunąć i umieścić tam jednego ze swoich wojowników z zasobów. Można to zrobić raz na każdej takiej polanie w turze."]
        },
        {
          title: 'Werbunek',
          description: 'Wydaj kartę, aby umieścić dwóch wojowników przy pasującym posterunku.',
          order: OrderType.UNORDERED,
          details: ['Możesz to zrobić dowolną liczbę razy. Wydaj kartę, aby umieścić dwóch wojowników przy posterunku na polanie o pasującym kolorze.']
        },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Przekuwanie',
          description: 'Aktywuj swoje posterunki, aby wytwarzać karty.',
          order: OrderType.ORDERED,
          details: ['Możesz użyć dowolnego ze swoich posterunków jako punktów rzemiosła. Kolor jest determinowany przez polanę, na której się znajduje.']
        },
        {
          title: 'Aktywuj Świtę',
          description: 'Za każdą kartę w swojej Świcie wykonaj akcję z tej kolumny.',
          order: OrderType.ORDERED,
          details: [
            'To jest rdzeń twojej tury. Zaczynając od skrajnej lewej kolumny twojej Świty, musisz rozpatrzyć akcje dla każdej obecnej tam karty. Możesz wykonywać akcje dla kart w jednej kolumnie w dowolnej kolejności.',
            'Kolumna 1 (Ruch): Za każdą kartę wykonaj ruch z polany pasującej do koloru karty.',
            'Kolumna 2 (Walka, a następnie Odnajdywanie): Za każdą kartę walcz na pasującej polanie, a następnie możesz Odnaleźć (przenieść relikt z sąsiedniego lasu na tę polanę, odwracając go, aby odkryć jego wartość).',
            'Kolumna 3 (Ruch lub Odzyskanie): Za każdą kartę albo wykonaj ruch z pasującej polany, ALBO odzyskaj stamtąd relikt. Aby odzyskać, musisz mieć Posterunek pasujący do typu reliktu. Przenieś relikt na swoją planszę i zdobądź jego wartość w PZ, plus 2 PZ, jeśli skompletowałeś zestaw.'
          ]
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Opuszczenie Terenu',
          description: 'Usuń jednego wojownika z każdej polany, na której masz czterech lub więcej wojowników.',
          order: OrderType.ORDERED,
          details: ['To reprezentuje limity zaopatrzenia i zmusza do zarządzania koncentracją wojsk.']
        },
        {
          title: 'Zebranie Świty',
          description: 'Dodaj karty z ręki do swoich slotów w Świcie.',
          order: OrderType.ORDERED,
          details: ['Możesz dodać dowolną liczbę kart z ręki do slotów w swojej Świcie, do maksymalnie 10 kart łącznie. Możesz również przesunąć jedną kartę między kolumnami. W ten sposób planujesz swoją następną turę.']
        },
        {
          title: 'Dobierz i Odrzuć Karty',
          description: 'Dobierz jedną kartę plus bonusy z posterunków, a następnie w razie potrzeby odrzuć do pięciu.',
          order: OrderType.ORDERED,
          details: ['Dobierz jedną kartę, plus jedną za każdy posterunek na mapie. Odrzuć karty do limitu pięciu. Więcej posterunków oznacza więcej kart do zasilania twojej Świty.']
        }
      ]
    }
  }
};
