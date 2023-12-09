import React, { createContext, useContext, useState } from 'react';

interface Product {
    id: number;
    name: string;
    photo: string;
    category: string;
    price: number;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    getCart: () => CartItem[];
    getTotal: () => bigint;
    clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        const existingItem = cart.find((item) => item.product.id === product.id);

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: number) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };

    const getCart = () => {
        return [...cart];
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + BigInt(item.product.price) * BigInt(item.quantity), BigInt(0));
    };

    const clearCart = () => {
        setCart([]);
    };

    const contextValue: CartContextProps = {
        cart,
        addToCart,
        removeFromCart, // Add the new function to the context
        getCart,
        getTotal,
        clearCart,
    };

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
