/*
    =============
    Shopping Cart
    =============
    Saat nya berbelanja di harbolnas. kali ini TokoPC memiliki beberapa product
    yang menarik.
    [INSTRUCTION]
    buatlah system cart untuk TokoPC dimana user memilih belanjaan dari
    var products dengan cara memasukkan id product nya kedalam array, setelah
    itu pesanan user di olah , di subtotal dengan cara qty nya di kali price,
    lalu di total semua pesanannya.
    [EXAMPLE]
    jika user memesan [3,2,2,1], maka User telah memesan
    product-product dengan id:
    - 3 ( RAM V-Gen 16GB ) sebanyak 1 qty
      maka subtotalnya adalah price=> 1600000 * qty=> 1 = 1600000
    - 2 ( Harddisk Seagate 1TB ) sebanyak 2 qty
      maka subtotalnya adalah price=> 1500000 * qty=> 2 = 3000000
    - 1 ( Motherboard Asus GTX 1000 ) sebanyak 1 qty
      maka subtotalnya adalah price=> 1000000 * qty=> 1 = 1000000
    total nya adalah 5600000
    dengan contoh perhitungan diatas , maka outputnya adalah :
    {
        title:"Nota Pembayaran"
        carts:{
            {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:1,
                subtotal:1600000
            },
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:2,
                subtotal:3000000
            },
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:1,
                subtotal:1000000
            }
        },
        total:5600000
    }
    [NOTE]
    - product di dalam cart , tidak berurutan tidak apa - apa
    [RULE]
    - Dilarang menggunakan build in function array apapun kecuali push()
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()
*/

// Data untuk produk
var products = [
  {
    id: 1,
    title: 'Motherboard Asus GTX 1000',
    price: 1000000
  },
  {
    id: 2,
    title: 'Harddisk Seagate 1TB',
    price: 1500000
  },
  {
    id: 3,
    title: 'RAM V-Gen 16GB',
    price: 1600000
  },
  {
    id: 4,
    title: 'Monitor Samsung 15 inch',
    price: 1300000
  }
];

function cart(arr){
  // Melakukan sort data agar mempermudah proses perhitungan
  arr.sort();
  
  // Membuat sebuah object penampung output
  var output = {
    title : 'Nota Pembayaran',
    carts : [],
    total : 0
  }

  // Melakuan proses perhitungan data
  // Proses perulangan didasarkan pada jumlah product yang ada, 
  // lalu di cek, apakah ada kode yang mengarah ke kode id produk tersebut
  for(var i = 0; i < products.length; i++){
    // Membuat sebuah variabel counter untuk menghitung jumlah
    // jumlah barang yang  dibeli
    var k = 1;
    for(var j = 0; j < arr.length; j++){
      if(arr[j] == products[i].id){
        output.carts[i] = ({
          id: products[i].id,
          title: products[i].title,
          qty: k,
          subtotal: products[i].price * k
        });
        k++;
      } 
    }
  }

  // Melakukan perhitungan totak belanja
  for(var  i = 0; i < output.carts.length; i++){
    output.total += output.carts[i].subtotal;
  }

  // Jika tidak ada produk yang dibeli, maka return maka tidak bisa dilanjutkan
  return arr.length == 0 ? 'anda harus memilih product' : output;
}



console.log(cart([3, 1, 2, 1, 3, 3]))
/*
    {
        title:"Nota Pembayaran"
        carts:[
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:2,
                subtotal:2000000
            },
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:1,
                subtotal:1500000
            },
            {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:3,
                subtotal:4800000
            }
        ],
        total:8300000
    }
*/

console.log(cart([1, 3, 2, 1, 4, 3]))
/*
    { title: 'Nota Pembayaran',
    cart:
    [{ id: 1,
        title: 'Motherboard Asus GTX 1000',
        qty: 2,
        subtotal: 2000000 },
    { id: 3, title: 'RAM V-Gen 16GB', qty: 2, subtotal: 3200000 },
    { id: 2,
      title: 'Harddisk Seagate 1TB',
      qty: 1,
      subtotal: 1500000
    },
    { id: 4,
      title: 'Monitor Samsung 15 inch',
      qty: 1,
      subtotal: 1300000
    }],
    total: 8000000 }
*/

console.log(cart([]))
// anda harus memilih product