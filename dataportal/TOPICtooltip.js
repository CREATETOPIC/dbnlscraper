/* http://www.csvjson.com/csv2json */

var data = [
  {
    "auteur": "Maimbourg, Louis (1610-1686)",
    "titel": "Historie der kruisvaarders, tot de verlossing van't heilig land. / `IT`By Louis Maimburg. ; Translated from the French into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1684,
    "drukker": "Hoorn, Timotheus ten",
    "id": 100626378
  },
  {
    "auteur": "Vries, S. de (1628-1708)",
    "titel": "D'edelste verlustigingh der leer- en lees-geerige gemoederen. Of Groot historisch schouw-tooneel. / `IT`By S. de Vries`LO`",
    "jaar": 1680,
    "drukker": "Bouman, Jan (I)",
    "id": 125341172
  },
  {
    "auteur": "Heinsius, Nicolaas (jr. ; 1656-1718)",
    "titel": "Den vermakelyken avanturier, ofte De wispelturige, en niet min wonderlyke levens-loop van Mirandor. / `IT`By N.H. [= Nicolaas Heinsius jr.]`LO`",
    "jaar": 1695,
    "drukker": "Rijschooten, Pieter van",
    "id": 126596751
  },
  {
    "auteur": "-",
    "titel": "[Het wonderlĳck leven en bedryf van den vermaerden Nicolaes Molemy, anders genaamt, Kleyn Klaesje",
    "jaar": "17XX",
    "drukker": "S.l.s.n.",
    "id": 141577975
  },
  {
    "auteur": "Courtilz de Sandras, Gatien de (1644-1712)",
    "titel": "De minneryen van den groten Alcander inde Nederlanden. / `IT`[By Gatien de Courtilz de Sandras]`LO`",
    "jaar": 1684,
    "drukker": "Haan, Gillis de",
    "id": 240199065
  },
  {
    "auteur": "Waeyen, Johannes van der (1639-1701)",
    "titel": "[De] Franequer los-kop; of holbollige student. / `IT`By J.W.D.V.`LO`",
    "jaar": "16XX",
    "drukker": "s.n.",
    "id": 316230170
  },
  {
    "auteur": "Dircksz, Jacob (Oom ; 1673-1683 fl.)",
    "titel": "Een alegoris-historis verhaal van het edel en machtig koninkrĳk van Salem. / `IT`By O.J.D. van W-V [= Oom Jacob Dircksz van Wormerveer]`LO`",
    "jaar": 1683,
    "drukker": "Rieuwertsz, Jan (I)",
    "id": 841250871
  },
  {
    "auteur": "Lyly, John (ca. 1554-1606)",
    "titel": "De vermaakelĳke historie, zee en landt-reyze van Euphues, ofte Een ontleedinge des vernufts. / `IT`[By John Lyly]. ; Translated from the English by J.G. [= J. Grindal]`LO`",
    "jaar": 1682,
    "drukker": "Vinck, Andries",
    "id": 842406778
  },
  {
    "auteur": "-",
    "titel": "D'arkadisghe[!] minne-gloob, waer op, van aghter de gordĳnen der liefde, breydelloose driften, en dwaze hartstogten spelen",
    "jaar": 1683,
    "drukker": "Rampen, Herman",
    "id": 842414908
  },
  {
    "auteur": "Savary, Jacques (1622-1690)",
    "titel": "De volmaakte koopman, zynde een naaukeurige onderrechting van alles wat den inlandschen en uitlandschen koophandel betreft. / `IT`By Savary. ; Translated from the French into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1683,
    "drukker": "Sweerts, Hieronymus",
    "id": 842850465
  },
  {
    "auteur": "Thevenot, Jean de (1633-1667)",
    "titel": "Gedenkwaardige en zeer naauwkeurige reizen van den heere de Thevenot. / `IT`Translated from the French by G. van Broekhuizen`LO`",
    "jaar": 1681,
    "drukker": "Bouman, Jan (I)",
    "id": 843452307
  },
  {
    "auteur": "Scudéry, Madeleine de (1607-1701)",
    "titel": "Des doorlughtigen bassa Ibrahims en der volstandige Isabellæ wonder-geschiedenissen. / `IT`By Scudery. ; Translated from the French by S. de Vries`LO`",
    "jaar": 1679,
    "drukker": "Bouman, Jan (I)",
    "id": 843545054
  },
  {
    "auteur": "Hondorffius, Andreas (-1572)",
    "titel": "De tien geboden des Heeren. / `IT`By Andreas Hondorffius. ; Translated from the Latin tr. from the German into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1685,
    "drukker": "Bouman, Jan (I)",
    "id": 843567775
  },
  {
    "auteur": "-",
    "titel": "Hollantse trouw-gevallen",
    "jaar": 1678,
    "drukker": "Hoorn, Timotheus ten",
    "id": 844270504
  },
  {
    "auteur": "Préchac, Jean de (1647-1720)",
    "titel": "De musket-draagende heldin. Ofte Een waarachtig verhaal van het doorluchtige leeven [...] van Kristina van Meirak. / `IT`[By Jean de Préchac]`LO`",
    "jaar": 1680,
    "drukker": "Hoorn, Timotheus ten",
    "id": 844270776
  },
  {
    "auteur": "-",
    "titel": "De trouwlooze vriend, en de broederlyke minnaar, of de kracht des bloeds. / `IT`Translated from the Spanish by D.E.V.`LO`",
    "jaar": 1679,
    "drukker": "Hoorn, Timotheus ten",
    "id": 844270857
  },
  {
    "auteur": "Hoorn, Timotheus ten (1644-1715)",
    "titel": "Het leeven en bedryf van de hedendaagsche Haagsche en Amsterdamsche zalet-juffers. / `IT`[By Timotheus ten Hoorn]`LO`",
    "jaar": 1696,
    "drukker": "Hoorn, Timotheus ten",
    "id": 844281212
  },
  {
    "auteur": "Mézeray, François Eudes de (1610-1683)",
    "titel": "Chronyk van Vrankryk. : `IT`6 parts. / By De Mezeray. ; Translated into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1685,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850013267
  },
  {
    "auteur": "Maimbourg, Louis (1610-1686)",
    "titel": "Historie van de kettery der beeldstormers. / `IT`By Louis Maimburg. ; Translated from the French into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1685,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850015146
  },
  {
    "auteur": "-",
    "titel": "De kluchtige Mercurius. / `IT`Translated from the French`LO`",
    "jaar": 1684,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850080940
  },
  {
    "auteur": "-",
    "titel": "De boosaardige en bedriegelike huisvrou",
    "jaar": 1682,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850091357
  },
  {
    "auteur": "-",
    "titel": "De wandelende dukaat",
    "jaar": 1682,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850092558
  },
  {
    "auteur": "Moscherosch, Johann Michael (1601-1669)",
    "titel": "Ses satyrische wondergesighten. / `IT`By Johan Michael Moscherosch. ; Translated and adapt. S. de Vries`LO`",
    "jaar": 1680,
    "drukker": "Hoorn, Jan Claesz ten",
    "id": 850167434
  },
  {
    "auteur": "Dan, Pierre (-1649)",
    "titel": "Historie van Barbaryen, en des zelfs zee-roovers. / `IT`By Pieter Dan. ; Translated from the French into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1684,
    "drukker": "Hoorn, Jan Claesz ten",
    "id": 850168058
  },
  {
    "auteur": "-",
    "titel": "De vliegende gedagten, in een hoofd vol muizenesten",
    "jaar": 1683,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850247624
  },
  {
    "auteur": "Segrais, Jean Regnault de (1624-1701)",
    "titel": "De wonderlijke werkingen der liefde. / `IT`By De Segrais. ; Translated from the French into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1680,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850259754
  },
  {
    "auteur": "Schipper Jan",
    "titel": "Waarachtige vryagie, tusschen de stantvastige [...] Cloris en de trouwlooze Rosanier. / `IT`By Schipper Jan (pseudonym of Jan Jacobsz. Schipper)`LO`",
    "jaar": 1681,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850277450
  },
  {
    "auteur": "Vairasse, Denis (ca.1630-1672)",
    "titel": "Historie der Sevarambes, volkeren die een gedeelte van het darde vast-land bewoonen, gemeenlijk Zuid-land genaamd. / `IT`[By Denis Vairasse]. ; Translated from the French into Dutch by G. van Broekhuizen`LO`",
    "jaar": 1682,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850278570
  },
  {
    "auteur": "Hennin, Jacob de (ca. 1629-1688)",
    "titel": "De dwaalende liefde. Vertoond in ses veranderlĳke, waarachtige, ende zeer vermaakelĳke historien. / `IT`By Jakob de Hennin`LO`",
    "jaar": 1682,
    "drukker": "Hoorn, Jan Claesz ten",
    "id": 850455359
  },
  {
    "auteur": "Melton, Eduward",
    "titel": "Zeldzaame en gedenkwaardige zee- en landreizen. / `IT`By Eduward Melton [pseudonym of Gotfried van Broekhuizen]`LO`",
    "jaar": 1681,
    "drukker": "Hoorn, Jan Claesz ten",
    "id": 850456665
  },
  {
    "auteur": "Subligny, Adrien Thomas Perdou de",
    "titel": "De valsche Clelie. / `IT`[By Adrien Thomas Perdou de Subligny]. ; Translated from the French by B.V.G. [= G. van Broekhuizen]`LO`",
    "jaar": 1680,
    "drukker": "Hoorn, Timotheus ten",
    "id": 850611806
  },
  {
    "auteur": "Bidloo, Govert (1649-1713)",
    "titel": "Komste van zyne majesteit Willem III. koning van Groot Britanje, enz. in Holland. / `IT`(By Govard Bidloo)`LO`",
    "jaar": 1691,
    "drukker": "Leers, Arnout (II)",
    "id": 851461190
  },
  {
    "auteur": "Voiture, Vincent de (1597-1648)",
    "titel": "De historie van Alcidalis en Zelide. / `IT`By De Voiture`LO`",
    "jaar": 1683,
    "drukker": "Swart, Steven",
    "id": 853061548
  },
  {
    "auteur": "-",
    "titel": "D'edele Sandastra. Stralende uyt Asia in Europa. Of Cyprische Medea",
    "jaar": 1680,
    "drukker": "Royen, Jacob van",
    "id": "12514816X"
  },
  {
    "auteur": "Bussy Rabutin, Roger de (1618-1693)",
    "titel": "'tGeheim van't Fransche hof. / `IT`[By Roger de Bussy Rabutin et al.] ; Translated from the French`LO`",
    "jaar": 1680,
    "drukker": "Liefde, Jan de",
    "id": "83058031X"
  },
  {
    "auteur": "Vrye, Hippolytus de",
    "titel": "De tien vermakelikheden des houwelyks. / `IT`By Hippolytus de Vrye [pseudonym of Hieronymus Sweerts]`LO`",
    "jaar": 1683,
    "drukker": "Sweerts, Hieronymus",
    "id": "84246042X"
  },
  {
    "auteur": "Vries, S. de (1628-1708)",
    "titel": "Franckrycks kercklĳcke en weereldlĳcke staet [...] van't jaer Christi 420. tot op't jaer 1684. / `IT`By S. de Vries`LO`",
    "jaar": 1684,
    "drukker": "Hoorn, Jan Claesz ten",
    "id": "85016771X"
  },
  {
    "auteur": "-",
    "titel": "'t Leven en bedryf van d'heer Paulus Wirtz [...] velt-maerschalck ten dienste deser Vereenighde Nederlanden",
    "jaar": 1681,
    "drukker": "Hagen, Pieter",
    "id": "85231423X"
  },
  {
    "auteur": "Antonides van der Goes, Johannes (1647-1684)",
    "titel": "De gelyke twélingen, kluchtig blyspél. / `IT`[By Johannes Antonides van der Goes et al.]`LO`",
    "jaar": 1682,
    "drukker": "Magnus, Albertus",
    "id": 100531881
  },
  {
    "auteur": "Lingelbach, David (1641-)",
    "titel": "De ontdekte schyndeugd, bly-spel. / `IT`By D. Lingelbagh`LO`",
    "jaar": 1687,
    "drukker": "Lescaille, Jacob (erven)",
    "id": 100817378
  },
  {
    "auteur": "Calderón de la Barca, Pedro (1600-1681)",
    "titel": "De toverés Circe, treurspél. / `IT`By (Pedro Calderón de la Barca. ; Translated by) A.B. de Leeuw`LO`",
    "jaar": 1690,
    "drukker": "Lescaille, Jacob (erven)",
    "id": 102181675
  },
  {
    "auteur": "-",
    "titel": "Geur van geestelĳcke speceryen, uytgebreyt in eenige stichtelĳcke rym-werken",
    "jaar": "17XX",
    "drukker": "Braau, Claes",
    "id": 108874907
  },
  {
    "auteur": "-",
    "titel": "Kort en opregt verhaal van het droevig en avontuurlĳk wedervaren, van Abraham Jansz van Oelen, schipper van nieu Vos-meer [...] in die [...] hooge water vloed. En hoe hĳ [...] een (so genaemde) walvis, gevangen heeft",
    "jaar": 1683,
    "drukker": "Author (for the)",
    "id": 110197380
  },
  {
    "auteur": "Sluiter, Willem (1627-1673)",
    "titel": "Vreugt- en liefde-sangen. Aan de gemeinte J. Christi binnen [...] Eibergen. / `IT`By W. Sluiter`LO`",
    "jaar": 1682,
    "drukker": "Boekholt, Johannes",
    "id": 125103360
  },
  {
    "auteur": "-",
    "titel": "Geuse lietboeck, waer in begrepen is den oorsprongh vande troublen der Nederlantsche oorlogen",
    "jaar": 1645,
    "drukker": "Feermans, Michiel",
    "id": 139884238
  },
  {
    "auteur": "Vos, Isaac (-1651?)",
    "titel": "De beklaeghlycke dwang. Bly-eyndent treurspel. / `IT`By Isaac Vos`LO`",
    "jaar": 1677,
    "drukker": "Bouman, Jacobus",
    "id": 159851742
  },
  {
    "auteur": "Waarmond, Lieven van",
    "titel": "Hollands koors, verergert in een derdendaaghse; vervallen in een quynende sieckte; en geëyndight in ellendige dootstuypen. Sĳnde een verhaal van de onheylen [...] die den lande van Holland [...] sĳn overgekomen. / `IT`By Lieven van Waarmond`LO`",
    "jaar": 1687,
    "drukker": "Lyland, Clement van",
    "id": 164370390
  },
  {
    "auteur": "Sorgen, Philippus van (-1677)",
    "titel": "Dicht-kundige ziele-zangen, op-gesongen door verscheyde zangh-lievers. / `IT`[By Philippus van Sorgen et al.]`LO`",
    "jaar": 1681,
    "drukker": "Clerck, Willem",
    "id": 167762656
  },
  {
    "auteur": "-",
    "titel": "Het nieuwe princesse liedt-boeck of het Haeghse spelde-kussentje",
    "jaar": 1682,
    "drukker": "Lootsman, Theunis Jacobsz (wed.)",
    "id": 168756714
  },
  {
    "auteur": "Montanus, David (-1687)",
    "titel": "Stemme des gejuygs en des heils over't groote interest van een christen. [...] in gezangen vervat. / `IT`By David Montanus`LO`",
    "jaar": 1684,
    "drukker": "Boekholt, Johannes",
    "id": 169189465
  },
  {
    "auteur": "Dreyer, P.A. (1610-1630 fl.)",
    "titel": "Stichtelyke liedekens. / `IT`By P.A. Dreyer`LO`",
    "jaar": 1684,
    "drukker": "Rintjes, Hendrick",
    "id": 289035708
  },
  {
    "auteur": "-",
    "titel": "Het oudt Haerlems liedt-boeck",
    "jaar": 1682,
    "drukker": "Bouman, Jacobus",
    "id": 292658230
  },
  {
    "auteur": "-",
    "titel": "Het nieuwe groote harpje, inhoudende veele schriftuyrlijke liedekens ende bruylofts-gesangen",
    "jaar": "16XX",
    "drukker": "Groot, Gijsbert de",
    "id": 302775064
  },
  {
    "auteur": "Haeften, Benedictus van (1588-1648)",
    "titel": "De heyr-baene des cruys. / `IT`By Benedictus Haeftenus. ; Translated from the Latin by P. Mallants`LO`",
    "jaar": 1667,
    "drukker": "Kerchove, Lucas vanden",
    "id": 311458122
  },
  {
    "auteur": "Poirters, Adrianus (1605-1674)",
    "titel": "Den spieghel van Philagie. / `IT`By Adrianus Poirters`LO`",
    "jaar": 1674,
    "drukker": "Woons, Jacobus",
    "id": 314413790
  },
  {
    "auteur": "Bie, Cornelis de (1627-1715/16)",
    "titel": "Faems weer-galm der Neder-duytsche poësie. / `IT`By Cornelius de Bie`LO`",
    "jaar": 1670,
    "drukker": "Jaye, Jan",
    "id": 315173300
  },
  {
    "auteur": "Bottens, Pierre (1637-1717)",
    "titel": "Het goddelick herte ofte De woonste Godts in het herte : `IT`Part 1. / By Fulgentius Bottens`LO`",
    "jaar": 1685,
    "drukker": "Pee, Pieter van",
    "id": 315198648
  },
  {
    "auteur": "Bellemans, Daniel (1641-1674)",
    "titel": "Den lieffelycken paradys-voghel tot Godt om-hoogh vlieghende. / `IT`By Daniel Bellemans`LO`",
    "jaar": 1674,
    "drukker": "Velde, Jacob vande (I)",
    "id": 318708426
  },
  {
    "auteur": "Sluiter, Willem (1627-1673)",
    "titel": "Jeremia's klaag-liederen. / `IT`By Wilhelm Sluiter`LO`",
    "jaar": 1677,
    "drukker": "Boekholt, Johannes",
    "id": 318986590
  },
  {
    "auteur": "-",
    "titel": "Davids psalmen, nieuwlyx op rym-maat gestelt. / `IT`(By J. Oudaen et al.)`LO`",
    "jaar": 1685,
    "drukker": "Rieuwertsz, Jan (I)",
    "id": 345410114
  },
  {
    "auteur": "Sorgen, Philippus van (-1677)",
    "titel": "Aanhangsel, of tweede deel; van de dicht-kundige ziele-zangen. / `IT`By Philippus van Sorgen et al`LO`",
    "jaar": 1680,
    "drukker": "Clerck, Willem",
    "id": 375523685
  },
  {
    "auteur": "-",
    "titel": "Het Haerlems leeuwerckje, in-houdende veel aerdige nieuwe liedekens",
    "jaar": 1672,
    "drukker": "Cas, Johannes Theunisz",
    "id": 822564335
  },
  {
    "auteur": "-",
    "titel": "Lente-bloemtjes geworpen in de schoot van aangename juffers",
    "jaar": 1682,
    "drukker": "Kuyper, Jan Dirksz",
    "id": 823051390
  },
  {
    "auteur": "-",
    "titel": "Een nieuw liedt-boeck, genaemt het Enchuyser bot-schuytjen",
    "jaar": 1681,
    "drukker": "Palensteyn, Jan",
    "id": 830010750
  },
  {
    "auteur": "Ringers, Vitus (1660-1725)",
    "titel": "Stichtelĳk sang-prieel, belommerd met het Hooge Lied Salomons, ende andere heilige gesangen. / `IT`By Vitus Ringers`LO`",
    "jaar": 1686,
    "drukker": "Gyselaar, Hans",
    "id": 830534415
  },
  {
    "auteur": "-",
    "titel": "[Nephtunis zee-wagen]",
    "jaar": 1667,
    "drukker": "s.n.",
    "id": 832255130
  },
  {
    "auteur": "Winschooten, Wigardus à (ca1638-na1683)",
    "titel": "Seeman: behelsende een grondige uitlegging van de Neederlandse konst, en spreekwoorden, voor soo veel die uit de seevaart sĳn ontleend. / `IT`By W. a Winschooten`LO`",
    "jaar": 1681,
    "drukker": "Du Vivié, Johannes",
    "id": 832467294
  },
  {
    "auteur": "Krul, Jan Hermansz (1602-1644)",
    "titel": "Pampiere wereld ofte Wereldsche oeffeninge. : `IT`4 parts. / By J.H. Krul`LO`",
    "jaar": 1681,
    "drukker": "Schipper, Jan Jacobsz (wed.)",
    "id": 840969589
  },
  {
    "auteur": "Sluiter, Willem (1627-1673)",
    "titel": "Gezangen van heilige en godtvruchtige stoffe. / `IT`By W. Sluiter`LO`",
    "jaar": 1687,
    "drukker": "Schagen, Gerbrandt",
    "id": 841011095
  },
  {
    "auteur": "Huygen, Pieter (1662-na1724)",
    "titel": "De beginselen van Gods koninkryk in den mensch uitgedrukt in zinnebeelden. / `IT`(By Pieter Huygen)`LO`",
    "jaar": 1689,
    "drukker": "Krellius, Johannes",
    "id": 842430067
  },
  {
    "auteur": "-",
    "titel": "Het nieuwe rommelzootje, te samen-ghestelt van verscheyden nieuwe liedekens",
    "jaar": 1670,
    "drukker": "Lootsman, Theunis Jacobsz (wed.)",
    "id": 842997032
  },
  {
    "auteur": "Corneille, Pierre (1606-1684)",
    "titel": "Cinna. Treurspél. / `IT`By Corneille. ; Translated from the French`LO`",
    "jaar": 1683,
    "drukker": "Magnus, Albertus",
    "id": 843004479
  },
  {
    "auteur": "La Thuillerie, Jean François Juvenon de (1653-1688)",
    "titel": "Krispyn, poëet, en officier. Kluchtspel. / `IT`[By Jean François Juvenon de La Thuillerie]`LO`",
    "jaar": 1685,
    "drukker": "Magnus, Albertus",
    "id": 843004517
  },
  {
    "auteur": "Bidloo, Govert (1649-1713)",
    "titel": "Het zegepraalende Oostenryk, of Verovering van Offen. / `IT`[By Govard Bidloo]`LO`",
    "jaar": 1686,
    "drukker": "Magnus, Albertus",
    "id": 843017872
  },
  {
    "auteur": "Antonides van der Goes, Johannes (1647-1684)",
    "titel": "De Ystroom. : `IT`4 parts. / By J. Antonides van der Goes`LO`",
    "jaar": 1671,
    "drukker": "Arentsz, Pieter (II)",
    "id": 843225955
  },
  {
    "auteur": "Pluimer, Joan (-1720)",
    "titel": "De verlooren schildwacht. Kluchtpel[!]. / `IT`[By Joan Pluimer]`LO`",
    "jaar": 1686,
    "drukker": "Magnus, Albertus",
    "id": 843374713
  },
  {
    "auteur": "Gargon, Mattheus (1661-1728)",
    "titel": "Nut tyd-verdryv. / `IT`By M. Gargon`LO`",
    "jaar": 1686,
    "drukker": "Matthijsz, Paulus (erven)",
    "id": 843389818
  },
  {
    "auteur": "Lingelbach, David (1641-)",
    "titel": "Cleomenes. Trevrspel. / `IT`By D. Lingelbach`LO`",
    "jaar": 1687,
    "drukker": "Lescaille, Jacob (erven)",
    "id": 843501235
  },
  {
    "auteur": "Noozeman, Jillis (1626-1682)",
    "titel": "Klucht van Krĳn Onverstant, of Vrouwen parlement. / `IT`By J. Noseman`LO`",
    "jaar": 1671,
    "drukker": "Lescaille, Jacob",
    "id": 843832037
  },
  {
    "auteur": "Molière (1622-1673)",
    "titel": "De listige vryster, óf De verschalkte voogd; blyspél. / `IT`[By Molière]`LO`",
    "jaar": 1690,
    "drukker": "Schoonebeek, Adriaan",
    "id": 843834056
  },
  {
    "auteur": "Corneille, Pierre (1606-1684)",
    "titel": "De dood van Pompeus, treurspel. / `IT`By Corneille. ; Translated from the French`LO`",
    "jaar": 1684,
    "drukker": "Lescaille, Jacob (erven)",
    "id": 843834129
  },
  {
    "auteur": "Quinault, Philippe (1635-1688)",
    "titel": "Tooneelspel zonder tooneelspel. / `IT`By (Philippe Quinault. ; Translated by) P.D. [= P. Dubbels]`LO`",
    "jaar": 1671,
    "drukker": "Lescaille, Jacob",
    "id": 843846143
  },
  {
    "auteur": "Quinault, Philippe (1635-1688)",
    "titel": "De medevrysters, blyspel. / `IT`[By Philippe Quinault]`LO`",
    "jaar": 1689,
    "drukker": "Lescaille, Jacob (erven)",
    "id": 844006335
  },
  {
    "auteur": "Arents, Thomas (1652-1701)",
    "titel": "De krooninge van haare majesteiten, Wilhem Hendrik, én Maria Stuart, tót koning, én koninginne, van Engeland, Vrankryk, én Yrland. / `IT`(By Thomas Arents)`LO`",
    "jaar": 1689,
    "drukker": "Lescaille, Jacob (erven)",
    "id": 844053414
  },
  {
    "auteur": "Mol, Jacob de (17e E)",
    "titel": "Bedrogen lichtmis. / `IT`By J. de Mol`LO`",
    "jaar": 1671,
    "drukker": "Lescaille, Jacob",
    "id": 844137324
  },
  {
    "auteur": "Sluiter, Willem (1627-1673)",
    "titel": "Buiten- eensaem huis- somer- en winter-leven. / `IT`By W. Sluiter`LO`",
    "jaar": 1680,
    "drukker": "Boekholt, Johannes",
    "id": 852734786
  },
  {
    "auteur": "Sluiter, Willem (1627-1673)",
    "titel": "Christelĳke doodts-betrachting, bestaende in verscheyden sterf-gesangen. /  `IT`By Wilhelm Sluiter`LO`",
    "jaar": 1687,
    "drukker": "-",
    "id": 852771401
  },
  {
    "auteur": "Placker, Christianus de",
    "titel": "Euangelische leeuwerck, ofte Historie-liedekens. : `IT`5 parts. / By C.D.P. [= Christianus de Placker]`LO`",
    "jaar": 1682,
    "drukker": "s.n.",
    "id": 862243491
  },
  {
    "auteur": "-",
    "titel": "De seldsaame en noit gehoorde wal-vis-vangst, voorgevallen by St. Anna-land in't jaar 1682. / `IT`By P.P.v.S`LO`",
    "jaar": 1684,
    "drukker": "s.n.",
    "id": "83222541X"
  },
  {
    "auteur": "Luyken, Jan (1649-1712)",
    "titel": "Jesus en de ziel. : `IT`3 parts. / [By Jan Luyken]`LO`",
    "jaar": 1685,
    "drukker": "Arentsz, Pieter (II)",
    "id": "10120213X"
  },
  {
    "auteur": "Maertsz, Cornelis (17e E.)",
    "titel": "Het singende nachtegaeltje quelende soetelyck, tot stichtelĳck vermaeck voor de christelĳck ieught. / `IT`By Cornelis Maertsz`LO`",
    "jaar": 1671,
    "drukker": "Groot, Michiel de",
    "id": "85338570X"
  },
  {
    "auteur": "Vondel, Joost van den (1587-1679)",
    "titel": "Salmoneus. Treurspel. / `IT`By J.V. Vondel`LO`",
    "jaar": 1685,
    "drukker": "Lescaille, Jacob (erven)",
    "id": "84356928X"
  },
  {
    "auteur": "Hieronymus Sweerts (1629-1696)",
    "titel": "Innerlycke ziel-tochten op't H. avontmaal. / By Hieronymus Sweerts",
    "jaar": 1673,
    "drukker": "Sweerts, Hieronymus Amsterdam, 1664-1692",
    "id": 37871854
  },
  {
    "auteur": "Joachim Oudaen (1628-1692)",
    "titel": "Haagsche broeder-moord, of Dolle blydschap. Treurspel. / By J. Oudaen",
    "jaar": 1674,
    "drukker": "Smith, Johan Ernst Fredrikstad, 1672-1674",
    "id": 401543870
  },
  {
    "auteur": "Nicolaas Stapel",
    "titel": "Het lust-hof der zielen, beplant met verscheiden zoorten van geestelijke gezangen. / Comp. C.S. [= Nicolaas Stapel]",
    "jaar": 1681,
    "drukker": "Ysbrantsz, Jacob Alkmaar, 1664-1681",
    "id": 53739132
  },
  {
    "auteur": "-",
    "titel": "De geestelijke goudschaele. Zynde een versameling [...] geestelijke liedekens, psalmen en lof-sangen",
    "jaar": 1683,
    "drukker": "Rintjes, Hendrick Leeuwarden, 1656-1697",
    "id": 57041830
  },
  {
    "auteur": "Hendrick de Graef (1664-1671 fl.)",
    "titel": "Alcinea, of Stantvastige kuysheydt. Treur-bly-eynd spel. / (By Hendrick de Graef)",
    "jaar": 1671,
    "drukker": "Venendael, Adriaen Amsterdam, 1665-1671",
    "id": 95757805
  },
  {
    "auteur": "M. van Speybroeck (17e E.)",
    "titel": "Syons wijn-bergh, inhoudende verscheyden schriftuerlijcke liedekens. / By M. van Speybroeck",
    "jaar": 1670,
    "drukker": "Smidt, Henrick Middelburg, 1657-1673",
    "id": 57110336
  },
  {
    "auteur": "Jean Baptiste Racine (1639-1699)",
    "titel": "Ifigenia. Treurspél. / By Racine. ; Translated from the French",
    "jaar": 1683,
    "drukker": "Magnus, Albertus Amsterdam, 1677-1689",
    "id": 98544179
  },
  {
    "auteur": "Cornelis Bontekoe (1647-1685)",
    "titel": "Gebruik en mis-bruik van de thee. / By Cornelis Bontekoe",
    "jaar": 1686,
    "drukker": "Hagen, Pieter 's-Gravenhage, 1678-1690",
    "id": 81372132
  },
  {
    "auteur": "-",
    "titel": "Pharmacopæa Amstelredamensis, of d'Amsterdammer apotheek",
    "jaar": 1683,
    "drukker": "Hoorn, Jan Claesz ten Amsterdam, 1671-1715",
    "id": 98851233
  },
  {
    "auteur": "Steven Blankaart (1650-1704)",
    "titel": "Verhandelinge van de opvoedinge en ziekten der kinderen. / By Steph. Blankaart",
    "jaar": 1684,
    "drukker": "Sweerts, Hieronymus Amsterdam, 1664-1692",
    "id": 98852345
  }
]

var allPopups = document.getElementsByClassName("hint--top");

Array.prototype.forEach.call(allPopups, function(el) {
    console.log(el);

    for(var i = 0; i < data.length; i++){
      console.log(data[i].id +  " " + el.dataset.ppn);
      if( data[i].id == el.dataset.ppn ) {
        el.setAttribute('aria-label', "AUTEUR: " + data[i].auteur + ", TITEL: " + data[i].titel + ", JAAR: " + data[i].jaar);
        console.log('hit!');
      }
    }
});