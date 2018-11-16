#Import the required packages
import binascii
import socket
import sys
import mysql.connector

#COnfigure the connection to the database.
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="1a2b3c4d",
  database="Heartrate1"
)

mycursor = mydb.cursor()

#formulating the SQL querry
sql = "INSERT INTO data (ind, voltage,user, time) VALUES (NULL,%s,%s,CURRENT_TIMESTAMP)"

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to the port
server_address = ('0.0.0.0', 10012)
print('starting up on {} port {}'.format(*server_address))
sock.bind(server_address)

# Listen for incoming connections
sock.listen(1)

#
# This line sets a limit of 60 seconds to wait for packets. If no packets come within 60, then we 
# 1st : clean the socket and exit the proram.
#cleaning the port is required if not you might not be able to attach again to the same port. So when want to exit the server safetly
#just stop sneding data from arduino for 60 seconds. CTR + X might not be a good way to stop this server as it wont cleanly exit it.
#
sock.settimeout(60)


while True:
    # Wait forthe arduino to connect
    print('waiting for a connection')
    connection, client_address = sock.accept()
    try:
        print('Arduino Connected: ', client_address)

        # Receive the data in small chunks and enter into DB
        while True:
            x = connection.recv(4) # here we are receiving 4 byte chunks
            print('received {!r}'.format(x)) #just printing what we recvd. Comment this line after debuging is complete
            val = (x, "Xunwei")
            mycursor.execute(sql,val)
            mydb.commit()
            
            
    finally:
        # Clean up the connection
        connection.close()












#NOTE If ubuntu complains saying posrt is being used, use the follosing with sudo multiple times..
#fuser -k 10012/tcp
