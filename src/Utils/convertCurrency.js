

export function converCurrency (amount, rate) {
    return(parseFloat(amount) * rate).toFixed(2)
}