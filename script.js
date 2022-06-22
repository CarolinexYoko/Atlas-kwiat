var numer=1;
var numer2=1;
var tekst="";
var tekst2="";
var tekst3="";
var tekst4="";
var tekst5="";




function wyswietl_slajd()
{
	var obraz='<img src="kwiat'+numer+'.jpg" width="411" height="478"/>';
	document.getElementById('slider').innerHTML = obraz;
	
	if(numer==1 && numer2==1)
	{	tekst="Chaber bławatek to roślina jednoroczna należąca do rodziny astrowatych (Asteraceae). Dorasta do wysokości 90 cm, ma 	szarozielone lancetowate liście i wzniesioną łodygę. Roślina przyciąga pszczoły i inne owady. Kwitnie od maja do sierpnia. Wytwarza pojedyncze i pełne kwiaty barwy białej, różowej i najbardziej charakterystycznej - niebieskiej. Owocem jest niełupek.";
	}
	else if(numer==1 && numer2==2)tekst="Występuje w Europie oraz na Syberii Zachodniej. W Polsce pospolity chwast polny, archeofit.";
	else if(numer==1 && numer2==3)tekst="Łodyga: Cienka, prosta, lekko żeberkowana, pajęczynowato owłosiona, rozgałęziona.<br/>Liście: Ułożone skrętolegle, najczęściej równowąskolancetowate, szarozielone, szerokości 2-5 mm. Dolne na ogonkach, z pojedynczymi, małymi ząbkami lub pierzastodzielne z 2-3 łatkami. Górne niepodzielone, siedzące.<br/>Owoce: Jedwabiście puszyste, przeważnie niebieskoszarobrązowe z białym wierzchołkiem niełupki. Jedna roślina wytwarza około 700‒1600 nasion.";
	else if(numer==1 && numer2==4)tekst="Rozwój: roślina jednoroczna. Kwiaty przedprątne, zapylane przez motyle, muchówki, błonkówki.<br/>Owoce rozsiewane przez wiatr i mrówki. Zachowują zdolność kiełkowania przez 5-10 lat.<br/>Siedlisko: pola uprawne, gdzie rozsiewany jest razem ze zbożami, nieużytki, przydroża, ugory. Jest chwastem. Często spotykany na glebach ubogich w wapń (roślina wskaźnikowa gleb ubogich w wapń).";
	else if(numer==1 && numer2==5)tekst="Zbiór i suszenie: kwiat zbierać w słoneczny dzień, rano, po obeschnięciu rosy. Zbiera się płatki, wyrywając je z koszyczka. Zebrane kwiaty należy suszyć bardzo szybko w zacienionym i silnym przewiewie, aby nie zblakły, gdyż wówczas tracą własności lecznicze. Susz szczelnie zamknąć i przechowywać w ciemności.";
	else if(numer==1 && numer2==6)tekst="Działanie: moczopędne, żółciopędne i przeciwzapalne. Ze względu na bardzo łagodne działanie przeciwzapalne stosowany przy zapaleniu spojówek i w pediatrii. Napar z kwiatów zalecany jest przy chorobach nerek, stanach zapalnych kłębków i miedniczek nerkowych, przy niewydolności krążenia i w kamicy nerkowej. Zewnętrznie stosuje się go przy trudno gojących się ranach i owrzodzeniach, w stanach zapalnych oczu.";
	
	else if(numer==2 && numer2==1)tekst="Dzika róża to bardzo popularna roślina - wcale nie jest trudno samemu zbierać owoce i płatki dzikiej róży. Krzewy różane są ozdobą miejskich skwerów, parków i przydomowych ogrodów. Potrzebują dużo słońca, ale poza tym mają skromne wymagania, dlatego rosną też przy drogach, na obrzeżach lasów, nieużytkach.";
	else if(numer==2 && numer2==2)tekst="Występuje na obszarach umiarkowanych i ciepłych półkuli północnej. Można ją spotkać prawie w całej Europie, na terenach do 1500 m n.p.m., w Afryce Północnej, na Wyspach Kanaryjskich, na Maderze, w Azji, rozprzestrzeniła się także w Australii i Nowej Zelandii. W Polsce jest gatunkiem pospolitym.";
	else if(numer==2 && numer2==3)tekst="Pokrój: Krzew o wysokości do 3 m, czasami pnącze o wysokości do 12 m.. Gałęzie są łukowato odgięte ku ziemi. Gałązki z silnie, hakowato zakrzywionymi kolcami.<br/>Liście: Złożone są z 5–7 jajowato-eliptycznych, ostro ząbkowanych listków o ostro, pojedynczo lub podwójnie piłkowanych brzegach. Są zielone, rzadko tylko sine, nagie lub owłosione.<br/>Owoce: Owoc szupinkowy wielkości 2–3 cm, wydłużony, purpurowoczerwony.";
	else if(numer==2 && numer2==4)tekst="Nanofanerofit. Porasta zarośla, skraje lasów, miedze, przydroża. W klasyfikacji zbiorowisk roślinnych gatunek charakterystyczny dla klasy (Cl.) Rhamno-Prunetea. Kwitnie od maja do lipca, jej kwiaty wydzielają przyjemny zapach. Owoce są rozsiewane przez zwierzęta (endochoria).<br/>Gatunek zbiorowy, zmienny morfologicznie.<br/>Tworzy mieszańce z różą czerwonawą, r. gęstokolczastą, r. francuską, r. Jundziłła.";
	else if(numer==2 && numer2==5)tekst=" owoce zbiera się, gdy dojrzeją, ale jeszcze zanim zrobią się miękkie. Suszenie ich jest dość trudne; owoce trzeba rozdrobnić, przez pierwsze 10 min. należy trzymać je w temp. ok. 100 °C, by szybko zniszczyć enzymy rozkładające witaminę C, potem suszyć w temp. ok. 50–60 °C.";
	else if(numer==2 && numer2==6)tekst="Surowiec zielarski: dojrzałe owoce (Fructus Rosae). Są składnikiem wielu mieszanek ziołowych. Zawierają oprócz ogromnej ilości witaminy C garbniki, karotenoidy, kwasy organiczne, olejki eteryczne, cukry, pektyny. Owoce są niezwykle bogatym źródłem witaminy C – zawierają jej dziesięciokrotnie więcej niż porzeczka czarna. Już 1-3 jej owoce w zupełności wystarczą do pokrycia dziennego zapotrzebowania człowieka na tę witaminę.";
	
	else if(numer==3 && numer2==1)tekst="Stokrotka to bardzo wdzięczny kwiat, a jej uprawa nie stwarza żadnych problemów. Do prawidłowego rozwoju potrzebuje gleby żyznej, przepuszczalnej o odczynie obojętnym. Należy pamiętać o regularnym, ale niezbyt intensywnym podlewaniu rośliny. Ziemia powinna być wilgotna, ale nie mokra. Roślina najlepiej rośnie na stanowisku słonecznym, wtedy też jej kwitnienie jest najobfitsze, ale dobrze znosi również półcień.";
	else if(numer==3 && numer2==2)tekst="Występuje na większości obszaru Europy, w Azji Zachodniej i Azerbejdżanie, oraz Libii. Rozprzestrzenia się też gdzieniegdzie poza tym obszarem rodzimego występowania. Jest pospolita na terenie całej Polski.";
	else if(numer==3 && numer2==3)tekst="Łodyga: Głąbik o wysokości 4-20 cm, prosto wzniesiony, delikatnie owłosiony. Roślina wytwarza podziemne rozłogi. Kłącze walcowate i rozgałęzione.<br/>Liście: Zebrane w różyczkę, łopatkowe lub odwrotnie jajowate, jednonerwowe, nieco karbowane lub ząbkowane. Zwężają się w ogonek liściowy.<br/>Owoc: Odwrotnie jajowata, gładka i żółtobrunatna niełupka długości ok. 1 mm.";
	else if(numer==3 && numer2==4)tekst="Bylina, hemikryptofit. Rośnie na łąkach, pastwiskach, przydrożach. W górach występuje po piętro kosówki. Kwitnie przeważnie od marca do listopada, czasem również w zimie, jeśli jest bezśnieżna i nie ma mrozów. Preferuje gleby zasobne w składniki mineralne i średnio próchniczne. Liczba chromosomów 2n = 18";
	else if(numer==3 && numer2==5)tekst="Surowiec zielarski: surowcem zielarskim jest kwiat – Flos Bellidis. Kwiat zawiera substancje gorzkie, garbniki, kwasy organiczne, śluz, saponiny, olejki eteryczne oraz znaczne ilości soli mineralnych. Z kwiatów przygotowuje się napary";
	else if(numer==3 && numer2==6)tekst="W medycynie ludowej kwiat stokrotki stosuje się przy krwawieniach z płuc i pęcherza moczowego, także jako środek przeciwgorączkowy i ogólnie wzmacniający. Napar poleca się przy złej przemianie materii i nieregularności menstruacji oraz jako środek moczopędny (przy kamicy nerkowej i pęcherzowej) i przeczyszczający. Napar ziela stokrotki obniża ciśnienie krwi oraz przeciwdziała miażdżycy, toteż polecany jest dla osób starszych.";
	
	else if(numer==4 && numer2==1)tekst="Chmiel w Polsce znany jest od wieków – wykorzystywany w browarnictwie przez Średniowiecznych mnichów czy leczniczo przez zielarzy i znachorów, a doceniony później przez medycynę naturalną. Na świecie prozdrowotne właściwości chmielu wykorzystywali już Starożytni Rzymianie czy Grecy, jak również medycyna chińska. Roślina posiada wielokierunkowe działanie";
	else if(numer==4 && numer2==2)tekst="Występował w stanie dzikim prawdopodobnie w południowej Europie, na Bliskim Wschodzie i w Ameryce Północnej. W Polsce gatunek pospolity do 700 m n.p.m. Uprawiany przez człowieka skolonizował (jako zdziczała roślina uprawna) strefę klimatów umiarkowanych i ciepłych całej Eurazji.";
	else if(numer==4 && numer2==3)tekst="Łodyga: Płożąca się lub pnąca, czterokanciasta, z haczykowato wygiętymi do tyłu włoskami na krawędziach. Zawsze wije się w prawo. Dorastając w stanie dzikim do 6 m.<br/>Liście: Naprzeciwległe, długoogonkowe, o 3 do 5 klapach na pędach głównych i bocznych. Tam, gdzie ukazują się kwiaty, liście są dużo mniejsze, najczęściej bezklapowe. Nasada sercowato wycięta, brzegi gruboząbkowane. Górna powierzchnia szorstko owłosiona. Przylistki jajowatolancetowate, często zrośnięte, owłosione.<br/>";
	else if(numer==4 && numer2==4)tekst="Roślina wieloletnia, dwupienna – na jednej roślinie wyrastają tylko kwiaty żeńskie lub tylko męskie. Co roku z podziemnej karpy wyrastają nowe pędy nadziemne i rozłogi. Roślina, jeśli nie znajdzie podpory, płoży się.<br/>Rośnie w wilgotnych zaroślach, olsach i łęgach, nad rowami, a także na terenach ruderalnych, przy zabudowaniach i śmietniskach.";
	else if(numer==4 && numer2==5)tekst="Kwiatostany żeńskie, zwane szyszkami, zbiera się w sierpniu. Obrywane są ręcznie lub przy pomocy maszyn do zrywania. Szyszki suszy się w temperaturze do 40-55 °C). Szyszki chmielu należy przechowywać krótko (maksymalnie rok) w ciemnym i suchym miejscu.";
	else if(numer==4 && numer2==6)tekst="Napar z chmielu działa skutecznie przy zasypianiu, łagodzi nadpobudliwość, ma zastosowanie w leczeniu gruczołu krokowego, usprawnia trawienie. Wyciągu z szyszek używa się na wrzody i trudno gojące się rany, ze względu na silne właściwości bakteriobójcze.";
	
	else if(numer==5 && numer2==1)tekst="Chrzan ma liczne właściwości lecznicze, jednak mało kto o nich wie, dlatego znalazł zastosowanie przede wszystkim w kuchni, głównie jako przyprawa wielkanocna. Tymczasem chrzan to naturalne lekarstwo na chore zatoki, katar, niestrawność, a także na bóle kręgosłupa i reumatyczne.";
	else if(numer==5 && numer2==2)tekst="Występuje w Europie, umiarkowanej części Azji, na Nowej Zelandii oraz w Ameryce Północnej. Roślina uprawna i często dziczejąca (kenofit i ergazjofigofit). W Polsce występuje pospolicie na całym obszarze.";
	else if(numer==5 && numer2==3)tekst="Łodyga: Osiągająca do 150 cm wysokości. Rozgałęziona w górnej części, kanciasta, gładka, ulistniona.<br/>Korzeń: Długi, mięsisty o barwie jasnożółtej, na przekroju biały. O bardzo silnym aromacie i ostrym smaku.<br/>Liście: Odziomkowe bardzo duże, nawet do 100 cm długości, podłużnojajowate do podłużnych o sercowatej nasadzie, zwężone w długi ogonek. Środkowe liście łodygowe pierzastodzielne, górne, siedzące, lancetowate do równowąskich, karbowane lub piłkowane, szczyty tępe.";
	else if(numer==5 && numer2==4)tekst="Bylina, geofit. Roślina zakwita od maja do czerwca, jest owadopylna. W korzeniu zawarty jest glikozyd synigryna ulegający rozpadowi do olejku gorczycznego (0,1–0,2%). Liście chrzanu są trujące dla krów. Roślina ruderalna zasiedlająca przydroża, rowy, wilgotne zarośla. Na polach uprawnych bywa uciążliwym, trudnym do wytępienia chwastem. W klasyfikacji zbiorowisk roślinnych gatunek charakterystyczny dla O. Artemisietalia. Liczba chromosomów 2n = 32.";
	else if(numer==5 && numer2==5)tekst="Rozmnaża się na wiosnę poprzez wysiew nasion, rozdzielanie korzeni oraz sadzonki korzeniowe. Wymaga nasłonecznionego stanowiska z lekką, żyzną i wilgotną glebą. Nie nadaje się do uprawy w pomieszczeniach.<br/>Drobno starty chrzan jest używany do przemywania twarzy rano i wieczorem. Usuwa ze skóry przebarwienia, piegi, wybiela skórę i czyni ją delikatniejszą. Stosowany jest do wybielania piegów po wyparzeniu w mleku i dodaniu białego octu.";
	else if(numer==5 && numer2==6)tekst="Chrzan przejawia działanie grzybobójcze, bakteriobójcze, wykrztuśne oraz niewielkie moczopędne i przeciwreumatyczne, pobudza wydzielanie soków trawiennych i działa przeciwwirusowo. Wewnętrznie jest używany przy uciążliwym kaszlu i zapaleniu oskrzeli, przy anemii, zaburzeniach trawienia, chronicznym katarze, chorobach reumatycznych i przy schorzeniach wątroby i dróg żółciowych (z wyjątkiem marskości wątroby). Zewnętrznie okładów ze świeżo utartego korzenia używa się przy chorobach reumatycznych i nerwobólach.";
	
	
	
	
	
	
	if(numer==1)tekst2="Symbol pruskiej skromności, ulubiony kwiat Wilhelma I, kojarzący się z błękitem pruskim.";
	else if(numer==2)tekst2="Próbowano ją kiedyś stosować jako lek na wściekliznę, stąd jej angielska nazwa dog-rose. Była uprawiana w Starożytnym Rzymie. Rzymianie wykonywali z niej wieńce, które nakładali na głowę podczas uczt. Wypełniali jej płatkami także poduszki, co miało uspokajać i usypiać.";
	else if(numer==3)tekst2="Jeden gatunek (stokrotka pospolita) jest powszechnie uprawiany jako roślina ozdobna w ogrodach. Uprawiane są zazwyczaj odmiany ozdobne o pełnych, lub półpełnych kwiatach i większych koszyczkach od typowej, dziko rosnącej formy.";
	else if(numer==4)tekst2="Zawarty w chmielu ksantohumol wykazuje działanie przeciwwirusowe, przeciwbakteryjne, przeciwgrzybicze, przeciwutleniające i przeciwnowotworowe (głównie wobec raka płuca, jelita grubego, piersi, jajnika, prostaty i nowotworów mózgu jak glejak wielopostaciowy i nerwiak zarodkowy).";
	else if(numer==5)tekst2="Korzenie chrzanu pospolitego są używane jako przyprawa, a także jako roślina lecznicza. W medycynie niekonwencjonalnej stosuje się go przy bólach mięśniowych pleców i w pasie, przy przeziębieniach, ranach ropiejących, wrzodach, zapaleniu korzonków nerwowych, zapaleniu uszu.";
	
	if(numer==1)tekst3="Chaber bławatek";
	else if(numer==2)tekst3="Róża dzika";
	else if(numer==3)tekst3="Stokrotka pospolita";
	else if(numer==4)tekst3="Chmiel zwyczajny";
	else if(numer==5)tekst3="Chrzan pospolity";
	
	if(numer==1)tekst4="Centaurea cyanus L.<br/>Rodzina: astrowate Asteraceae";
	else if(numer==2)tekst4="Rosa canina L.<br/>Rodzina: różowate";
	else if(numer==3)tekst4="Bellis perennis<br/>Rodzina: astrowate";
	else if(numer==4)tekst4="Humulus lupulus.<br/>Rodzina: konopiowate";
	else if(numer==5)tekst4="Armoracia rusticana<br/>Rodzina: kapustowate";
	
	if(numer2==1)tekst5="Podstawowe informacje";
	else if(numer2==2)tekst5="Występowanie";
	else if(numer2==3)tekst5="Morfologia";
	else if(numer2==4)tekst5="Biologia i ekologia";
	else if(numer2==5)tekst5="Surowiec";
	else if(numer2==6)tekst5="Zastosowanie";
	document.getElementById('text').innerHTML=tekst;
	document.getElementById('facts').innerHTML=tekst2;
	document.getElementById('title').innerHTML=tekst3;
	document.getElementById('rest').innerHTML=tekst4;
	document.getElementById('kategory').innerHTML=tekst5;
	
	
}
window.onload=wyswietl_slajd;


function przewin_slajd()
{
	numer++;
	if(numer==6)
	{
		numer=1;
	}
	wyswietl_slajd();
	
}
function cofnij_slajd()
{
	numer--;
	if(numer==0)
	{
		numer=5;
	}
	wyswietl_slajd();
}
function spis()
{
	numer2=1;
	wyswietl_slajd();
}

function wystepowanie()
{
	numer2=2;
	wyswietl_slajd();
}
function morfologia()
{
	numer2=3;
	wyswietl_slajd();
}
function biologia()
{
	numer2=4;
	wyswietl_slajd();
}
function surowiec()
{
	numer2=5;
	wyswietl_slajd();
}
function zastosowanie()
{
	numer2=6;
	wyswietl_slajd();
}