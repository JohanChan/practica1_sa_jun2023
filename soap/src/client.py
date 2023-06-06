''' Importamos la libreria zeep la cual nos brindara soporte 
    para poder usar peticiones SOAP '''
from zeep import Client

class Cliente():
    def __init__(self):
        #URL proporcionado con todos los servicios
        self.url = "http://www.dneonline.com/calculator.asmx?WSDL"
        #objeto tipo cliente referente a la libreria zeep
        self.client = Client(self.url)

    #Metodo utilizado para crear contacto (POST)
    def add(self,intA, intB):
        '''intA:int(obligatorio), intB:int(opcional)'''
        #peticion para crear un contacto en el servidor SOAP
        res = self.client.service.Add(intA= intA, intB= intB)
        print(res)