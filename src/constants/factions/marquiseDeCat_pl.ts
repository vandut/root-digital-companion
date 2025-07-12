
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const marquiseDeCat_pl: Faction = {
  id: FactionId.MARQUISE_DE_CAT,
  name: 'Markiza de Kot',
  reach: 10,
  type: FactionType.MILITANT,
  tagline: 'Machina wojenna. Zdominuj knieję, budując ogromną, połączoną gospodarkę.',
  howToWin: 'Zdobywaj punkty zwycięstwa, budując warsztaty, tartaki i koszary. Im więcej budynków jednego typu posiadasz, tym więcej punktów będzie wart kolejny.',
  mechanics: 'Markiza to frakcja budująca silnik, skoncentrowana na infrastrukturze. Twoimi głównymi komponentami są Drewno i Budynki. Tartaki produkują żetony Drewna. Te żetony Drewna są następnie wydawane na wznoszenie innych budynków: Warsztatów do wytwarzania przedmiotów i Koszar do generowania wojowników. Koszt każdego typu budynku wzrasta, w miarę jak budujesz ich więcej, ale rosną także zdobywane przez ciebie punkty zwycięstwa. Kluczowym mechanizmem jest Linia Zaopatrzenia: aby budować, musisz być w stanie prześledzić ścieżkę z kontrolowanych przez siebie polan od miejsca budowy do polany z Drewnem. Twoja ekonomia akcji jest również kluczowa; masz trzy akcje na turę, ale możesz wydać karty Ptaków na dodatkowe akcje lub na użycie potężnej zdolności Nadprodukcji.',
  howToPlay: 'Markiza de Kot prowadzi prostą grę opartą na budowaniu silnika. Cała twoja strategia kręci się wokół drewna. Budujesz Tartaki, aby produkować drewno, a następnie wydajesz to drewno na inne budynki, aby zdobywać punkty i ulepszać swoje akcje. Twierdza to twoja forteca; możesz umieszczać w niej wojowników tylko za pomocą Szpitali Polowych, co czyni ją kluczowym bastionem obronnym. Twoja siła rośnie systematycznie w miarę budowania, co prowadzi do eksplozywnego potencjału punktowego w końcowej fazie gry, jeśli twój silnik ekonomiczny nie zostanie powstrzymany.',
  strategy: 'Twój ruch początkowy jest kluczowy. Wcześnie postaw Tartaki, aby rozpocząć produkcję drewna. Chroń te linie zaopatrzenia za wszelką cenę; wróg, który odetnie ci dostawy drewna, może sparaliżować twoją grę. Wykorzystaj swoją dużą liczbę wojowników, aby nękać inne frakcje i zabezpieczać polany pod budowę. Nie zaniedbuj wytwarzania przedmiotów — Markiza może wytwarzać potężne karty, które mogą odwrócić losy gry. Twoim największym wyzwaniem jest powolny start i ograniczona liczba żetonów drewna. Musisz przetrwać wczesną fazę gry, aby zbudować swoją niepowstrzymaną maszynę przemysłową.',
  specialAbilities: [
    { title: 'Twierdza', description: 'Możesz umieszczać elementy na polanie z żetonem twierdzy, a inni gracze nie mogą. Jeśli żeton twierdzy zostanie kiedykolwiek usunięty, nie można go ponownie umieścić. To czyni polanę stałą, bezpieczną strefą dla twoich Szpitali Polowych.' },
    { title: 'Szpitale polowe', description: 'Gdy dowolna liczba twoich wojowników zostanie usunięta z polany, możesz wydać kartę pasującą do koloru tej polany, aby umieścić tych wojowników w Twierdzy zamiast w twoich zasobach. Karty Ptaków są kartami uniwersalnymi. To twoje kluczowe narzędzie obronne.' },
  ],
  setup: [
    "Zbierz Wojowników i Drewno: Utwórz zapasy 25 wojowników i 8 żetonów drewna.",
    "Umieść Twierdzę: Umieść żeton twierdzy na polanie w narożniku. To twoja polana startowa.",
    "Garnizon: Umieść po jednym wojowniku na każdej polanie na mapie, z wyjątkiem tej po przekątnej od twojej twierdzy.",
    "Umieść Budynki Startowe: Umieść 1 tartak, 1 warsztat i 1 koszary. Możesz je umieścić na polanie z twierdzą i/lub na dowolnych sąsiednich polanach, w dowolnej kombinacji."
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        { 
          title: 'Umieść drewno', 
          description: 'Umieść jeden żeton drewna na każdym ze swoich tartaków.',
          order: OrderType.ORDERED,
          details: [
            "Na początku swojej tury, za każdy tartak, który masz na mapie, weź jeden żeton drewna z zasobów i umieść go na tej samej polanie co tartak.",
            "Wskazówka strategiczna: Drewno jest siłą napędową twojej frakcji. Chroń swoje tartaki, aby zapewnić sobie możliwość dalszej budowy. Pamiętaj, że twoje zapasy drewna są ograniczone (łącznie 8 żetonów), więc musisz je wydawać, aby zwolnić żetony do produkcji. Wróg może zdławić twoją gospodarkę, obozując na twoich żetonach drewna."
          ]
        }
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Podejmij akcje dnia',
          description: 'Podejmij do trzech akcji, plus jedna dodatkowa za każdą wydaną kartę ptaka.',
          order: OrderType.ORDERED,
          details: [
            'Masz budżet trzech akcji. Możesz go zwiększyć, wydając karty ptaków z ręki; każda karta ptaka daje jedną dodatkową akcję na turę.',
            'Twoje opcje to: Walka, Marsz, Budowa, Werbunek i Nadprodukcja. Możesz wykonywać akcje w dowolnej kolejności i powtarzać tę samą akcję wielokrotnie (z wyjątkiem Werbunku, który jest raz na turę).',
            'Wskazówka strategiczna: Zarządzanie akcjami jest kluczowe. Karty ptaków są dla ciebie wyjątkowo cenne, ponieważ dają dodatkową akcję, pozwalając na budowę, ruch i walkę w jednej potężnej turze.'
          ]
        },
        {
          title: 'Walka',
          description: 'Rozpocznij walkę na polanie, gdzie masz wojowników.',
          order: OrderType.UNORDERED,
          details: [
            "Wybierz polanę z twoimi wojownikami i wskaż wroga jako obrońcę. Rzuć dwiema kośćmi. Zadajesz trafienia równe wyższemu wynikowi, a obrońca zadaje trafienia równe niższemu wynikowi.",
            "Ważne: Twoja maksymalna liczba trafień z rzutu jest ograniczona do liczby twoich wojowników na tej polanie. Obrońca musi usunąć wszystkich swoich wojowników, zanim usunie budynki lub żetony. Otrzymujesz jeden punkt zwycięstwa za każdy usunięty budynek lub żeton wroga.",
            "Wskazówka strategiczna: Wykorzystaj swoją przewagę liczebną, aby inicjować korzystne bitwy i zakłócać plany wrogów. Usuwanie żetonów i budynków wroga nie tylko daje punkty, ale także może sparaliżować jego machinę wojenną."
          ]
        },
        {
          title: 'Marsz',
          description: 'Podejmij do dwóch ruchów między polanami.',
          order: OrderType.UNORDERED,
          details: [
            "Jedna akcja Marszu pozwala na wykonanie do dwóch ruchów. Dla każdego ruchu musisz kontrolować polanę początkową lub docelową.",
            "Kontrolowanie polany oznacza posiadanie większej liczby wojowników i budynków niż jakikolwiek inny gracz. Możesz przemieścić dowolną liczbę wojowników w jednym ruchu. Te dwa ruchy są niezależne; nie muszą zaczynać się z tej samej polany.",
            "Wskazówka strategiczna: Używaj Marszu do wzmacniania kluczowych pozycji, łączenia linii zaopatrzenia w drewno i pozycjonowania wojowników do przyszłej akcji Budowy."
          ]
        },
        {
          title: 'Budowa',
          description: 'Wydaj drewno, aby umieścić budynek, zdobywając punkty.',
          order: OrderType.UNORDERED,
          details: [
            "Wybierz polanę, którą kontrolujesz. Wybierz budynek ze swojej planszy (tartak, warsztat lub koszary) i zapłać jego koszt w drewnie, pokazany nad jego kolumną.",
            "Koszt w drewnie jest płacony z polany budowy lub z polan połączonych z nią łańcuchem kontrolowanych przez ciebie polan. To reprezentuje twoją linię zaopatrzenia. Po umieszczeniu budynku natychmiast zdobywasz punkty zwycięstwa ujawnione na twojej planszy frakcji.",
            "Wskazówka strategiczna: Budowanie to twój główny sposób na zdobywanie punktów. Skoncentruj się na jednym typie budynku, aby szybciej przesuwać się po torze i zdobywać więcej PZ. Dobrze broniona linia zaopatrzenia jest kluczowa dla drogich budynków w późnej fazie gry."
          ]
        },
        {
          title: 'Werbunek',
          description: 'Raz na turę, umieść jednego wojownika na każdym z koszar.',
          order: OrderType.UNORDERED,
          details: [
            "Ta akcja umieszcza jednego nowego wojownika z twoich zasobów na każdej polanie z koszarami. Możesz podjąć tę akcję tylko raz na turę.",
            "Wskazówka strategiczna: To twój główny sposób na uzupełnianie armii. Rozmieszczenie koszar pozwala na generowanie ogromnej liczby wojowników na całej mapie za pomocą jednej akcji."
          ]
        },
        {
          title: 'Nadprodukcja',
          description: 'Wydaj pasującą kartę, aby umieścić drewno w tartaku.',
          order: OrderType.UNORDERED,
          details: [
            "Wybierz jeden ze swoich tartaków. Wydaj kartę z ręki pasującą do koloru polany tartaku (karty ptaków są uniwersalne). Umieść jeden żeton drewna na tej polanie.",
            "Wskazówka strategiczna: To kluczowa akcja, aby zdobyć dodatkowe drewno, gdy brakuje ci go do ważnej Budowy, lub gdy wróg blokuje twoją normalną produkcję drewna. Nie lekceważ jej użyteczności."
          ]
        }
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        { 
          title: 'Dobierz karty', 
          description: 'Dobierz jedną kartę, plus bonusy z twojej planszy.',
          order: OrderType.ORDERED,
          details: [
            "Dobierz jedną kartę z talii. Następnie spójrz na swoją planszę frakcji. Za każdy odkryty symbol karty na torach budynków, dobierz jedną dodatkową kartę.",
            "Wskazówka strategiczna: Budowanie większej liczby warsztatów i koszar nie tylko ulepsza ich odpowiednie akcje, ale także znacznie zwiększa dobieranie kart, dając ci więcej opcji."
          ]
        },
        {
          title: 'Odrzuć do limitu ręki',
          description: 'Jeśli masz więcej niż pięć kart, odrzuć nadmiarowe.',
          order: OrderType.ORDERED,
          details: [
            "Policz karty w swojej ręce. Jeśli masz więcej niż pięć, musisz wybrać i odrzucić karty, aż zostanie ci dokładnie pięć. To twardy limit."
          ]
        }
      ]
    }
  }
};