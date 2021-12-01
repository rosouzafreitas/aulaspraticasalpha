echo "Calculadora IMC"
echo "Digite seu peso arredondado em KG:"
read weight
if ! [[ ${weight} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
then
while ! [[ ${weight} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
do
echo "Por favor digite um número"
read weight
done
fi
echo "Digite sua altura em centímetros (basta remover a vírgula):"
read height
if ! [[ ${height} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
then
while ! [[ ${height} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
do
echo "Por favor digite sua altura em metros, separada por ponto (.)"
read height
done
fi
((imc= (weight*100)/(height*height/100)))
echo "Seu IMC é de aproximadamente $imc"
if (($imc<19))
then
echo "Você está abaixo do peso"
elif (($imc<25))
then 
echo "Você está no peso normal"
elif (($imc<30))
then 
echo "Você está no sobrepeso"
elif (($imc<35))
then
echo "Você está na obesidade grau I"
elif (($imc<40))
then
echo "Você está na obesidade grau II"
elif (($imc>=40))
then
echo "Você está na obesidade grau III"
fi



