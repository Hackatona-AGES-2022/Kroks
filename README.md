## **5ª Hackatona** - Inclusão Social de ou Surdos ou Cegos
# **KROKS** - Include

A ideia base do projeto é que deficientes visuais e auditivos possam ter acesso a conteúdos que elas nunca teriam acesso, nossa ferramenta oferece tanto a tradução de imagens para som, no caso de deficientes auditivos, de som para texto e outras funções que os influenciadores possam querer utilizar como descrição de imagens para adicionar na sua página.

Além, dessas facilidades que provemos, também salvamos dados de uso para pesquisas futuras, por exemplo, nós salvamos as tags que são retornadas das imagens, o que pode auxiliar o treino de outros projetos de aprendizado de máquina, eles podem filtrar a região que o modelo irá trabalhar e reduzir o número de predições possíveis do modelo a partir da nossa lista de tags. Salvamos também os textos transcritos e as descrições de imagens gerando assim um amplo banco de dados de linguagem natural.

---

## Back End
Neste projeto foi utlízado a linguagem de programação **python**, para a escrita do **back end**. Onde nela utilizamos de frameworks como *fast-api*, e bibliotecas como: *Urllib* e *Request*. 

![python running 1](./readme/python-code-2.png)
<br>Mas com certeza as estrelas dessa aplicação são as APIs da Azure, o **Computervision** e **Speech-service**. Nelas conseguimos realizar a conversão de audio para texto, e vice-e-versa, além de realizar uma classsificação de imagem com **inteligência artificial**.

![python code 1](./readme/python-code-1.png)

---
## Front End
Claro, quando buscamos acessibilidade a primeira coisa na qual nos importamos é a relação a entre aplicação e usuário, foi por isso que a nossa escolha para o **front end** foi o *Angular*. O framework que hoje apresenta diversas ferramentas que possibi
]

litam a acessibilidade, como a nomeação de elementos para que os aparelhos modificados dos deficientes visuais possam identifica-los, para facilitar seu uso na WEB.
 