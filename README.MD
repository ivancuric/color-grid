# O zadatku

## Pristup

Za izradu zadatka je korišten Create React App zbog pristupačnosti.

Iako se preporuča korištenje Less-a, koristio sam Sass jer ga je moguće koristiti u CRA bez eject-anja i uređivanja webpacka.

Iz istog razloga sam se odlučio za korištenje CSS modula, iako preferiram [astroturf](https://github.com/4Catalyzer/astroturf), koji je CSS-in-JS rješnje bez runtimea.

## Bojanje polja

Kako bi se bolje vidio raspored vrijednosti po poljima, upotrijebljene su boje koje se zbog svojih perceptivnih karakteristika koriste u vizualizaciji podataka.

Izvori:

- [How To Avoid Equidistant HSV Colors](https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/)
- [Cartographic Journal: ColorBrewer.org: An Online Tool for Selecting Colour Schemes for Maps](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.361.6082&rep=rep1&type=pdf)

Unaprijed definirane kolor sheme:

- [ColorBrewer: Color Advice for Maps](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)

Kako kolor sheme od ColorBrewer-a imaju ograničeni broj unaprijed definiranih vrijednosti, bilo je potrebno generirati vrijednosti programatski. Za to je korišten [chroma.js](https://vis4.net/chromajs/). Također je moguće u `app-config.ts` postaviti bilo koji array boja koji će se interpolirati na broj polja.
