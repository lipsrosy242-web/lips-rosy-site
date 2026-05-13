"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, Trash2, ArrowUp } from "lucide-react"

export default function Home() {

const products = [

  {
    name: "Pack Premium 💎",
    price: 14000,
    image: "14000pack.jpg",
    description: "Routine complète pour des lèvres roses, douces et réparées rapidement.",
    bestseller: true
  },

  {
    name: "Pack Rosy 🌸",
    price: 8500,
    image: "8500pack.jpg",
    description: "Routine intense pour hydrater et révéler des lèvres naturellement plus roses.",
    bestseller: false
  },

  {
    name: "Pack Glow ✨",
    price: 7000,
    image: "7000pack.jpg",
    description: "Routine améliorée pour des lèvres plus roses et brillantes.",
    bestseller: false
  },

  {
    name: "Mini Routine 💋",
    price: 4500,
    image: "4500pack.jpg",
    description: "Routine lèvres roses simple et efficace.",
    bestseller: true
  },

  {
    name: "Mini Pack 🌸",
    price: 3000,
    image: "3000pack.jpg",
    description: "Hydratation + lèvres plus roses progressivement.",
    bestseller: false
  }

]

  const [cart, setCart] = useState<any[]>([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const [prenom, setPrenom] = useState("")
  const [telephone, setTelephone] = useState("")
  const [ville, setVille] = useState("")
  const [adresse, setAdresse] = useState("")

  const addToCart = (product: any) => {
    setCart([...cart, product])

    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 2000)
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
    <main className="min-h-screen bg-pink-50 pb-40">

      {/* HEADER FIXE */}
      <div className="sticky top-0 z-40 bg-pink-50/95 backdrop-blur border-b border-pink-100 px-4 py-4 flex justify-between items-center shadow-sm">

        <div>

          <h1
            translate="no"
            className="text-2xl md:text-4xl font-black text-pink-600"
          >
            𝐋𝐈𝐏𝐒 𝐑𝐎𝐒𝐘 💋
          </h1>

          <p className="text-xs md:text-sm text-gray-700 mt-1 font-medium">
            Des lèvres roses & douces ✨
          </p>

        </div>

        <a
          href="https://wa.me/242067842982"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 active:scale-95 transition text-white px-4 py-2 rounded-2xl font-bold text-sm"
        >
          Nous contacter
        </a>

      </div>

      {/* PRODUITS */}
      <section className="px-4 mt-6">

  <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">

    <img
      src="3000pack.jpg"
      className="w-full object-cover"
    />

    <div className="p-6">

      <p className="text-pink-500 font-semibold text-sm tracking-wide">
        LIPS ROSY COLLECTION ✨
      </p>

      <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
        Des lèvres naturellement roses 💋
      </h2>

      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        Découvrez notre routine lèvres roses conçue pour hydrater,
        adoucir et révéler la beauté naturelle de vos lèvres.
      </p>

     <p className="text-center text-gray-700 font-medium mt-4 animate-bounce cursor-pointer"
onClick={() => window.scrollTo({
  top: 700,
  behavior: "smooth"
})}
>
  Découvrez notre collection complète ↓
</p>

    </div>

  </div>

</section>
      <div className="grid md:grid-cols-3 gap-5 p-4 mt-4">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-4 shadow-lg hover:scale-[1.02] transition duration-300"
          >

            <div className="relative">

              <img
                src={product.image}
                className="rounded-2xl w-full"
              />

              {product.bestseller && (
                <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🔥 Le plus vendu
                </div>
              )}

            </div>

            <h2 className="text-xl font-black text-gray-900 mt-4">
              {product.name}
            </h2>

            <p className="text-gray-700 mt-2 text-sm leading-relaxed font-medium">
              {product.description}
            </p>

            <p className="text-pink-600 font-black text-2xl mt-4">
              {product.price.toLocaleString()} FCFA
            </p>

            <div className="flex gap-2 mt-5">

              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-pink-500 hover:bg-pink-600 active:scale-95 transition text-white py-3 rounded-2xl font-bold text-sm"
              >
                Ajouter
              </button>

              <button
                onClick={() => {
                  addToCart(product)
                  setShowCheckout(true)
                }}
                className="flex-1 bg-black hover:bg-gray-800 active:scale-95 transition text-white py-3 rounded-2xl font-bold text-sm"
              >
                Commander
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* TÉMOIGNAGES */}
      <div className="px-4 mt-6">

        <div className="bg-white rounded-3xl p-5 shadow-lg">

          <h3 className="text-2xl font-black text-pink-600 text-center mb-4">
            Avis clientes 💕
          </h3>

          <div className="space-y-4">

            <div className="bg-pink-50 rounded-2xl p-4">
              <p className="font-bold text-gray-900">⭐⭐⭐⭐⭐ Emma</p>
              <p className="text-gray-700 text-sm mt-1">
                Mes lèvres sont devenues plus roses après quelques jours 😭💋
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-4">
              <p className="font-bold text-gray-900">⭐⭐⭐⭐⭐ Sarah</p>
              <p className="text-gray-700 text-sm mt-1">
                Le Pack Glow est incroyable ✨
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* PANIER FLOTTANT */}
      <button
        onClick={() => {
          if (cart.length > 0) {
            setShowCheckout(true)
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 active:scale-95 transition text-white px-5 py-4 rounded-full shadow-2xl flex items-center gap-3"
      >

        <ShoppingCart size={24} />

        <span className="font-bold">
          {cart.length}
        </span>

      </button>

      {/* NOTIFICATION */}
      {showToast && (

        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-3 rounded-2xl z-50 shadow-2xl font-bold text-sm animate-pulse">
          ✅ Produit ajouté au panier
        </div>

      )}

      {/* CHECKOUT */}
      {showCheckout && (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-3">

          <div className="bg-white w-full max-w-lg rounded-3xl p-4 max-h-[92vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-2xl font-black text-pink-600">
                Finaliser la commande
              </h2>

              <button
                onClick={() => setShowCheckout(false)}
                className="text-2xl font-bold"
              >
                ✖
              </button>

            </div>

            {/* PRODUITS */}
            <div className="space-y-2">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="bg-pink-50 rounded-2xl p-3 flex justify-between items-center"
                >

                  <div>
                    <h3 className="font-black text-gray-900 text-sm">
                      {item.name}
                    </h3>

                    <p className="text-pink-600 font-black text-sm mt-1">
                      {item.price.toLocaleString()} FCFA
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 hover:bg-red-600 active:scale-95 transition text-white p-2 rounded-xl"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              ))}

            </div>

            {/* TOTAL */}
            <div className="text-center mt-5">

              <p className="text-gray-700 font-bold text-sm">
                Total
              </p>

              <h3 className="text-3xl font-black text-pink-600 mt-1">
                {total.toLocaleString()} FCFA
              </h3>

          </div>
            {/* FORMULAIRE */}
            <div className="mt-5 space-y-3">

              <div>

                <label className="font-black text-sm text-gray-900">
                  Prénom
                </label>

                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-2xl p-3 mt-1 text-sm font-medium"
                />

                <p className="text-xs text-gray-500 mt-1">
                  
                </p>

              </div>

              <div>

                <label className="font-black text-sm text-gray-900">
                  Téléphone
                </label>

                <input
                  type="tel"
                  value={telephone}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, "")
                    setTelephone(onlyNumbers)
                  }}
                  className="w-full border-2 border-gray-200 rounded-2xl p-3 mt-1 text-sm font-medium"
                  placeholder="242067842982"
                />

                <p className="text-xs text-gray-500 mt-1">
                  +242...
                </p>

              </div>

              <div>

                <label className="font-black text-sm text-gray-900">
                  Ville
                </label>

                <input
                  type="text"
                  autoComplete="off"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-2xl p-3 mt-1 text-sm font-medium"
                />

                <p className="text-xs text-gray-500 mt-1">
                  Brazzaville
                </p>

              </div>

              <div>

                <label className="font-black text-sm text-gray-900">
                  Adresse
                </label>

                <input
                  type="text"
                  autoComplete="off"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-black placeholder-gray-500 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                />

                <p className="text-xs text-gray-500 mt-1">
                  14 Rue Bonga Moungali
                </p>

              </div>

              {/* WHATSAPP */}
              <button
                disabled={!prenom || !telephone || !ville}
                onClick={() => {
                  window.open(whatsappLink, "_blank")
                }}
                className={`w-full py-4 rounded-2xl text-lg font-black mt-3 text-white transition active:scale-95 ${
                  !prenom || !telephone || !ville
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                Confirmer la commande
              </button>

              <p className="text-center text-gray-500 text-xs mt-2">
                Paiement à la livraison 🚚
              </p>

            </div>

          </div>

        </div>

      )}

      {/* RETOUR EN HAUT */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-28 right-6 bg-black hover:bg-gray-800 active:scale-95 transition text-white p-3 rounded-full shadow-2xl z-50"
      >
        <ArrowUp size={20} />
      </button>

    </main>
  )
}