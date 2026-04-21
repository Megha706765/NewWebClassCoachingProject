const db = new dexieMin('ShoppingApp')
db.version(1).stores(  { items: '++id, description, price, isPurchased' })

const itemForm = document.getElementById('itemForm')
const itemDiv = document.getElementById('itemDiv')
const totalPrice = document.getElementById('totalPriceDiv')

itemForm.onsubmit = async (event: Event) => {
  event.preventDefault()

  const name = document.getElementById('nameInput').value
const quantity = document.getElementById('quantityInput').value
const price = document.getElementById('priceInput').value

await db.items.add({name, quantity, price})

itemForm.reset()

}