// Link id'sine sahip olanların açılması
const links = document.querySelectorAll('.linki') // .link sınıfını seçiyoruz

for (let i of links) {
    i.addEventListener('click', toggleLink)
}

function toggleLink() {
    let willOpen = this.nextElementSibling
    console.log(willOpen)

    if (willOpen.classList.contains('hide')) {
        willOpen.classList.remove('hide')
        willOpen.classList.add('show')
        this.querySelector('.fa-plus').classList.toggle('turn')
    } else {
        willOpen.classList.remove('show')
        willOpen.classList.add('hide')
        this.querySelector('.fa-plus').classList.toggle('turn')
    }
}

// HESABIM
const account = document.querySelector('#hesabım')
const sign = document.querySelector('#sign')

account.addEventListener('mouseenter', showSign)
account.addEventListener('mouseleave', closeSign)

function showSign() {
    sign.style.visibility = 'visible'
}

function closeSign() {
    sign.style.visibility = 'hidden'
}



// Manage Amount
const numberAmount = document.querySelector('#number-amount')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')

let amount = 1

if (numberAmount) {
    numberAmount.textContent = amount
}

if (plus) {
    plus.addEventListener('click', plusAmount)
}

if (minus) {
    minus.addEventListener('click', minusAmount)
}

function plusAmount() {
    amount++
    numberAmount.textContent = amount
    updatePrice()
}

function minusAmount() {
    if (amount > 1) {
        amount--
        numberAmount.textContent = amount
        updatePrice()
    }
}

// Price
const price = document.querySelector('#price')
let productPrice = 5400
updatePrice()

function updatePrice() {
    let totalPrice = amount * productPrice
    if (price) {
        price.textContent = totalPrice + ' TL'
    }
}


if (window.location.href === 'http://127.0.0.1:5500/detail.html') {
    function btnDetail() {
        btnPrice = document.querySelector('.price-btn')
        btnPrice.setAttribute('id', enstruments[0]['product-id'])

        btnPrice.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('id')
            const product = enstruments.find(item => item['product-id'] == productId)

            if (product) {
                addToCart(productId)

                console.log('Sepete Ekle:', product)
            } else {
                console.log('Ürün bulunamadı: Product ID', productId)
            }

            addedCount.textContent = listCards.length
        })
    }
    btnDetail()
}

// Like
const likeBtn = document.querySelector('#like-btn')

if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('boya')
    })
}
// Change photo of product

function detailOfProduct() {
    const mainPhoto = document.querySelector('#main-photo')

    const detail5 = document.querySelector('#detail5')
    const detail4 = document.querySelector('#detail4')
    const detail3 = document.querySelector('#detail3')
    const detail2 = document.querySelector('#detail2')
    const detail1 = document.querySelector('#detail1')

    detail5.addEventListener('click', () => {
        mainPhoto.src = './img/gitar1.png'
    })

    detail4.addEventListener('click', () => {
        mainPhoto.src = './img/detaybuyuk4.png'
    })

    detail3.addEventListener('click', () => {
        mainPhoto.src = './img/detaybuyuk3.png'
    })

    detail2.addEventListener('click', () => {
        mainPhoto.src = './img/detaybuyuk2.png'
    })

    detail1.addEventListener('click', () => {
        mainPhoto.src = './img/detaybuyuk1.png'
    })
}

let closeShopping = document.querySelector('.closeShooping')
let listCard = document.querySelector('.listCard')
let listCardTotal = document.querySelector('.total')
let openShopping = document.querySelector('#sepetim')
let cart = document.querySelector('#cart')
const addedCount = document.querySelector('#added-count')


if (openShopping) {
    openShopping.addEventListener('click', function () {
        cart.classList.add('aktif')
    })
}

if (closeShopping) {
    closeShopping.addEventListener('click', function () {
        cart.classList.remove('aktif')
    })
}

console.log(enstruments)
let listCards = []

if(window.location.href == 'http://127.0.0.1:5500/index.html' || window.location.href == 'http://127.0.0.1:5500/categories.html') {
function createProduct() {
    const productDiv = document.getElementById('products')
    enstruments.forEach((value, key) => {
        const div = document.createElement('div')
        div.classList.add('col-lg-4', 'col-sm-6', 'col-12', 'px-sm-2', 'px-0', 'mb-3')

        const card = document.createElement('div')
        card.classList.add('card')

        const cardInfo = document.createElement('div')
        cardInfo.classList.add('card-info')

        const cardTitle = document.createElement('div')
        cardTitle.classList.add('card-title', 'text-center')
        cardTitle.textContent = value.title

        const cardAvatar = document.createElement('div')
        cardAvatar.classList.add('card-avatar')

        const imgA = document.createElement('a')
        imgA.href = "detail.html"

        const img = document.createElement('img')
        img.src = value.image
        img.alt = ''

        const cardSocial = document.createElement('div')
        cardSocial.classList.add('card-social', 'mt-4',)
        cardSocial.textContent = (value.price * value.quantity) + ' TL'

        const button = document.createElement('button')
        button.classList.add('card-social', 'btn', 'btn-warning', 'mb-5')
        button.setAttribute('id', value['product-id'])
        button.textContent = 'Sepete Ekle'

        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('id')
            const product = enstruments.find(item => item['product-id'] == productId)

            if (product) {
                addToCart(productId)

                console.log('Sepete Ekle:', product)
            } else {
                console.log('Ürün bulunamadı: Product ID', productId)
            }

            addedCount.textContent = listCards.length
        })

        // İndex Page
        card.appendChild(cardInfo)
        cardInfo.appendChild(cardTitle)
        cardInfo.appendChild(cardAvatar)
        imgA.appendChild(img)
        cardAvatar.appendChild(imgA)
        cardInfo.appendChild(cardSocial)
        card.appendChild(button)
        div.appendChild(card)

        // İndex Pageπ
        productDiv.appendChild(div)

    })

}
createProduct()
}



