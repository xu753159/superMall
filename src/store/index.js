import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
	state: {
		cartList: []
	},
	//修改store里的东西都需要经过mutations
	mutations: {
			addCount(state,payload){
				payload.count++
			},
			addPush(state,payload){
				state.cartList.push(payload)
			}
			// let oldProduct = null;
			// for(let item of state.cartList){
			// 	if(item.iid === payload.iid){
			// 		oldProduct = item
			// 	}
			// }
			//数组find()方法
			
			
			// state.cartList.push(payload)
			// console.log(payload);
		},
	actions:{
		addCart(context,payload){
			return new Promise((resolve,reject)=>{
				let oldProduct = context.state.cartList.find(function(item){
					return item.iid === payload.iid
				})
				if(oldProduct){
					context.commit("addCount",payload)
					resolve("商品添加成功")
				}else {
					payload.count = 1;
					payload.checked = true;
					context.commit("addPush",payload)
					resolve("添加了新的商品")
			}
			})
	}
	}
})
	

//3.挂载
export default store