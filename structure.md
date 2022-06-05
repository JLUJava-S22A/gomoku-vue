```mermaid
graph LR
server(Server)
server-->SSYN
server-->SACK
server-->SFIN
SSYN-->status

client(Client)
client-->CSYN
client-->CACK
client-->CFIN
```
