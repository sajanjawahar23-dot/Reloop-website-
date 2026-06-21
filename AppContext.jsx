import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

const CART_KEY = 'reloop_cart'
const AUTH_KEY = 'reloop_institution'

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => loadJSON(CART_KEY, []))
  const [institution, setInstitution] = useState(() => loadJSON(AUTH_KEY, null))

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (institution) localStorage.setItem(AUTH_KEY, JSON.stringify(institution))
    else localStorage.removeItem(AUTH_KEY)
  }, [institution])

  function addToCart(product, qty = 1) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { ...product, qty }]
    })
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  function updateQty(id, qty) {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)))
  }

  function clearCart() {
    setCart([])
  }

  function loginInstitution(data) {
    setInstitution(data)
  }

  function logoutInstitution() {
    setInstitution(null)
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0)

  const value = {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    institution,
    loginInstitution,
    logoutInstitution,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
