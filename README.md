# Proyecto de Envío de Correos Automáticos con Google Apps Script

Este proyecto automatiza el proceso de enviar correos electrónicos a los usuarios registrados a través de un formulario HTML. Los correos pueden incluir archivos adjuntos de Google Drive y los datos de los registros se almacenan en una hoja de cálculo de Google Sheets.

## Características

- **Formulario de Registro HTML**: Recoge el nombre y correo electrónico del usuario.
- **Envío de Correos Automatizados**: Envía un correo de bienvenida al usuario.
- **Archivos Adjuntos Opcionales**: Los correos pueden incluir archivos adjuntos desde Google Drive.
- **Almacenamiento de Datos**: Los datos de los usuarios se registran automáticamente en Google Sheets.
- **Evitar Envíos Múltiples**: Solo se puede enviar el formulario una vez. Después de enviar, el formulario se oculta y se muestra un mensaje de agradecimiento.

## Requisitos

1. **Google Apps Script**: El proyecto está basado en Google Apps Script, que interactúa con Gmail, Google Drive y Google Sheets.
2. **Drive API**: Necesitarás activar el servicio **Drive API** para poder interactuar con los archivos de Google Drive.
3. **Acceso a Google Sheets**: Necesitarás tener una hoja de cálculo en Google Sheets para almacenar los registros de los usuarios.

## Configuración

### 1. Activar el servicio **Google Drive API**

Para interactuar con Google Drive desde Google Apps Script, debes habilitar el servicio **Drive API**. Sigue estos pasos:

1. Abre tu proyecto de Google Apps Script.
2. Haz clic en `Editor` en la barra de menú y selecciona `Servicios`.
3. En la ventana emergente, haz clic en `+ Agregar servicio`.
4. Busca **Drive API** y actívalo.
5. Guarda los cambios.

### 2. Obtener el ID de los Archivos de Google Drive

Para adjuntar archivos desde Google Drive a los correos electrónicos, necesitarás el ID de cada archivo. Aquí te explicamos cómo obtenerlos:

1. Ve a [Google Drive](https://drive.google.com/).
2. Haz clic derecho sobre el archivo que deseas adjuntar y selecciona **Obtener enlace**.
3. En el enlace proporcionado, encontrarás una parte como esta:  
   `https://drive.google.com/file/d/1Fxs8Y5clisdvvlKkQqw5qenIOXUuwPcQ/view?usp=drive_link`
   - El **ID del archivo** es la parte entre `/d/` y `/view?`, es decir:  
     `1Fxs8Y5clisdvvlKkQqw5qenIOXUuwPcQ`.

### 3. Obtener el ID de la Hoja de Cálculo de Google Sheets

Para almacenar los registros de los usuarios en Google Sheets, necesitarás el ID de la hoja de cálculo:

1. Abre la hoja de cálculo en Google Sheets.
2. En la barra de direcciones de tu navegador, verás una URL como esta:  
   `https://docs.google.com/spreadsheets/d/1UQGvlHBDOv4PappvDuZunuTU2SPGDV4etp1Nd8LV_Fw/edit#gid=0`
   - El **ID de la hoja de cálculo** es la parte entre `/d/` y `/edit`, es decir:  
     `1UQGvlHBDOv4PappvDuZunuTU2SPGDV4etp1Nd8LV_Fw`.

### 4. Configurar el Código

Una vez que tengas los **IDs de los archivos de Google Drive** y el **ID de la hoja de cálculo**, debes reemplazar los valores en el código de Google Apps Script.

```javascript
var archivoId = "TU_ID_DE_HOJA_DE_CALCULO"; // Sustituye con el ID de tu hoja de cálculo
var archivosAdjuntosIds = ["TU_ID_DE_ARCHIVO_1", "TU_ID_DE_ARCHIVO_2"]; // Sustituye con los IDs de los archivos que quieras adjuntar
