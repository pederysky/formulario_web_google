// Función para cargar el formulario HTML
function doGet() {
  return HtmlService.createHtmlOutputFromFile('formulario');
}

// Función para enviar un correo y registrar los datos
function enviarCorreo(nombre, correo) {
  // Definir los datos del correo
  var asunto = "Bienvenido a nuestro sitio";
  var cuerpo = "Hola " + nombre + ",\n\nGracias por registrarte. Este es un correo automatizado.";

  // Enviar el correo
  GmailApp.sendEmail(correo, asunto, cuerpo);

  // Registrar los datos en Google Sheets
  registrarEnHoja(nombre, correo);

  Logger.log('Correo enviado y datos registrados: ' + nombre + ' - ' + correo);
}

// Función para registrar los datos en Google Sheets
function registrarEnHoja(nombre, correo) {
  var idHojaDeCalculo = "ID_HOJA_CALCULO"; // Reemplaza con tu ID de hoja de cálculo
  var hoja = SpreadsheetApp.openById(idHojaDeCalculo).getActiveSheet();

  // Agregar los datos a la hoja
  hoja.appendRow([nombre, correo]);
}
