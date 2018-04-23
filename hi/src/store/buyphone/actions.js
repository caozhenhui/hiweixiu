import { SYNC_UPDATE } from './const'
export default{
    //发送ajax请求将数据发到后台服务器数据库，然后更改vuex里的phones
    addGoodInCar ({commit}, goodinfo) {
        //没有数据库 所有添加到localStorage里面
       setTimeout(() => {
           let phones = getPhones();
           let isHas = phones.some((item) => {
               if(item.id == goodinfo.id){
                   item.num ++
                   return true
               }
           });
           if(!isHas) {
               goodinfo.num = 1;
               phones.push(goodinfo)
           };
           localStorage.phones = JSON.stringify(phones);
           commit (SYNC_UPDATE, phones)
       }, 500)
    },
    //获取最开始数据信息
    initPhones ({commit}) {
        setTimeout(() => {
            let initphones = getPhones();
            commit (SYNC_UPDATE, initphones)
        })
    },
    removeIncar ({commit}, goodinfo) {
        setTimeout(() => {
            let phones = getPhones();
            phones = phones.filter((item) => {
                if(item.id === goodinfo.id){
                    item.num--;
                    if(item.num <=0){
                        return false
                    }
                }
                return true
            });
            localStorage.phones = JSON.stringify(phones);
            commit (SYNC_UPDATE, phones)
        },300)
    }
}
function getPhones(){
    return JSON.parse(localStorage.phones?localStorage.phones:'[]')
}