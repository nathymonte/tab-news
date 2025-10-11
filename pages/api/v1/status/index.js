function status(request, response) {
  response.status(200).json({ chave: "nova mensagem" });
}

export default status;
