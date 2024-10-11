# Backend de la Agenda Telefónica

Este proyecto es un backend simple para una aplicación de agenda telefónica, implementado con Node.js y Express. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre entradas de la agenda telefónica.

## Funcionalidades

- **Obtener todas las entradas**: Permite obtener una lista de todas las entradas de la agenda en formato JSON a través de la ruta `/api/persons`.
- **Obtener una entrada específica**: Permite obtener la información de una sola entrada utilizando su ID a través de la ruta `/api/persons/:id`.
- **Agregar nuevas entradas**: Permite agregar nuevas entradas a la agenda mediante una solicitud POST a la ruta `/api/persons`.
- **Eliminar entradas**: Permite eliminar una entrada específica mediante una solicitud DELETE a la ruta `/api/persons/:id`.
- **Información adicional**: La ruta `/info` proporciona información sobre cuántas entradas hay en la agenda y la hora actual.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/JohanEmersonPinares/Mi_primera_API_con_express-.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd Mi_primera_API_con_express-
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:
```bash
npm start
```
Esto iniciará el servidor en `http://localhost:3001`.

Si deseas que el servidor se reinicie automáticamente cada vez que realices cambios en el código, puedes usar el comando:
```bash
npm run dev
```

## Pruebas

Puedes probar la API utilizando herramientas como **Postman** o **curl**. Aquí tienes algunos ejemplos de solicitudes:

### Obtener todas las entradas
```bash
curl http://localhost:3001/api/persons
```

### Obtener una entrada específica
```bash
curl http://localhost:3001/api/persons/1
```

### Agregar una nueva entrada
```bash
curl -X POST http://localhost:3001/api/persons \
-H "Content-Type: application/json" \
-d '{"name": "Nuevo Nombre", "number": "123-4567890"}'
```

### Eliminar una entrada
```bash
curl -X DELETE http://localhost:3001/api/persons/1
```

## Registro de solicitudes

Este proyecto utiliza **morgan** para el registro de solicitudes HTTP. El registro se puede configurar para mostrar diferentes niveles de detalle. En este proyecto, se utiliza la configuración **tiny** y se han añadido registros para mostrar los datos enviados en las solicitudes POST.

