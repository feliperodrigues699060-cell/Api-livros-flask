# API de Livros com Python e Flask

## Objetivo

Desenvolver uma API utilizando Python e Flask para disponibilizar informações de três livros em formato JSON.

## Tecnologias utilizadas

- Python
- Flask
- JSON
- Visual Studio Code

## Instalação

Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd api-livros
```

Crie o ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual no Windows:

```bash
venv\Scripts\activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

## Execução

Execute o arquivo:

```bash
python app.py
```

## Rota disponibilizada

Método: GET

Endereço:

[http://127.0.0.1:5000/livros](http://127.0.0.1:5000/livros)

## Resposta

A API retorna três livros contendo:

- id
- titulo
- autor
- ano