if(window.location.href === 'http://127.0.0.1:5500/elektroGitarlar.html') {
    function createSpecificProduct() {
        const productGitarDiv = document.getElementById('products-gitar')
        const guitars = enstruments.filter(item => item.category == 'gitar')
        console.log(guitars)
        guitars.forEach((value) => {
            const div = document.createElement('div')
            div.classList.add('col-lg-3', 'col-sm-6', 'col-12', 'px-sm-2', 'px-0', 'mb-3')
    
            const card = document.createElement('div')
            card.classList.add('card')
    
            const cardInfo = document.createElement('div')
            cardInfo.classList.add('card-info')
    
            const cardTitle = document.createElement('div')
            cardTitle.classList.add('card-title', 'text-center')
            cardTitle.textContent = value.title
    
            const cardAvatar = document.createElement('div')
            cardAvatar.classList.add('card-avatar')
    
            const imgA = document.createElement('a')
            imgA.href = "detail.html"
    
            const img = document.createElement('img')
            img.src = value.image
            img.alt = ''
    
            const cardSocial = document.createElement('div')
            cardSocial.classList.add('card-social', 'mt-4',)
            cardSocial.textContent = (value.price * value.quantity) + ' TL'
    
            const button = document.createElement('button')
            button.classList.add('card-social', 'btn', 'btn-warning', 'mb-5')
            button.setAttribute('id', value['product-id'])
            button.textContent = 'Sepete Ekle'
    
            button.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('id')
                const product = enstruments.find(item => item['product-id'] == productId)
    
                if (product) {
                    addToCart(productId)
    
                    console.log('Sepete Ekle:', product)
                } else {
                    console.log('Ürün bulunamadı: Product ID', productId)
                }
    
                addedCount.textContent = listCards.length
            })
    
            // İndex Page
            card.appendChild(cardInfo)
            cardInfo.appendChild(cardTitle)
            cardInfo.appendChild(cardAvatar)
            imgA.appendChild(img)
            cardAvatar.appendChild(imgA)
            cardInfo.appendChild(cardSocial)
            card.appendChild(button)
            div.appendChild(card)
    
            // İndex Page
            productGitarDiv.append(div)
        })
    
    }
    createSpecificProduct()
}

function addToCart(productId) {
    const product = enstruments.find(item => item['product-id'] == productId)

    if (!product) {
        console.log('Ürün bulunamadı: Product ID', productId)
        return
    }

    // Kontrol etmek için listede aynı ürünü ara
    const existingProduct = listCards.find(item => item.productId === productId)

    if (existingProduct) {
        // Eğer ürün listede varsa sadece miktarını artır
        existingProduct.quantity++
    } else {
        // Eğer ürün listede yoksa yeni bir ürün oluştur ve listeye ekle
        listCards.push({
            productId: productId,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image
        })
    }

    // Sepetin güncellenmesi
    reloadCard()
}

function reloadCard() {
    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0
    listCards.forEach((value) => {
        totalPrice = totalPrice + (value.price * value.quantity)
        count = count + value.addedCount

        if (value != null) {
            let li = document.createElement('li')

            const cardImage = document.createElement('div')
            const cardImg = document.createElement('img')
            cardImg.src = value.image

            const cardTitle = document.createElement('div')
            cardTitle.textContent = value.title

            const cardPrice = document.createElement('div')
            cardPrice.innerHTML = (value.price * value.quantity).toLocaleString()

            const quantity = document.createElement('div')
            quantity.textContent = value.quantity
            quantity.classList.add('count')

            const minusBtn = document.createElement('button')
            minusBtn.classList.add('btn', 'bg-dark', 'text-light')
            minusBtn.textContent = '-'
            const plusBtn = document.createElement('button')
            plusBtn.classList.add('btn', 'bg-dark', 'text-light')
            plusBtn.textContent = '+'

            minusBtn.addEventListener('click', (e) => {
                if (value.quantity > 1) {
                    value.quantity--
                    e.target.parentElement.children[1].textContent = value.quantity
                    cardPrice.innerHTML = (value.price * value.quantity).toLocaleString()
                    totalPrice = totalPrice - (value.price)
                    listCardTotal.innerText = totalPrice.toLocaleString()
                    e.preventDefault()
                } if (value.quantity <= 0) {
                    listCards = listCards.filter(item => item.productId !== value.productId)
                    reloadCard()
                }
            })
            plusBtn.addEventListener('click', (e) => {
                value.quantity++
                e.target.parentElement.children[1].textContent = value.quantity
                cardPrice.innerHTML = (value.price * value.quantity).toLocaleString()
                totalPrice = totalPrice + (value.price)
                listCardTotal.innerText = totalPrice.toLocaleString()
                e.preventDefault()
            })


            const quantityDiv = document.createElement('div')
            quantityDiv.appendChild(minusBtn)
            quantityDiv.appendChild(quantity)
            quantityDiv.appendChild(plusBtn)


            // const cardRemoveButton = document.createElement('button')
            // cardRemoveButton.textContent = 'X'
            // cardRemoveButton.setAttribute('id', value['product-id'])

            cardImage.appendChild(cardImg)
            li.appendChild(cardImage)
            li.appendChild(cardTitle)
            li.appendChild(cardPrice)
            li.appendChild(quantityDiv)
            // li.appendChild(cardRemoveButton)
            listCard.appendChild(li)
        }
    })
    listCardTotal.innerText = totalPrice.toLocaleString()
    addedCount.innerText = count
}

const totalBtn = document.getElementById('totalBtn') 
totalBtn.addEventListener('click', () => {
    listCards = [] 
    reloadCard() 
})
