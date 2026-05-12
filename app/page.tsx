"use client"

import { useState } from "react"
import { ShoppingCart, Trash2 } from "lucide-react"

export default function Home() {

  const products = [
    {
      name: "Mini Pack 🌸",
      price: 3000,
      image: "3000pack.jpg",
      description: "Hydratation + lèvres plus roses progressivement."
    },

    {
      name: "Mini Routine 💋",
      price: 4500,
      image: "4500pack.jpg",
      description: "Hydratation + lèvres plus roses progressivement."
    },

    {
      name: "Pack Glow ✨",
      price: 7000,
      image: "7000pack.jpg",
      description: "Routine améliorée pour des lèvres plus roses et brillantes."
    },

    {
      name: "Pack Homme 👑",
      price: 8500,
      image: "8500pack.jpg",
      description: "Version spéciale homme pour éclaircir et hydrater les lèvres."
    },

    {
      name: "Pack Premium 💎",
      price: 14000,
      image: "14000pack.jpg",
      description: "Routine complète pour des lèvres roses, douces et réparées rapidement."
    }
  ]

  const [cart, setCart] = useState<any[]>([])
  const [showCheckout, setShowCheckout] = useState(false)

  const [prenom, setPrenom] = useState("")
  const [telephone, setTelephone] = useState("")
  const [ville, setVille] = useState("")
  const [adresse, setAdresse] = useState("")

  const addToCart = (product: any) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const commandeTexte = `
Bonjour Lips Rosy 💋

Je souhaite commander :

${cart.map(item => `- ${item.name} — ${item.price.toLocaleString()} FCFA`).join("\n")}

Total : ${total.toLocaleString()} FCFA

Prénom : ${prenom}
Téléphone : ${telephone}
Ville : ${ville}
Adresse : ${adresse}

Paiement à la livraison 🚚
`

  const whatsappLink = `https://wa.me/242067842982?text=${encodeURIComponent(commandeTexte)}`

  return (
    <main className="min-h-screen bg-pink-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">

        <h1
  translate="no"
  className="text-5xl font-bold text-center text-pink-600 mt-8"
>
  LIPS ROSY 💋
</h1>

          <p className="text-gray-700 mt-2">
            Choisissez votre routine lèvres roses ✨
          </p>
        </div>

        <div className="flex items-center gap-4">

          {/* CONTACT */}
          <a
            href="https://wa.me/242067842982"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl font-bold"
          >
            Nous contacter
          </a>

          {/* PANIER */}
          <button
            onClick={() => {
              if(cart.length > 0){
                setShowCheckout(true)
              }
            }}
            className="relative bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
          >

            <ShoppingCart size={35} className="text-pink-600" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-sm px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}

          </button>

        </div>

      {/* PRODUITS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-lg hover:scale-105 transition duration-300"
          >

            <img
              src={product.image}
              className="rounded-2xl w-full"
            />

            <h2 className="text-2xl font-bold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {product.description}
            </p>

            <p className="text-pink-600 font-bold text-2xl mt-4">
              {product.price.toLocaleString()} FCFA
            </p>

            <div className="flex gap-3 mt-5">

  {/* AJOUTER AU PANIER */}
  <button
    onClick={() => addToCart(product)}
    className="flex-1 bg-pink-500 hover:bg-pink-600 active:scale-95 transition text-white py-3 rounded-2xl font-bold"
  >
    Ajouter
  </button>

  {/* COMMANDER */}
  <button
    onClick={() => {
      addToCart(product)
      setShowCheckout(true)
    }}
    className="flex-1 bg-black hover:bg-gray-800 active:scale-95 transition text-white py-3 rounded-2xl font-bold"
  >
    Commander maintenant
  </button>

</div>

          </div>

        ))}

      </div>

      {/* CHECKOUT */}
      {showCheckout && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

          <div className="bg-white w-full max-w-xl rounded-3xl p-6 max-h-[95vh] overflow-y-auto">

            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-bold text-pink-600">
                Finaliser la commande
              </h2>

              <button
                onClick={() => setShowCheckout(false)}
                className="text-3xl"
              >
                ✖
              </button>

            </div>

            {/* PRODUITS PANIER */}
            <div className="mt-6 space-y-3">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="bg-pink-50 p-4 rounded-2xl flex justify-between items-center"
                >

                  <div>
                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-pink-600 font-bold">
                      {item.price.toLocaleString()} FCFA
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white p-2 rounded-xl"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              ))}

            </div>

            {/* TOTAL */}
            <h3 className="text-3xl font-bold text-pink-600 text-center mt-8">
              Total : {total.toLocaleString()} FCFA
            </h3>

            {/* FORMULAIRE */}
            <div className="mt-8 space-y-5">

              <div>

                <label className="font-semibold">
                  Prénom
                </label>

                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-2xl p-4 mt-2"
                />

                <p className="text-gray-400 mt-1">
                  Ex : Emma
                </p>

              </div>

              <div>

                <label className="font-semibold">
                  Téléphone
                </label>

                <input
  type="tel"
  value={telephone}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "")
    setTelephone(onlyNumbers)
  }}
  className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2"
  placeholder="06 784 29 82"
/>

                <p className="text-gray-400 mt-1">
                  Ex : 06 784 29 82
                </p>

              </div>

              <div>

                <label className="font-semibold">
                  Ville
                </label>

                <input
                  type="text"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-2xl p-4 mt-2"
                />

                <p className="text-gray-400 mt-1">
                  Ex : Brazzaville
                </p>

              </div>

              <div>

                <label className="font-semibold">
                  Adresse
                </label>

                <input
                  type="text"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-2xl p-4 mt-2"
                />

                <p className="text-gray-400 mt-1">
                  Ex : 123 Rue Bonga Moungali
                </p>

              </div>

              {/* WHATSAPP */}
              <button
  disabled={!prenom || !telephone || !ville}
  onClick={() => {
    window.open(whatsappLink, "_blank")
  }}
  className={`w-full py-4 rounded-2xl text-xl font-bold mt-6 text-white ${
    !prenom || !telephone || !ville
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-green-500 hover:bg-green-600"
  }`}
>

  Confirmer la commande

</button>

              <p className="text-center text-gray-500 text-sm">
                Paiement à la livraison 🚚
              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  )
}