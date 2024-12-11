import { StyleSheet, FlatList, RefreshControl, View } from 'react-native';
import Product from '../Product';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState, useEffect } from 'react';

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
    };

    fetchProducts();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductList(data);
    setRefreshing(false);
  };

  const renderItem = ({ item }: any) => (
    <Product
      title={item.title}
      price={item.price}
      description={item.description}
      image={item.image}
      onAddToCart={() => alert('Товар добавлен в корзину!')}
    />
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Товары</ThemedText>
      </ThemedView>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={productList}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  list: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
