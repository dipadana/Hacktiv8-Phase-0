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

function cart(arr){
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

  var output = {
    title : 'Nota Pembayaran',
    carts : []
  }

  var k = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < products.length; j++){
      if(arr[i] == products[j].id){
        
        for(var l = 0; l < output.carts.length; l++){
          if(output.carts[l].id == arr[i])
        }

        output.carts.push({
          id: products[j].id,
          title: products[j].title,
          qty: 1,
          subtotal: products[j].price * 1
        })
      }
    }
  }

  console.log(output)
}



console.log(cart([1, 1, 2, 3, 3, 3]))
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

// console.log(cart([1, 3, 2, 1, 4, 3]))
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

// console.log(cart([]))
// anda harus memilih product