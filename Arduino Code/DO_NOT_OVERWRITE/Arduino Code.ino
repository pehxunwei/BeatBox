
#include <ESP8266WiFi.h>           // Use this for WiFi instead of Ethernet.h
//#include <MySQL_Connection.h>
//#include <MySQL_Cursor.h>
#include "MegunoLink.h"
#include "Filter.h"
#include <ESP8266WiFiMulti.h>


ExponentialFilter<long> ADCFilter(10, 0);
ESP8266WiFiMulti WiFiMulti;
// Use WiFiClient class to create TCP connections
  WiFiClient client;


const uint16_t port = 10012;

const char * host = "18.188.82.61";


uint16_t x,y,z; 

char sendBuf [4];

void setup()
{
  Serial.begin(115200);


WiFi.mode(WIFI_STA);
  WiFiMulti.addAP("Hot spot/router ID", "Hot spot/router Password");

  Serial.println();
  Serial.println();
  Serial.print("Waiting for WiFi... ");

  while (WiFiMulti.run() != WL_CONNECTED) {
    Serial.println("Connecting to Wifi..");
    delay(100);
  }

  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

delay(500);


Serial.print("Now connecting to Server IP : ");
Serial.println(host);
  
while (!client.connect(host, port)) {
    Serial.println("connection failed");
    Serial.println("Retrying in 5 sec...");
    delay(1000);
  }
  
 Serial.println("Connected to Python Server");

}

void loop()
{


  int RawValue = analogRead(0);
   ADCFilter.Filter(RawValue);
   x = ADCFilter.Current();

 // This will send the request to the server

/* 
 *  We need to make sure that we always send 3 charactors to the server. Because the server always read 3 charactors. The following code makes sure of it.
 *  
 */

if (x <= 9) {
  
    client.print("0");
    client.print("0");
    client.print("0");
    client.print(x);
  
  }

if (x <= 99 && x > 9) {
  
  client.print("0");
  client.print("0");
  client.print(x);
  
  }

if (x > 99 && x < 1000) {

  
  client.print("0");
  client.print(x);
  
  }

  if ( x > 1000) {

  client.print(x);
  
  }

  //cx = snprintf ( sendBuf, 3,, 60, 60/2 );
 // client.print(x);
 
  Serial.println(x);


  //read back one line from server
  //String line = client.readStringUntil('\r');
  //Serial.println(line);

  //Serial.println("closing connection");
 // client.stop();

  //Serial.println("wait 5 sec...");
//delay(5000);

yield();
delay (50); // This delay is important to control the flow of data sent out. This effectuveli controls the sample speed of hte ADC. DO NOT MAKE THIS ZERO.

}
