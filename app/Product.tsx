import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface ProductProps {
  title: string;
  price: number;
  description: string;
  image: string;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ title, price, description, image, onAddToCart }) => {
  const isMobile = Dimensions.get('window').width < 768;

  return (
    <View style={[styles.card, isMobile ? styles.mobileCard : styles.desktopCard]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Ionicons name="cart-outline" size={20} color="white" />
          <Text style={styles.addToCartText}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  mobileCard: {
    width: "90%",
    alignSelf: "center",
},
  desktopCard: {
    width: '80%',
    maxWidth: 800,
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default Product;
