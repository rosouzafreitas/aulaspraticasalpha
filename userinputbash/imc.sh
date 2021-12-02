#! /bin/bash
echo "Calculadora IMC"
echo "Digite seu peso em KG (ex: 70.5):"
read weight
if ! [[ ${weight} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
then
while ! [[ ${weight} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
do
echo "Por favor digite um número separado por ponto (.)"
read weight
done
fi
echo "Digite sua altura em metros (use ponto ao invés de vírgula):"
read height
if ! [[ ${height} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
then
while ! [[ ${height} =~ ^[+-]?[0-9]+\.?[0-9]*$ ]]
do
echo "Por favor digite sua altura em metros, separada por ponto (.)"
read height
done
fi

imc=$(bc <<< "scale=2; $weight/($height*$height)");
echo $imc
echo "Seu IMC é de aproximadamente $imc"
if (($(bc <<< "$imc < 18.5")));
then
echo "Você está abaixo do peso"
elif (($(bc <<< "$imc >= 18.5 && $imc < 25")));
then 
echo "Você está no peso normal"
elif (($(bc <<< "$imc >= 25 && $imc < 30")));
then 
echo "Você está no sobrepeso"
elif (($(bc <<< "$imc >= 30 && $imc < 35")));
then
echo "Você está na obesidade grau I"
elif (($(bc <<< "$imc >= 35 && $imc < 40")));
then
echo "Você está na obesidade grau II"
elif (($(bc <<< "$imc >= 40")));
then
echo "Você está na obesidade grau III"
fi
echo "O Índice de Massa Corporal, apesar de conter alguns pontos fracos, é um método fácil no qual qualquer um pode obter uma indicação, com um bom grau de acuidade, se está abaixo do peso normal, acima do peso ideal, ou obeso. Porém, o método mais preciso para determinar se a pessoa está gorda é a medição do percentual de gordura corporal. Tal medição deve ser feita por profissional qualificado utilizando um medidor de dobras cutâneas."
