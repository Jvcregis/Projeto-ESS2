from pydantic import BaseModel

class DadosEndereço(BaseModel):
    rua: str
    numero: int
    bairro: str
    cidade: str
    estado: str
    cep: str
    pais: str
    complemento: str | None