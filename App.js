import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Button } from './src/components/Button';
import { Input } from './src/components/input';
import { styles } from './app.styles';
import { currencies } from './src/constants/currencies';
import { ResultCard } from './src/components/ResultCard';
import { exchangeRateApi } from './src/services/api';
import { useState } from 'react';
import { converCurrency } from './src/Utils/convertCurrency';

export default function App() {

  const [amount, setAmount] = useState('')
  const [fromCurrency, setrFromcurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BRL')
  const [result, setResult] = useState('')
  const [loading, setloading] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(null)

  async function fetchExchangeRate() {

    try {

      setloading(true)

      if (!amount) return

      const data = await exchangeRateApi(fromCurrency)
      const rate = data.rates[toCurrency]
      setExchangeRate(rate)
      const convertedAmount = converCurrency(amount, rate)

      console.log(convertedAmount)

      setResult(convertedAmount)


    } catch (err) {
      alert("Erro, tente novamente")
    } finally {
      setloading(false)
    }

  }


  function swapCurrency(){
    setrFromcurrency(toCurrency)
    setToCurrency(fromCurrency)
    setResult('')
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <ScrollView style={styles.ScrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subtitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>

            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setrFromcurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                />
              ))}


            </View>

            <Input label="Valor: " value={amount} onChangeText={setAmount} />

            <TouchableOpacity style={styles.swapButton} onPress={swapCurrency} >
              <Text style={styles.swapButtonText}>
                ↑↓
              </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para: </Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="secondary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setToCurrency(currency.code)}
                  isSelected={toCurrency === currency.code}
                />
              ))}
            </View>

          </View>


          <TouchableOpacity
            style={[styles.convertButton, (!amount || loading) && styles.convertButtonDisable]}
            onPress={fetchExchangeRate}
            disabled={!amount || loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.swapButtonText}>
                Converter
              </Text>
            )}
          </TouchableOpacity>

          <ResultCard
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
