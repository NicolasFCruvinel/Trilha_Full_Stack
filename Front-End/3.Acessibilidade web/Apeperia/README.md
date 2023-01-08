<img src="https://github.com/NicolasFCruvinel/Trilha_Full_Stack/blob/main/Front-End/3.Acessibilidade%20web/Apeperia/img/logo-apeperia.svg" width=""/>

## Projeto

Avaliar como está o quesito acessibilidade em uma página já desenvolvida.

## Objetivo do projeto

Entender como pessoas com visão parcial ou totalmente comprometidas acessam as páginas e com isso perceber como os elementos criados com HTML e CSS são "lidos" por eles.
 1. Entender os principais softwares usados por essas pessoas, que são: Jaws, NVDA e para usuários Mac tem o VoiceOver, todos são da categoria leitor de tela, e são ferramentas que auxiliam pessaos com deficiência visual a acessar tudo em seus dispositivos, por trascreverem para voz tudo que está na tela.
 
 
 2. Perceber que coisas muito simples ao estruturar nossas págians HTML pode facilitar muito a leitura desses softwares, por exemplo:
    * Utilizar as tags de maneira semântica, como usar apeans um  h1 por página, colocar os titulos hierarquicamente.
    * Textos alternativos adequados.
    * Definir bem a linguagem que cada parte do texto deve ser lida.
   
 3. as propriedas Lang e Alt são muito mais importantes do se pensa.
    * Lang, ao se definir um idioma para deteminado trecho da sua página, se define como isso vai ser lido pelos leitores de tela, então é super importante você identificar os trechos que devem ser lidos de forma diferente, para não gerar confusão ao ouvinte.
    * Alt, é importante que suas imagens tenham um texto alternativo, mas será que todas precisam? É interessante que as imagens que não são de carater informativo não necessariamente tenham um texto alternativo. Além de que caso for necessário, os textos alternativos passem o verdadeiro valor da imagem de uma forma clara e rápida, nada de exagerar no alt.
        * Temos diferentes formas de colocar textos alternaticos também, como o title.
        
 4. Os formulários são partes que merecem muita atenção também, um label pode ajudar muito os ouvintes, já que sem eles o campo a ser preenchido não apresenta nenhuma dica do que é preciso colocar lá, fora isso, dentro de formulários ainda existem campos que você deseja impossibilitar a mudança, dessa forma se recoemnda que utilize o "readonly", assim você não retira o direito de leitura desse campo dos sftwares de leitura de tela.


5. CSS não é só estilo, os elementos css também aparecem para o leitor de tela, um exemplo é o "list-style" onde quando é colcocado algum estilo aqui, você percebera que o leitor de tela passara isso para o ouvinte, de forma que pode gerar confusão. Então importante levar isso em conta ao cosntruir e estilizar sua página.
   * Com oq é falado acima, podemos entrar em um ponto muito importante, que é algo muito natural quando se quer sumir com algo, utilizamos o "display:none" com muita frquência, mas já foi dito que CSS não é só estilo né, então adivinhe, tudo que fica com "diplay:none" também some para o leitor de tela, então pense, "esse elemento realmetne não precisa ser lido pelo leitor de tela?", um caso para te fazer pensar é da reação com um botão checkbox utilizando CSS, algo que é frequentemente utilizado, só que se der um display none nessa checkbox, o leitor vai passar direto por ela. O qu eé recomendado nestes casos? Mude o posicionamento do elemento e jogue ele para fora da tela :p Isso vai deixar ele legível, mas não visível :D

6. Pulando a navegação, você consegue facilmente saber do que se trata uma página acessada quase imediatamente após entrar nela, o que não é o mesmo caso para quem depende dos leitores de tela, dessa forma foi pensado em uma forma de se contornar isso, e com isso, vieram formas de pular a nevegação, que normalmente são cheias de titulos e links, dessa forma o ouvinte consegue avançar diretamente para a parte principal da página, assim podendo ter certeza do seu conteúdo o quanto antes.


Além disso tudo, aprender a utilizar o software NVDA e vários de suas funcionalidades e atalhos. Também fpo feita a utilização de WAI-ARIA.

## Cursos onde o projeto foi passado

* Acessibilidade web parte 1: tornando seu front-end inclusivo

## Tecnologias

Aqui estão as tecnologias utilizadas neste projeto.

* HTML
* CSS
* Software: NVDA


### Para Ver sua funcionalidade, acesse o link a seguir.

## Link (utilizando o GitHub juntamente com o vercel para a geração do link)
  - deploy: https://apeperia-sigma-five.vercel.app


  ## Versão

  1.0.0.0


  ## Autor

  * **Nicolas Ferreira Cruvinel Monteiro Souza** acompanhado dos cursos da Alura 

 Obrigado pela visita! Se possível divulgue e curta o perfil :D

