import socket
import threading
import ctypes

PORT = 5000
USERNAME = input("Digite seu nome: ")

# Lista de IPs dos PCs que vão receber
DEST_IPS = ["10.140.170.32"]  # coloque os IPs que quer

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(("", PORT))

# Função para receber mensagens
def receive_messages():
    while True:
        try:
            data, addr = sock.recvfrom(1024)
            msg = data.decode(errors="ignore")
            if not msg.startswith(f"{USERNAME}:"):
                print(f"{addr} diz: {msg}")
                ctypes.windll.user32.MessageBoxW(0, msg, "Mensagem da Rede", 0x40)
        except Exception as e:
            print("Erro recebendo mensagem:", e)

threading.Thread(target=receive_messages, daemon=True).start()

print("Digite suas mensagens. Elas serão enviadas para todos na lista de IPs.")
while True:
    message = input()
    full_message = f"{USERNAME}: {message}"
    for ip in DEST_IPS:
        sock.sendto(full_message.encode(), (ip, PORT))
