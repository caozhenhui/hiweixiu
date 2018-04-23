export default{
    totalinfo (state) {
        let total = {price:0, num:0};
        state.phones.forEach( (item) => {
            total.price += parseInt(item.price)*item.num;
            total.num += parseInt(item.num);
        } )
        return total
    }
}