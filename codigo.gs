// Función para cargar el formulario HTML
function doGet() {
  return HtmlService.createHtmlOutputFromFile('formulario');
}

// Función para enviar un correo y registrar los datos
function enviarCorreo(nombre, correo) {
  // Definir los datos del correo
  var asunto = "Bienvenido a nuestro sitio";
  var cuerpo = "Hola " + nombre + ",\n\nGracias por registrarte. Este es un correo automatizado.";

  // Lista de IDs de archivos en Google Drive (opcionalmente, puedes agregar más IDs)
  var archivoIds = [
    "ID_1",  // Reemplaza con el ID del archivo que deseas enviar
    "ID_2"   // Otro archivo adjunto (agrega más IDs si es necesario)
  ];

  var archivosAdjuntos = [];

  // Procesar los archivos adjuntos
  for (var i = 0; i < archivoIds.length; i++) {
    try {
      // Obtener el archivo de Google Drive por su ID
      var archivo = DriveApp.getFileById(archivoIds[i]);
      // Agregar el archivo a la lista de adjuntos, como un objeto Blob
      archivosAdjuntos.push(archivo.getAs(archivo.getMimeType()));
    } catch (e) {
      Logger.log("Error al obtener el archivo con ID: " + archivoIds[i] + " - " + e.message);
    }
  }

  // Si hay archivos adjuntos, los enviamos con el correo
  if (archivosAdjuntos.length > 0) {
    GmailApp.sendEmail(correo, asunto, cuerpo, {
      attachments: archivosAdjuntos,  // Adjuntamos todos los archivos
      name: 'Automated Email'
    });
  } else {
    // Si no hay archivos adjuntos, enviamos el correo sin archivos
    GmailApp.sendEmail(correo, asunto, cuerpo, {
      name: 'Automated Email'
    });
  }

  // Registrar los datos en Google Sheets
  registrarEnHoja(nombre, correo);

  Logger.log('Correo enviado y datos registrados: ' + nombre + ' - ' + correo);
}

// Función para registrar los datos en Google Sheets
function registrarEnHoja(nombre, correo) {
  // ID de la hoja de cálculo (reemplaza con tu ID de hoja de cálculo)
  var idHojaDeCalculo = "ID_HOJA_CALCULO"; // Reemplaza con tu ID de hoja de cálculo
  var hoja = SpreadsheetApp.openById(idHojaDeCalculo).getActiveSheet();

  // Agregar los datos a la hoja
  hoja.appendRow([nombre, correo]);
}
