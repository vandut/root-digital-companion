
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const eyrieDynasties_pl: Faction = {
  id: FactionId.EYRIE_DYNASTIES,
  name: 'Dynastie Orlich Gniazd',
  reach: 7,
  type: FactionType.MILITANT,
  tagline: 'Stare królestwo. Odzyskaj kontrolę nad knieją, zarządzając swoim stale rosnącym Dekretem.',
  howToWin: 'Zdobywaj punkty zwycięstwa każdego Wieczoru na podstawie liczby Gniazd na mapie. Im więcej masz Gniazd, tym więcej punktów zdobywasz.',
  mechanics: 'Dynastie Orlich Gniazd definiuje Dekret, obowiązkowy zestaw akcji, które musisz wykonać w każdej turze. Dekret jest podzielony na cztery kolumny: Werbunek, Ruch, Walka i Budowa. W każdej turze musisz dodać jedną lub dwie karty z ręki do Dekretu, programując swoje akcje na daną turę. Karty Ptaków są uniwersalne i mogą być dodawane do dowolnej kolumny, ale są też ryzykowne. W ciągu Dnia musisz wykonać każdą akcję z Dekretu, od lewej do prawej, na polanie pasującej do koloru karty. Na przykład karta Lisa w kolumnie Ruchu zmusza cię do wykonania ruchu z polany Lisów. Jeśli nie możesz w pełni wykonać którejkolwiek akcji, wpadasz w Zamieszki. Jest to katastrofalne wydarzenie, w którym tracisz punkty zwycięstwa (jeden za każdą kartę ptaka w Dekrecie), twój obecny przywódca zostaje obalony, a cały Dekret jest czyszczony, pozostawiając tylko początkowe karty Wezyrów. Należy wtedy wybrać nowego przywódcę, co ustala nowy początkowy Dekret i specjalną zdolność.',
  howToPlay: 'Dynastie Orlich Gniazd to frakcja o wysokim ryzyku i wysokiej nagrodzie. Twoim celem jest budowanie i ochrona Gniazd, ponieważ to one determinują twoje punkty zwycięstwa wieczorem. Oznacza to ostrożne rozszerzanie terytorium poprzez dodawanie kart do Dekretu, budując potężny silnik akcji. Masz stały pęd, ale ten pęd jest kruchy. Zbyt ambitny Dekret może łatwo doprowadzić do Zamieszek, co znacznie cię cofnie. Musisz grać jak skrupulatny planista, zawsze myśląc kilka kroków naprzód, aby upewnić się, że twoje akcje są możliwe do wykonania.',
  strategy: 'Sukces z Dynastiami Orlich Gniazd zależy od zarządzania Dekretem. Nie bądź chciwy; dodanie zbyt wielu kart lub niewłaściwych kolorów doprowadzi do Zamieszek. Karty Ptaków to miecz obosieczny: oferują elastyczność, ale zwiększają karę za porażkę. Czasami zaplanowane Zamieszki mogą być strategicznym sposobem na zresetowanie zawodzącego Dekretu i przejście na bardziej odpowiedniego przywódcę dla obecnej sytuacji na planszy. Twoja specjalna zdolność, "Władcy Lasu", jest niezwykle potężna do ustanawiania kontroli, więc wykorzystaj ją na swoją korzyść, aby budować Gniazda na spornych polanach.',
  specialAbilities: [
      { title: 'Władcy lasu', description: 'Kontrolujesz polanę w przypadku remisu w liczbie wojowników i budynków, o ile masz tam co najmniej jeden element.' },
      { title: 'Niechęć do handlu', description: 'Wytwarzając przedmioty, ignorujesz wskazane punkty zwycięstwa i zamiast tego zdobywasz tylko jeden. To sprawia, że wytwarzanie przedmiotów jest mniej priorytetowe dla punktowania.' },
  ],
  setup: [
      "Zbierz Wojowników: Utwórz zapas 20 wojowników.",
      "Umieść Gniazdo i Wojowników: Umieść 1 Gniazdo i 6 wojowników na polanie w narożniku.",
      "Wybierz Przywódcę: Wybierz 1 z 4 kart Przywódców Dynastii (Budowniczy, Charyzmatyk, Komandor lub Despota).",
      "Wsuń Wezyrów: Wsuń swoje 2 karty Lojalnych Wezyrów (które są kartami ptaków) do kolumn Dekretu wskazanych na wybranej karcie Przywódcy.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        { 
          title: 'Rozkazy awaryjne', 
          description: 'Jeśli nie masz kart na ręce, dobierz jedną kartę.',
          order: OrderType.ORDERED,
          details: [
            "Na samym początku Świtu, jeśli twoja ręka jest pusta, musisz dobrać jedną kartę. To zapewnia, że zawsze masz kartę do dodania do Dekretu, co zapobiega automatycznym Zamieszkom."
          ]
        },
        {
          title: 'Dodaj do dekretu',
          description: 'MUSISZ dodać jedną lub dwie karty do dowolnej kolumny Dekretu.',
          order: OrderType.ORDERED,
          details: [
            "Musisz dodać jedną lub dwie karty z ręki do kolumn Dekretu (Werbunek, Ruch, Walka, Budowa).",
            "Krytyczna zasada: Z kart, które dodajesz w tej turze, maksymalnie jedna może być kartą ptaka. To ograniczenie jest centralne dla planowania twojej tury. Umieszczanie kart w odpowiednich kolumnach to podstawowe wyzwanie Dynastii.",
            "Wskazówka strategiczna: Myśl ostrożnie. Każda dodana karta to obietnica, którą musisz spełnić. Dodatkowa walka w kolorze, w którym nie masz celów, spowoduje Zamieszki. Planuj kilka tur do przodu."
          ]
        }
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Przekucie',
          description: 'Możesz użyć swoich Gniazd do wytwarzania kart.',
          order: OrderType.ORDERED,
          details: [
            "Możesz aktywować swoje Gniazda, aby wytwarzać karty. Gniazdo dostarcza kolor polany, na której się znajduje. Każde Gniazdo może być aktywowane raz na turę.",
            "Przypomnienie: Twoja zdolność 'Niechęć do Handlu' oznacza, że zdobywasz tylko 1 PZ za wytworzone przedmioty, ale efekty samych kart mogą odmienić grę."
          ]
        },
        {
          title: 'Rozpatrz dekret',
          description: 'MUSISZ rozpatrzyć wszystkie karty w Dekrecie, od lewej do prawej.',
          order: OrderType.ORDERED,
          details: [
            "To serce twojej tury. Zaczynając od kolumny Werbunku, musisz wykonać akcję dla każdej karty w tej kolumnie. Następnie przejdź do Ruchu, potem Walki, a na końcu Budowy.",
            "Zasada porażki: Jeśli nie możesz w pełni wykonać akcji (np. musisz się ruszyć, ale nie możesz, lub musisz walczyć, ale nie masz ważnych celów), natychmiast wpadasz w Zamieszki. Twoja tura się kończy, tracisz 1 PZ za każdą kartę ptaka w Dekrecie, twój przywódca zostaje obalony, a ty czyścisz Dekret z wyjątkiem Wezyrów."
          ]
        }
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Punktacja',
          description: 'Zdobywaj PZ w zależności od liczby Gniazd na mapie.',
          order: OrderType.ORDERED,
          details: [
            "Policz swoje Gniazda na mapie. Zdobądź punkty zwycięstwa wskazane na pierwszym od prawej pustym polu toru Gniazd na twojej planszy frakcji.",
            "Wskazówka strategiczna: To twój główny silnik punktowy. Budowanie Gniazd jest kluczowe. Im więcej ich zbudujesz, tym szybciej rośnie twój wynik. Chroń je zaciekle."
          ]
        },
        {
          title: 'Dobierz i odrzuć karty',
          description: 'Dobierz jedną kartę plus bonusy, a następnie w razie potrzeby odrzuć do pięciu.',
          order: OrderType.ORDERED,
          details: [
            "Dobierz jedną kartę, plus jedną dodatkową za każdy odkryty bonus na twoim torze Gniazd. Następnie, jeśli masz więcej niż pięć kart na ręce, odrzuć nadmiarowe.",
            "Wskazówka strategiczna: Budowanie Gniazd nie tylko zwiększa twoje punktowanie, ale także dobieranie kart, co jest kluczowe dla zasilania Dekretu."
          ]
        }
      ]
    }
  }
};