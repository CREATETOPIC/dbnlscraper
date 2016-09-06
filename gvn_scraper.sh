#!/bin/bash

#urn:gvn:MULM01:Br-M-1865-6

echo "Vul in de code achter urn=: "
read bookname
echo "Nummer van de eerste pagina: "
read firstpage
echo "Nummer laatste pagina: "
read lastpage
echo "PPN-nummer: "
read ppn

mkdir ${ppn}

for ((i=firstpage; i<=lastpage; i++));
do
		echo DOWNLOADING IMAGE $i
    wget -O ${ppn}'/'${ppn}'_p'${i}'.jpeg' 'http://resolver.kb.nl/resolve?urn='${bookname}'&role=page&count='${i}'&role=image&size=largest'
    sleep 2s
done