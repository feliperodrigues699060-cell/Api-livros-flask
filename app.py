from flask import Flask, jsonify

app = Flask(__name__)

livros = [
    {
        "id": 1,
        "titulo": "Harry Potter e a Pedra Filosofal",
        "autor": "J.K. Rowling",
        "ano": 1997
    },

    {
        "id": 2,
        "titulo": "O Pequeno Príncipe",
        "autor": "Antoine de Saint-Exupéry",
        "ano": 1943
    },

    {
        "id": 3,
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "ano": 1954
    }
]

@app.route('/livros', methods=['GET'])
def listar_livros():
    return jsonify({"livros": livros})

if __name__ == '__main__':
    app.run(debug=True)