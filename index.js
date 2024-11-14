document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai buah yang dipilih
    let selectedFruit = document.getElementById('buah').value;
    
    // Ambil nilai jumlah yang dimasukkan
    let quantity = parseFloat(document.getElementById('jumlah').value);
    
    // Harga per buah
    let price = 0;
    switch(selectedFruit) {
      case 'apel':
        price = 29000;
        break;
      case 'jeruk':
        price = 17000;
        break;
      case 'mangga':
        price = 26000;
        break;
      case 'anggur':
        price = 34000;
        break;
      case 'pisang':
        price = 12000;
        break;
      case 'alpukat':
        price = 32000;
        break;
      default:
        price = 0;
    }
    
    // Hitung total harga
    let total = price * quantity;
    
    // Tampilkan total harga
    document.getElementById('total').value = "Rp. " + total.toFixed(2);
  });