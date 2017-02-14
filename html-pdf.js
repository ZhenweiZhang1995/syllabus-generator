function printPDF() {
  var printDoc = new jsPDF();
  printDoc.fromHTML($('#pdf').get(0), 10, 10, {
    'width': 180
  });
  printDoc.autoPrint();
  printDoc.output("dataurlnewwindow"); // this opens a new popup,  after this the PDF opens the print window view but there are browser inconsistencies with how this is handled
}
