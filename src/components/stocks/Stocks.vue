<template>
    <h1>The Stocks Component</h1>
</template>

<script>
    export default {
        data() {
            return {
                stocks: [
                    { id: 1, name: 'Nike', price: 110 },
                    { id: 2, name: 'Inditex', price: 200 },
                    { id: 3, name: 'LVMH', price: 250 },
                    { id: 4, name: 'TJX', price: 8 },
                ]
            }
        }
    }
</script>