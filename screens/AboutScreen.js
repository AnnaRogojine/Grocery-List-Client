import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView,StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const AboutScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;