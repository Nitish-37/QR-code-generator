function generateQRCode() {
    const qrText = document.getElementById('qrText').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    
    // Clear the container before generating a new QR code
    qrCodeContainer.innerHTML = '';
  
    if (qrText.trim() === '') {
      alert('Please enter some text or a URL');
      return;
    }
  
    // Generate the QR code
    new QRCode(qrCodeContainer, {
      text: qrText,
      width: 200,
      height: 200,
    });
  }
  