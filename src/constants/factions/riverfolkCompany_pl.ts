
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const riverfolkCompany_pl: Faction = {
  id: FactionId.RIVERFOLK_COMPANY,
  name: 'Kompania Plemion Rzecznych',
  reach: 5,
  type: FactionType.INSURGENT,
  tagline: 'Mistrzowie Handlu. Czerp zyski z wojny, sprzedając swoje usługi i tworząc imperium handlowe.',
  howToWin: 'Zdobywaj punkty zwycięstwa, umieszczając faktorie handlowe. Zdobywasz również punkty (Dywidendy) na podstawie zgromadzonych funduszy na koniec tury.',
  mechanics: 'Podstawową mechaniką Kompanii jest handel. Oferujesz Usługi (Karta, Łodzie Rzeczne, Najemnicy), które inni gracze mogą kupić na początku swojej tury. Cenę ustalasz ty. Kiedy gracz kupuje usługę, płaci ci swoimi własnymi wojownikami, których umieszczasz w swoim polu Funduszy. Te Fundusze są twoją walutą do podejmowania akcji. Akcje można podejmować, albo Zobowiązując fundusz (umieszczając go w polu Zobowiązanych, aby wrócił do ciebie w następnej turze) na powtarzalne akcje, takie jak Ruch czy Walka, albo Wydając fundusz (zwracając go do zasobów właściciela) na stałe akcje, takie jak budowanie Faktorii. Faktorie to twoje główne źródło punktów zwycięstwa, a także służą jako punkty rzemiosła. Im więcej ich zbudujesz, tym więcej usług możesz sprzedać. Wreszcie, możesz zdobywać Dywidendy na początku swojej tury na podstawie liczby wojowników w twoich Funduszach.',
  howToPlay: 'Kompania Plemion Rzecznych to kupcy w świecie Root. Jesteś bardzo interaktywną frakcją, która zależy od innych graczy, aby napędzać twoją gospodarkę. Twoja tura polega na zarządzaniu publiczną ręką, ustalaniu cen za swoje usługi, a następnie wykorzystywaniu zarobionych funduszy do rozszerzania własnej obecności poprzez budowanie faktorii. Musisz ostrożnie balansować, aby twoje usługi były na tyle atrakcyjne, by inni je kupowali, nie dając im jednocześnie zbyt dużej przewagi. Twoja zdolność do używania rzek jako ścieżek daje ci dużą mobilność w ustanawianiu swojego imperium handlowego na całej mapie.',
  strategy: 'Twój sukces zależy od umiejętności efektywnego ustalania cen za usługi. Jeśli ceny są zbyt wysokie, nikt nie kupi, a twoja gospodarka stanie w miejscu. Jeśli są zbyt niskie, dasz przeciwnikom zbyt wiele za zbyt mało. Obserwuj, czego potrzebują inni gracze. Jeśli ktoś jest zablokowany, sprzedaj mu ruch po rzece! Jeśli ktoś potrzebuje karty do wytworzenia przedmiotu, sprzedaj mu ją! Użyj swoich funduszy, aby ustanowić faktorie w ruchliwych, łatwych do obrony polanach nad rzeką. Duża ilość funduszy może również przynieść ci "Dywidendy", oferując drogę do zwycięstwa poprzez czyste bogactwo. Nie zapomnij korzystać z własnych usług, jeśli nikt inny ich nie kupuje.',
  specialAbilities: [
    { title: 'Pływacy', description: 'Możesz traktować rzeki jak ścieżki do poruszania się, co pozwala na szybkie przemieszczanie się wzdłuż cieków wodnych.' },
    { title: 'Na Sprzedaż', description: 'Twoja ręka kart jest zawsze odkryta dla wszystkich graczy. To pozwala innym zobaczyć, co sprzedajesz.' },
    { title: 'Fundusze', description: 'Twoi wojownicy i wojownicy innych graczy, którzy ci płacą, są trzymani w twoim polu Funduszy. To waluta, którą wydajesz na akcje.' },
    { title: 'Wykupowanie Usług', description: 'Na początku swojej tury inni gracze mogą kupić twoje usługi (Karta, Łodzie Rzeczne, Najemnicy). Cenę ustalasz ty na koniec swojej tury.' },
  ],
  setup: [
    "Zbierz Wojowników: Utwórz zapas 15 wojowników.",
    "Umieść Wojowników: Umieść łącznie 4 wojowników na dowolnych polanach graniczących z rzeką.",
    "Wypełnij Tory Faktorii: Umieść swoje 9 faktorii na planszy frakcji.",
    "Zyskaj Fundusze Startowe: Umieść 3 swoich wojowników w polu Płatności. Staną się one twoimi pierwszymi funduszami.",
    "Ustal Ceny Początkowe: Umieść po jednym znaczniku Usług na dowolnym polu każdego z trzech torów Usług.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Protekcjonizm',
          description: 'Jeśli twoje pole Płatności jest puste, umieść w nim dwóch swoich wojowników.',
          order: OrderType.ORDERED,
          details: ['Mechanizm zabezpieczający. Jeśli nikt nie kupił twoich usług w ostatniej rundzie, zyskujesz dwóch własnych wojowników jako fundusze, aby utrzymać swoją działalność.']
        },
        {
          title: 'Zdobądź Dywidendy',
          description: 'Jeśli masz na mapie faktorie, zdobądź 1 PZ za każde dwa fundusze, które posiadasz.',
          order: OrderType.ORDERED,
          details: ['Policz wojowników w swoim polu Funduszy. Jeśli masz co najmniej jedną faktorię na mapie, zdobywasz jeden punkt zwycięstwa za każde dwa posiadane fundusze. Może to być znaczące źródło punktów.']
        },
        {
          title: 'Zbierz Fundusze',
          description: 'Przesuń wszystkich wojowników z pól Płatności i Zobowiązanych do pola Funduszy.',
          order: OrderType.ORDERED,
          details: ['Weź wszystkich wojowników, którymi inni gracze ci zapłacili, oraz tych, których zobowiązałeś do akcji w zeszłej turze, i przesuń ich do swojego głównego pola Funduszy. Są teraz dostępne do wydania.']
        },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Zobowiąż i Wydaj Fundusze',
          description: 'Podejmuj akcje, przesuwając wojowników ze swojego pola Funduszy.',
          order: OrderType.ORDERED,
          details: [
            "Twoi wojownicy w polu Funduszy to twoja waluta. Istnieją dwa sposoby ich użycia:",
            "Zobowiąż: Przesuń wojownika do pola 'Zobowiązani'. Otrzymasz tego wojownika z powrotem w następnej turze. Służy to do powtarzalnych akcji, takich jak Ruch, Walka, Dobranie Karty i Przekucie.",
            "Wydaj: Zwróć wojownika do zasobów jego właściciela. Ten wojownik przepada na dobre. Służy to do potężnych, stałych akcji, takich jak Werbunek i Budowa Faktorii."
          ]
        },
        {
          title: 'Ruch/Walka/Dobranie Karty',
          description: 'Zobowiąż jeden fundusz, aby wykonać ruch, rozpocząć walkę lub dobrać kartę.',
          order: OrderType.UNORDERED,
          details: ['To twoje podstawowe, powtarzalne akcje. Przesuń wojownika z pola Funduszy do pola Zobowiązanych, aby wykonać jedną z tych akcji.']
        },
        {
          title: 'Przekucie',
          description: 'Zobowiąż fundusze, aby wytworzyć kartę z ręki.',
          order: OrderType.UNORDERED,
          details: ['Aby wytworzyć, zobowiąż fundusze, przesuwając je na pola kosztu wytworzenia na torach Faktorii. Wymagane kolory są pokazane na torze. Te fundusze wrócą do ciebie w następnej turze.']
        },
        {
          title: 'Werbunek',
          description: 'Wydaj jeden fundusz, aby umieścić wojownika na polanie nad rzeką.',
          order: OrderType.UNORDERED,
          details: ['Zwróć wojownika z pola Funduszy do zasobów jego właściciela, aby umieścić jednego ze swoich wojowników na dowolnej polanie z rzeką. W ten sposób zwiększasz swoją obecność na planszy.']
        },
        {
          title: 'Budowa Faktorii',
          description: 'Wydaj dwa fundusze kontrolującego gracza, aby umieścić faktorię.',
          order: OrderType.UNORDERED,
          details: ['To twoja główna akcja punktująca. Wybierz polanę kontrolowaną przez dowolnego gracza (w tym ciebie). Wydaj dwa fundusze należące do tego gracza, aby zbudować tam faktorię odpowiedniego koloru. Natychmiast zdobądź ujawnione punkty zwycięstwa.']
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Odrzuć Karty',
          description: 'Jeśli masz więcej niż pięć kart, odrzuć nadmiarowe.',
          order: OrderType.ORDERED,
          details: ['Twój limit ręki to pięć kart. Odrzuć nadmiarowe karty.']
        },
        {
          title: 'Ustal Koszty',
          description: 'Dostosuj cenę za każdą ze swoich usług.',
          order: OrderType.ORDERED,
          details: ['Możesz przesunąć znaczniki usług na swojej planszy frakcji, aby zmienić cenę (od 1 do 4) za kupno twoich usług przez innych graczy w ich następnej turze. To kluczowa decyzja strategiczna.']
        }
      ]
    }
  }
};
