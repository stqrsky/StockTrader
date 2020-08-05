<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

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
        },
        components: {
            appStock: Stock
        }
    }
</script>